<template>
    <div class='swiper'>
        <swiper
                :indicator-dots='true'
                indicator-color='#EA5A49'
                :autoplay='true'
                :interval='6000'
                :duration='1000'
                :circular='true'
        >
            <div :key='imgindex' v-for='(top,imgindex) in imgUrls'>
                <swiper-item>
                    <img
                            @click='bookDetail(img)'
                            class='slide-image'
                            mode='aspectFit'
                            v-for='img in top'
                            :key='img.id'
                            :src="img.image"
                    >
                </swiper-item>
            </div>

        </swiper>
    </div>
</template>

<script>
  export default {
    props: ['tops'],
    computed: {
      imgUrls () {
        // 请用chunk函数  比如lodash的chunk方法
        let res = this.tops
        console.log([res.slice(0, 3), res.slice(3, 6)])
        return [res.slice(0, 3), res.slice(3, 6)]
      }
    },
    methods: {
      bookDetail (item) {
        wx.navigateTo({
          url: '/pages/detail/main?id=' + item.id
        })
      }
    }

  }
</script>
<style lang='scss'>
    .swiper {
        padding-top: 10px;
        background: rgba(192, 204, 170, 0.1);
        .slide-image {
            width: 33%;
            height: 258rpx;
        }
    }
</style>

