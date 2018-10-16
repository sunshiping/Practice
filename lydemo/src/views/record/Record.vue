<template>
    <div class="record">
        <swiper :list="dataList" v-model="swiperIndex" loop auto dots-position="center"
                @on-index-change="onIndexChange"></swiper>
        <div class="weui-tab__panel" :style="{ height: scrollHeight + 'px' }">
            <group>
                <cell title="订单号:201809091623">
                    <div>
                        <span style="color: #EA5149">使用中</span>
                    </div>
                </cell>
                <cell is-link link="/detail?id=1">
                    <div slot="title"><span style="vertical-align:middle;">位置: 一号病房楼 29床</span></div>
                    <div slot="title"><span style="vertical-align:middle;">时长: 20小时20分钟</span></div>
                    <div slot="title"><span style="vertical-align:middle;">费用: 50元</span></div>
                </cell>
                <cell value="2018-09-26 09:04:30"></cell>
            </group>
            <group>
                <cell title="订单号:201809091623">
                    <div>
                        <span style="color: #3CEA86">已完成</span>
                    </div>
                </cell>
                <cell is-link link="/detail?id=12">
                    <div slot="title"><span style="vertical-align:middle;">位置: 一号病房楼 29床</span></div>
                    <div slot="title"><span style="vertical-align:middle;">时长: 20小时20分钟</span></div>
                    <div slot="title"><span style="vertical-align:middle;">费用: 50元</span></div>
                </cell>
                <cell value="2018-09-26 09:04:30"></cell>
            </group>
            <group>
                <cell title="订单号:201809091623">
                    <div>
                        <span style="color: #3CEA86">已完成</span>
                    </div>
                </cell>
                <cell is-link>
                    <div slot="title"><span style="vertical-align:middle;">位置: 一号病房楼 29床</span></div>
                    <div slot="title"><span style="vertical-align:middle;">时长: 20小时20分钟</span></div>
                    <div slot="title"><span style="vertical-align:middle;">费用: 50元</span></div>
                </cell>
                <cell value="2018-09-26 09:04:30"></cell>
            </group>
            <group>
                <cell title="订单号:201809091623">
                    <div>
                        <span style="color: #3CEA86">已完成</span>
                    </div>
                </cell>
                <cell is-link>
                    <div slot="title"><span style="vertical-align:middle;">位置: 一号病房楼 90床</span></div>
                    <div slot="title"><span style="vertical-align:middle;">时长: 20小时20分钟</span></div>
                    <div slot="title"><span style="vertical-align:middle;">费用: 50元</span></div>
                </cell>
                <cell value="2018-09-26 09:04:30"></cell>
            </group>
        </div>
        <Footer/>
    </div>
</template>

<script>
  import Footer from '../layout/Footer'
  import {Swiper, Tabbar, TabbarItem, Group, CellFormPreview, Cell} from 'vux'

  export default {
    name: 'home',
    components: {
      Swiper,
      Tabbar,
      TabbarItem,
      Group,
      Cell,
      CellFormPreview,
      Footer
    },
    data() {
      return {
        swiperIndex: 0,
        dataList: [{
          url: 'javascript:',
          img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg',
        }, {
          url: 'javascript:',
          img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg',
        }, {
          url: 'javascript:',
          img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg',
        }],
        list: [{
          label: 'Apple',
          value: '3.29'
        }, {
          label: 'Banana',
          value: '1.04'
        }, {
          label: 'Fish',
          value: '8.00'
        }]
      }
    },
    computed: {
      scrollHeight: function () {
        return document.documentElement.clientHeight - 180
      }
    },
    methods: {
      onIndexChange(index) {
        this.swiperIndex = index
      }
    }
  }
</script>
<style lang="scss" scoped>
    .record {
        height: 100%;
        position: relative;
        .weui-tab__panel {
            padding-bottom: 55px;
        }
        /deep/ .weui-cell_access .weui-cell__ft:after{
            width: 10px;
            height: 10px;
        }
    }
</style>
