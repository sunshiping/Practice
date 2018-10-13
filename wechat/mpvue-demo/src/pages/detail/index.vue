<template>
    <div>
        <BookDetail :bookInfo="bookInfo"></BookDetail>
        <i-button type="primary"  open-type="share">转发给好友</i-button>
        <i-button type="default" @click="goBack">返回首页</i-button>
    </div>
</template>

<script>
  import {get} from '@/utils/index'
  import BookDetail from '@/components/BookDetail'
  export default {
    components: {
      BookDetail
    },
    data () {
      return {
        bookid: '',
        bookInfo: {}
      }
    },
    mounted () {
      this.bookid = this.$root.$mp.query.id
      this.getDetail()
    },
    methods: {
      async getDetail () {
        const info = await get('/weapp/bookdetail', {id: this.bookid})
        wx.setNavigationBarTitle({
          title: `${info.title}图书`
        })
        this.bookInfo = info
      },
      goBack () {
        wx.switchTab({
          url: `/pages/books/main`
        })
      }
    },
    onShareAppMessage: function (res) {
      if (res.from === 'button') {
        // 来自页面内转发按钮
      }
      return {
        path: '/pages/detail/main?id=' + this.bookInfo.id
      }
    }
  }
</script>

<style>
</style>
