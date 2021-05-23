<template>
  <div class="open-api-container">
    <ul class="errors">
      <li v-show="state.isValid">{{ state.message }}</li>
    </ul>
    <slot />
  </div>
</template>

<script>
// Reference: https://github.com/amplia-iiot/vuepress-openapi
import SwaggerUI from 'swagger-ui'
import 'swagger-ui/dist/swagger-ui.css'

export default {
  data () {
    return {
      state: {
        isValid: false,
        message: ''
      }
    }
  },
  props: {
    fileRelativePath: {
      type: String,
      default: 'swagger.yaml'
    }
  },
  // beforeMount () {
  mounted () {
    const { servers = [] } = this.$themeConfig
    // console.log('fullPath=', fullPath)
    // console.log('this.page=', this.$page)
    console.log('this.fileRelativePath=', this.fileRelativePath)
    const reg = /^(\/?\w)*\.(json|yaml|yml)$/
    this.state.isValid = !reg.test(this.fileRelativePath)
    if (this.state.isValid) {
      this.state.message = `validation error in fileRelativePath '${this.fileRelativePath}'.`
      return
    }

    let paths = this.$page.regularPath.replace('.html', '/').split('/').filter((item) => !!item)
    paths.push(this.fileRelativePath)
    import(`../../${paths.join('/')}`)
      .then(spec => {
        SwaggerUI({
          spec: { ...spec, servers: servers.map(url => ({ url })) },
          domNode: this.$el
        })
      })
      .catch((err) => {
        this.state.isValid = true
        this.state.message = err
      })
  }
}
</script>

<style scope>
.open-api-container pre {
  background-color: rgb(125, 132, 146)
}

.errors {
  color: #af0d0d
}
</style>
