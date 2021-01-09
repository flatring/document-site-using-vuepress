<template lang="html">
  <pre>
    <code>
      <span class="bg-blue text-white rounded-1 px-2 py-1" style="text-transform: uppercase">{{ method }}</span>&ensp;{{ url }}
    </code>
  </pre>
</template>

<script>
export default {
  props: ['method', 'url']
}
</script>

<style scoped lang="css">
pre {
  padding: 0;
  margin: 0;
  word-wrap: normal;
}
.bg-blue {
  background-color: #0366d6 !important;
}
.text-white {
  color: #fff !important;
}
.rounded-1 {
  border-radius: 4px !important;
}
.px-2 {
  padding-right: 8px !important;
  padding-left: 8px !important;
}
.py-1 {
  padding-top: 4px !important;
  padding-bottom: 4px !important;
}
element.style {
  text-transform: uppercase;
}
</style>
