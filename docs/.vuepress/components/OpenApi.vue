<template>
  <div class='open-api-container'></div>
</template>

<script>
// Reference: https://github.com/amplia-iiot/vuepress-openapi
import SwaggerUI from 'swagger-ui'
import 'swagger-ui/dist/swagger-ui.css'

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
        const relativePath =  `../../${paths.join('/')}/swagger.${this.yaml ? 'yaml' : 'json'}`
        // import(relativePath) ToDo 何故か変数に入れてimportすると「Error: Cannot find module」になる js-yaml-loaderのせい？
        import(`../../${paths.join('/')}/swagger.${this.yaml ? 'yaml' : 'json'}`)
          .then(spec => {
            SwaggerUI({
              spec: { ...spec, servers: servers.map(url => ({ url })) },
              domNode: this.$el
            })
          })
          .catch((e) => {
            console.log(e)
            this.$el.innerHTML = `== swagger import error ==<br>${relativePath}`
          })
      }
    }
  },
  computed: {
    yaml () {
      return this.$frontmatter.openapi === 'yaml'
    }
  }
}
</script>

<style scope>
.open-api-container pre {
  background-color: rgb(125, 132, 146)
}
</style>
