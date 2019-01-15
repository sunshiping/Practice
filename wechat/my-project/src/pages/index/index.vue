<template>
  <div class="container">
    <div class="login">
      <img src="/static/imgs/guide_bg.jpg" alt>
      <div class="learn">
        <button open-type="getUserInfo" @getuserinfo="getUserInfo">开始学习</button>
      </div>
    </div>
  </div>
</template>

<script>
  import { ebookMixin } from '../../utils/mixin'
export default {
  mixins: [ebookMixin],
  methods: {
    getUserInfo(e) {
      // 判断授权是否成功
      if (e.mp.detail.userInfo) {
        console.log(e.mp.detail.userInfo);
        debugger;
        // 存储到vuex
        // this.$store.dispatch("setIsAuthenticated", true);
        this.setIsAuthenticated(true);
        this.setUser(e.mp.detail.userInfo);
        debugger;
        // 获取code
        this.getCode();
      }
    },
    getCode() {
      debugger;
      // 在mpvue中,提供了一个全局小程序对象 wx
      wx.login({
        success: res => {
          console.log(res);
          // this.getOpenid(res.code);
        }
      });
    },
    getOpenid(code) {
      // 三个参数 appid secret code
      const appid = "wx686871f406673a5b";
      const secret = "e4f904d79a80efd0c478013719fe79fc";

      this.$https
        .request({
          url: this.$interfaces.getOpenid + appid + "/" + secret + "/" + code,
          method: "get"
        })
        .then(res => {
          // console.log(res);
          // 将openid存储到vuex中
          this.$store.dispatch("setOpenId", res.openid);

          // 请求课程数据
          this.isLearned(res.openid);
        })
        .catch(err => console.log(err));
    },
    isLearned(openid) {
      this.$https
        .request({
          url: this.$interfaces.getMyLesson + openid,
          method: "get"
        })
        .then(res => {
          // console.log("已经测试过了");

          // 存储课程信息
          this.$store.dispatch("setLessonInfo", res);

          // 跳转
          wx.switchTab({
            url: "../learn/main"
          });
        })
        .catch(error => {
          // console.log("还没有测试");
          wx.redirectTo({
            url: "../question/main"
          });
        });
    }
  }
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.login {
  width: 100%;
  height: 100%;
  position: relative;
}
.login img {
  display: inline-block;
  width: 100%;
  height: 100%;
}
.login .learn {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
}
.learn button {
  position: absolute;
  top: 90%;
  left: 10%;
  width: 80%;
  background-color: #009eef;
  color: white;
}
</style>
