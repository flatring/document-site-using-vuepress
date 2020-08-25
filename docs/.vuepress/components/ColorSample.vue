<template lang="html">
  <span id="ColorSample">
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      width="238"
      height="18"
      preserveAspectRatio="none"
      viewBox="0 0 238 18"
    >
      <desc>Color Sample</desc>
      <rect x="1" y="1" width="16" height="16" rx="3" stroke="black" stroke-width="2" :fill="color" />
      <text x="22" y="50%" font-family="sans-serif" dominant-baseline="central">
        RGB({{ color }})
      </text>
    </svg>
  </span>
</template>

<script>
export default {
  props: ['color']
}
</script>

<style lang="css">
span#ColorSample {
  display: inline-block;
  vertical-align: middle;
  line-height: 1;
  max-height: 100%;
  width: auto;
}
</style>
