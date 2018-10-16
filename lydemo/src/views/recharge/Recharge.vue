<template>
    <div class="detail">
        <div class="weui-tab__panel">
            <group>
                <cell title="账户信息">
                    <div>
                        <span style="color: #EA5149">正常</span>
                    </div>
                </cell>
                <cell>
                    <div slot="title"><span style="vertical-align:middle;">当前余额</span></div>
                    <div><span style="vertical-align:middle;">20元</span></div>
                    <div slot="title"><span style="vertical-align:middle;">押金</span></div>
                    <div><span style="vertical-align:middle;">50元</span></div>
                </cell>
            </group>
            <group>
                <cell title="充值"></cell>
                <cell title="金额(元)">
                    <div>
                     <x-input text-align="right" placeholder="请输入金额" v-model="rechargeNum"></x-input>
                    </div>
                </cell>
                <checker
                        v-model="defaultSelect"
                        default-item-class="demo5-item"
                        selected-item-class="demo5-item-selected">
                    <checker-item v-for="i in [1, 2, 5,10]" :key="i" :value="i"  @click.native="selectNum(i)">￥{{i*10}}</checker-item>
                </checker>
            </group>
        </div>
        <div class="weui-tabbar">
            <flexbox>
                <flexbox-item>
                    <div class="flex-demo">
                        <x-button type="primary">充值</x-button>
                    </div>
                </flexbox-item>
            </flexbox>
        </div>
        <actionsheet v-model="showSheet" :menus="menus" @on-click-menu-stop="onStop" show-cancel></actionsheet>
        <toast v-model="showSuccess">操作成功</toast>
    </div>
</template>

<script>
  import {Flexbox, FlexboxItem, Group, Cell, XButton, Actionsheet, Toast, XInput, Checker, CheckerItem,} from 'vux'

  export default {
    name: 'home',
    components: {
      Group,
      Cell,
      Flexbox,
      FlexboxItem,
      XButton,
      Actionsheet,
      Toast,
      XInput,
      Checker,
      CheckerItem
    },
    data() {
      return {
        rechargeNum:'',
        showSheet:false,
        showSuccess:false,
        defaultSelect:null,
        menus: {
          'title.noop': '确定结束使用咩?<br/><span style="color:#666;font-size:12px;">结束后就无法撤消了</span>',
          stop: '<span style="color:red">确定</span>'
        }
      }
    },
    mounted: function () {
    },
    methods: {
      showSheetBox(){
        this.showSheet = true
      },
      selectNum(i){
        if(this.defaultSelect !== i){
          this.rechargeNum = i * 10
        }else {
          this.rechargeNum = ''
        }
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
    .vux-checker-box{
        text-align: center;
    }
    .demo5-item {
        width: 68px;
        height: 26px;
        line-height: 26px;
        margin-bottom: 8px;
        text-align: center;
        border-radius: 3px;
        border: 1px solid #ccc;
        background-color: #fff;
        margin-right: 6px;
    }
    .demo5-item-selected {
        background: #ffffff url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALCAMAAACecocUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTZDOEJBQ0E3NkIxMTFFNEE3MzJFOUJCMEU5QUM0QkIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTZDOEJBQ0I3NkIxMTFFNEE3MzJFOUJCMEU5QUM0QkIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBNkM4QkFDODc2QjExMUU0QTczMkU5QkIwRTlBQzRCQiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBNkM4QkFDOTc2QjExMUU0QTczMkU5QkIwRTlBQzRCQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PnMGp3kAAAAJUExURf9KAP///////4Jqdw0AAAADdFJOU///ANfKDUEAAAAuSURBVHjaTMpBDgAABAPB5f+PlhLUpZMWuQcYMWLEyDN4ymqa5KS4+3G+KAEGACQmAGlKzr56AAAAAElFTkSuQmCC) no-repeat right bottom;
        border-color: #ff4a00;
    }
</style>
