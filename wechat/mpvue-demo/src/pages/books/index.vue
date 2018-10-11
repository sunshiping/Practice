<template>
    <div>
        <ul>
            <li v-for="v in books" :key="v.id">{{ v.title }}<img :src="v.image" alt="封面图"></li>
        </ul>
    </div>
</template>

<script>
  import {get} from '@/utils/index'

  export default {
    components: {},
    data () {
      return {
        books: [],
        dataMore: true
      }
    },
    mounted () {
      this.getList()
    },
    async onPullDownRefresh () {
      this.getList()
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
        this.loadMore()
      }
    },
    methods: {
      async getList () {
        const books = await get('/weapp/booklist')
        this.books = books.list
      },
      async loadMore () {
        console.log('暂无更多数据')
        this.dataMore = false
      }
    }
  }
</script>

<style>
</style>
