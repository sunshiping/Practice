<template>
    <div class="qrcode">
        <msg title="扫描二维码" description="扫描柜子上二维码进行支付">
            <template slot="buttons">
                <x-button plain type="primary" link="/pay">扫一扫</x-button>
            </template>
        </msg>
        <Footer/>
    </div>
</template>

<script>
  import Footer from '../layout/Footer'
  import { Msg, XButton } from 'vux'

  export default {
    name: 'home',
    components: {
      Msg,
      XButton,
      Footer
    }
  }
</script>
<style lang="scss">
    .qrcode{
        /deep/ .weui-icon-success:before {
            content: "";
        }
        /deep/ .weui-icon_msg{
            width: 50px;
            height: 50px;
            background: url("../../assets/icon-scan.png") no-repeat;
        }
    }
</style>
