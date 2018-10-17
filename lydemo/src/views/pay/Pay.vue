<template>
    <div class="pay">
        <div class="weui-tab__panel">
            <group>
                <cell title="柜子信息">
                    <div>
                        <span style="color: #3CEA86">可用</span>
                        <span style="color: #EA5149;display: none">不可用</span>  <!--不可用显示状态-->
                    </div>
                </cell>
                <cell>
                    <div slot="title"><span style="vertical-align:middle;">位置</span></div>
                    <div><span style="vertical-align:middle;">一号病房楼 29床</span></div>
                    <div slot="title"><span style="vertical-align:middle;">费用</span></div>
                    <div><span style="vertical-align:middle;">押金100元，费用 20元/次</span></div>
                </cell>
                <cell>
                    <div slot="title"><span style="vertical-align:middle;">18:00-次日7:00可用</span></div>
                </cell>
            </group>
            <group>
                <cell title="账户信息">
                    <div>
                        <span style="color: #27EA12">正常</span>
                        <span style="color: #EA5149;display: none">异常</span>  <!--账户异常显示状态-->
                    </div>
                </cell>
                <cell>
                    <div slot="title"><span style="vertical-align:middle;">可用余额</span></div>
                    <div><span style="vertical-align:middle;">20元</span></div>
                </cell>
            </group>
            <group>
                <cell title="支付信息" style="vertical-align:middle;color: #EA5149;font-size: 16px">
                    <div><span style="vertical-align:middle;color: #EA5149;font-size: 16px">80元</span></div>
                </cell>
            </group>

        </div>
        <div class="weui-tabbar">
            <flexbox>
                <flexbox-item>
                    <div class="flex-demo">
                        <x-button type="primary" @click.native="payMoney">确认支付并开锁</x-button>
                    </div>
                </flexbox-item>
            </flexbox>
        </div>
            <confirm v-model="showPayBox"
                     confirm-text="支付"
                     @on-cancel="onCancel"
                     @on-confirm="onConfirm">
                <group>
                    <cell title="付款金额" style="font-size: 16px">
                        <div>
                            <span style="color: #EA5149;font-size: 16px">80元</span>
                        </div>
                    </cell>
                    <cell>
                        <div slot="title"><span style="vertical-align:middle;">位置</span></div>
                        <div><span style="vertical-align:middle;">一号病房楼 29床</span></div>
                        <div slot="title"><span style="vertical-align:middle;">费用</span></div>
                        <div><span style="vertical-align:middle;">押金100元，费用 20元/次</span></div>
                    </cell>
                </group>
            </confirm>

        <toast v-model="showSuccess">支付成功</toast>
        <toast v-model="showError" type="cancel">支付失败</toast>
    </div>
</template>

<script>
  import {Flexbox, FlexboxItem, Group, CellFormPreview, Cell, XButton, Actionsheet, Toast,Confirm, TransferDomDirective as TransferDom} from 'vux'

  export default {
    name: 'pay',
    directives: {
      TransferDom
    },
    components: {
      Group,
      Cell,
      CellFormPreview,
      Flexbox,
      FlexboxItem,
      XButton,
      Actionsheet,
      Toast,
      Confirm
    },
    data() {
      return {
        showPayBox:false,
        showSuccess:false,
        showError:false,
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
      onCancel () {
        console.log('取消支付')
        this.showError = true
      },
      onConfirm (msg) {
        let _this = this
        console.log('确定支付')
        this.showSuccess = true
        setTimeout(function () {
          console.log(this.$router)
          _this.$router.push({ path: '/detail', query: { id: 123 }})  //成功跳转详情页面地址并传对应的id值
        },3000)
      },
      payMoney(){
        window.console.log('发起支付');
        this.showPayBox = true

      },
      onStop(){
        this.showSuccess = true
        window.console.log('结束使用');
      }
    }
  }
</script>
<style lang="scss" scoped>
    .pay {
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
    /deep/ .weui-dialog{
        .weui-cells{
            font-size: 12px!important;
        }
        .weui-dialog__bd{
            padding: 0;
        }
        p{
            text-align: left;
        }
    }
</style>
