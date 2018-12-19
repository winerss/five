<template>
    <div id="header">
        <mu-appbar style="width: 100%;" color="primary">
            <mu-button icon slot="left">
                <mu-icon value="menu"></mu-icon>
            </mu-button>
            Title
            <mu-menu slot="right">
                <mu-button flat>MENU</mu-button>
                <mu-list slot="content">
                <mu-list-item button>
                    <mu-list-item-content>
                    <mu-list-item-title>Menu Item 1</mu-list-item-title>
                    </mu-list-item-content>
                </mu-list-item>
                <mu-list-item button>
                    <mu-list-item-content>
                    <mu-list-item-title>Menu Item 2</mu-list-item-title>
                    </mu-list-item-content>
                </mu-list-item>
                </mu-list>
            </mu-menu>
        </mu-appbar>
    </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style lang="less">

</style>
