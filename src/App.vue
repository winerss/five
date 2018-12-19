<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
@import 'assets/css/common.less';
#app{
  position: absolute;
  height: 100%;
  width: 100%;
  background: @bgcolor;
}
</style>
