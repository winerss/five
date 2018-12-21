<template>
  <div id="home">
    <div class="tab-wrapper">
      <div class="tab" :style="{width: (tab.length * 70) + 'px'}">
        <mu-container>
          <mu-tabs :value.sync="active">
            <mu-tab v-for="item in tab" :key="item.id">{{item.name}}</mu-tab>
          </mu-tabs>
        </mu-container>
      </div>
    </div>
    <mu-carousel hide-controls class="lists">
      <mu-carousel-item>
        <div class="list" v-for="item in lists" :key="item.id">
          <img src="https://img2.woyaogexing.com/2018/12/10/841ea43517ed9175!600x600.jpg" alt="">
          <p>{{item.name}}</p>
        </div>
      </mu-carousel-item>
      <!-- <mu-carousel-item>
        2
      </mu-carousel-item> -->
    </mu-carousel>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: 0,
      tab: [
        {id: 1, name: '精选'},
        {id: 2, name: '男装'},
        {id: 3, name: '女装'},
        {id: 4, name: '鞋包'},
        {id: 5, name: '美食'},
        {id: 6, name: '化妆品'},
        {id: 7, name: '数码'},
        {id: 8, name: '居家'},
        {id: 9, name: '母婴'},
        {id: 10, name: '文体车品'},
        {id: 11, name: '内衣'}
      ],
      lists: [
        {id: 1, name: '精选'},
        {id: 2, name: '男装'},
        {id: 3, name: '女装'},
        {id: 4, name: '鞋包'},
        {id: 5, name: '美食'},
        {id: 6, name: '化妆品'},
        {id: 7, name: '数码'},
        {id: 8, name: '居家'},
        {id: 9, name: '母婴'},
        {id: 10, name: '文体车品'}
      ]
    }
  }
}
</script>

<style lang="less">
@import '../../assets/css/common.less';
#home{
  position: relative;
  font-size: @sfont;
}
.tab-wrapper{
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}
.tab-wrapper&::-webkit-scrollbar{
  display: none;
}
.mu-tab-wrapper{
  padding: 0;
}
.tab-bar .mu-tab{
  min-width: 70px;
  width: 70px;
  max-width: 70px;
}
.mu-carousel{
  height: 14rem;
}
.lists .list{
  float: left;
  width: 20%;
  height: 6rem;
  margin-bottom: 1rem;
  text-align: center;
}
.lists .list img{
  height: 3rem;
  width: 3rem;
  margin-top: 1rem;
}
.lists .list p{
  height: 2rem;
  line-height: 2rem;
}
</style>
