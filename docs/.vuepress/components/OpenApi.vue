<template lang='html'>
  <div class='open-api-container'></div>
</template>

<script>
// Reference: https://github.com/amplia-iiot/vuepress-openapi
import SwaggerUI from 'swagger-ui'
import 'swagger-ui/dist/swagger-ui.css'
// import { resolve } from 'path'

export default {
  name: 'OpenApi',
  props: {
    page: {
      type: Object,
      required: true
    }
  },
  watch: {
    page: {
      immediate: true,
      handler () {
        const { servers = [] } = this.$themeConfig
        let paths = this.page.regularPath.replace('.html', '/').split('/').filter((item) => !!item)
        // const fullPath =  resolve(__dirname, `../../${paths.join('/')}/swagger.${this.json ? 'json' : 'yaml'}`)
        const fullPath =  `../../${paths.join('/')}/swagger.${this.json ? 'json' : 'yaml'}`
        import(fullPath).then(spec => {
          SwaggerUI({
            spec: { ...spec, servers: servers.map(url => ({ url })) }
          })
        }).catch(() => {
          this.$el.innerHTML = `== swagger import error ==<br>${fullPath}`
        })
      }
    }
  },
  computed: {
    yaml () {
      return this.$frontmatter.openapi === 'json'
    }
  }
}
</script>

<style scope>
.open-api-container pre {
  background-color: rgb(125, 132, 146)
}
</style>
