<template>
  <div id="Index">
    <router-view/>
    <mu-container id="navBar">
      <mu-bottom-nav>
        <router-link to="/home"><mu-bottom-nav-item title="Home" icon="home"></mu-bottom-nav-item></router-link>
        <router-link to="/home2"><mu-bottom-nav-item title="Home" icon="home"></mu-bottom-nav-item></router-link>
        <router-link to="/home3"><mu-bottom-nav-item title="Home" icon="home"></mu-bottom-nav-item></router-link>
        <router-link to="/about"><mu-bottom-nav-item title="about" icon="home"></mu-bottom-nav-item></router-link>
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
  background: #f5f5f5;
}
#navBar .mu-bottom-nav-shift-wrapper{
  background: #f5f5f5;
}
</style>
