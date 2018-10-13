<template>
    <div>
        <Card v-for="book in books" :key="book.id" wx:for-item="book" :book='book'></Card>
        <i-load-more v-if="!dataMore" tip="我也是有底线的" :loading="false"/>
    </div>
</template>

<script>
  import {get} from '@/utils/index'
  import Card from '@/components/Card'
  export default {
    components: {
      Card
    },
    data () {
      return {
        books: [],
        page: 0,
        dataMore: true,
        imgUrls: [],
        indicatorDots: false,
        autoplay: false,
        interval: 5000,
        duration: 1000,
        id: ''
      }
    },
    mounted () {
      this.id = wx.getStorageSync('jscode').openid
      this.getList(true)
    },
    onPullDownRefresh () {
      this.getList(true)
      if (!this.dataMore) {
        this.dataMore = true
      }
      setTimeout(function () {
        wx.stopPullDownRefresh()
      }, 1000)
    },
    // 上拉加载，拉到底部触发
    onReachBottom () {
      // 到这底部在这里需要做什么事情
      if (this.dataMore) {
        this.page = this.page + 1
        this.getList()
      }
    },
    methods: {
      async getList (init) {
        if (init) {
          this.page = 0
          this.dataMore = true
        }
        wx.showNavigationBarLoading()
        console.log(this.id)
        const books = await get('/weapp/dedicate', {page: this.page, id: this.id})
        if (books.list.length < 10 && this.page >= 0) {
          this.dataMore = false
        }
        if (init) {
          this.books = books.list
        } else {
          this.books = this.books.concat(books.list)
        }
        wx.hideNavigationBarLoading()
      }
    }
  }
</script>

<style>
</style>
