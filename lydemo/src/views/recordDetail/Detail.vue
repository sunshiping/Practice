<template>
    <div class="detail">
        <div class="weui-tab__panel">
            <group>
                <cell title="订单号:201809091623">
                    <div>
                        <span style="color: #EA5149">使用中</span>
                    </div>
                </cell>
                <cell>
                    <div slot="title"><span style="vertical-align:middle;">时长</span></div>
                    <div><span style="vertical-align:middle;">20分钟</span></div>
                    <div slot="title"><span style="vertical-align:middle;">费用</span></div>
                    <div><span style="vertical-align:middle;">50元</span></div>
                </cell>
                <cell title="还可使用">
                    <div>
                        <span style="color: #27EA12">12小时</span>
                    </div>
                </cell>
            </group>
            <group>
                <cell title="柜子信息"></cell>
                <cell>
                    <div slot="title"><span style="vertical-align:middle;">位置</span></div>
                    <div><span style="vertical-align:middle;">一号病房楼 29床</span></div>
                    <div slot="title"><span style="vertical-align:middle;">费用</span></div>
                    <div><span style="vertical-align:middle;">押金100元，预存100元，每小时10元</span></div>
                </cell>
                <cell>
                    <div slot="title"><span style="vertical-align:middle;">18:00-次日7:00可用</span></div>
                </cell>
            </group>
            <group>
                <cell title="账户信息">
                    <div>
                        <span style="color: #27EA12">正常</span>
                    </div>
                </cell>
                <cell>
                    <div slot="title"><span style="vertical-align:middle;">可用余额</span></div>
                    <div><span style="vertical-align:middle;">20元</span></div>
                    <div slot="title"><span style="vertical-align:middle;">押金</span></div>
                    <div><span style="vertical-align:middle;">100元</span></div>
                </cell>
            </group>
        </div>
        <div class="weui-tabbar">
            <flexbox>
                <flexbox-item>
                    <div class="flex-demo">
                        <x-button type="primary" link="/recharge">充值</x-button>
                    </div>
                </flexbox-item>
                <flexbox-item>
                    <div class="flex-demo">
                        <x-button type="warn" @click.native="showSheetBox">结束使用</x-button>
                    </div>
                </flexbox-item>
            </flexbox>
        </div>
        <actionsheet v-model="showSheet" :menus="menus" @on-click-menu-stop="onStop" show-cancel></actionsheet>
        <toast v-model="showSuccess">操作成功</toast>
    </div>
</template>

<script>
  import {Flexbox, FlexboxItem, Group, CellFormPreview, Cell, XButton, Actionsheet, Toast} from 'vux'

  export default {
    name: 'home',
    components: {
      Group,
      Cell,
      CellFormPreview,
      Flexbox,
      FlexboxItem,
      XButton,
      Actionsheet,
      Toast
    },
    data() {
      return {
        showSheet:false,
        showSuccess:false,
        menus: {
          'title.noop': '确定结束使用咩?<br/><span style="color:#666;font-size:12px;">结束后就无法撤消了</span>',
          stop: '<span style="color:red">确定</span>'
        }
      }
    },
    mounted: function () {
      window.console.log(this.$route.query.id)
    },
    methods: {
      showSheetBox(){
        this.showSheet = true
      },
      onStop(){
        this.showSuccess = true
        window.console.log('结束使用');
      }
    }
  }
</script>
<style lang="scss" scoped>
    .detail {
        height: 100%;
        position: relative;
        .weui-tab__panel {
            padding-bottom: 55px;
            /deep/ div:first-child{
                .weui-cells{
                    margin-top: 0;
                }
            }
        }
        .weui-tabbar {
            padding: 6px 0;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            position: absolute;
            z-index: 500;
            bottom: 0;
            width: 100%;
            background-color: #F7F7FA;
        }
        button.weui-btn, input.weui-btn{
            width: 88%;
        }
    }
</style>
