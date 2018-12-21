<template>
  <div id="Index">
    <router-view/>
    <mu-container id="navBar">
      <mu-bottom-nav>
        <mu-bottom-nav-item title="首页" icon="home" to="/home"></mu-bottom-nav-item>
        <mu-bottom-nav-item title="超级搜" icon="search" to="/search"></mu-bottom-nav-item>
        <mu-bottom-nav-item title="拨号" icon="apps" to="/dial"></mu-bottom-nav-item>
        <mu-bottom-nav-item title="附近" icon="place" to="/around"></mu-bottom-nav-item>
        <mu-bottom-nav-item title="我的" icon="person" to="/about"></mu-bottom-nav-item>
      </mu-bottom-nav>
    </mu-container>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
    }
  },
  components: {
  }
}
</script>

<style lang="less">
@import '../../assets/css/common.less';
#navBar{
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}
#navBar .mu-bottom-nav-shift-wrapper{
  background: #eee;
}
.mu-bottom-item{
  min-width: inherit;
  max-width: inherit;
}
</style>
