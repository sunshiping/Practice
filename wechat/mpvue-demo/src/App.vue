<script>
  // import qcloud from 'wafer2-client-sdk'
  import config from '@/config'
  import { post } from '@/utils/index'

  export default {
    async created () {
      let _this = this
      let jscode = wx.getStorageSync('jscode')
      if (!jscode) {
        wx.login({
          success: function (loginCode) {
            _this.getId(loginCode.code)
          }
        })
      }
    },
    methods: {
      async getId (loginCode) {
        const data = await post('/weapp/openid', {
          appid: config.env.appid,
          secret: config.env.secret,
          loginCode: loginCode
        })
        console.log(data.jscode)
        if (data.jscode) {
          wx.setStorageSync('jscode', data.jscode)
        }
      }
    }
  }
</script>

<style>
    .container {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        padding: 200 rpx 0;
        box-sizing: border-box;
    }
    /* this rule will be remove */
    * {
        transition: width 2s;
        -moz-transition: width 2s;
        -webkit-transition: width 2s;
        -o-transition: width 2s;
    }
</style>
