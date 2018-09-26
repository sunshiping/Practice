<template>
    <div class="login-container">
        <el-form ref="loginForm" :model="loginUser" :rules="rules" class="login-form" auto-complete="on" label-position="left">
            <div class="title-container">
                <h3 class="title">后台管理系统</h3>
            </div>
            <el-form-item prop="email">
                <span class="svg-container">
                  <svg-icon icon-class="user" />
                </span>
                <el-input
                        v-model="loginUser.email"
                        placeholder="请输入邮箱"
                        name="email"
                        auto-complete="on"
                />
            </el-form-item>
            <el-form-item prop="password">
                <span class="svg-container">
                  <svg-icon icon-class="password" />
                </span>
                <el-input
                        :type="passwordType"
                        v-model="loginUser.password"
                        placeholder="请输入密码"
                        name="password"
                        auto-complete="on"
                        @keyup.enter.native="submitForm('loginForm')" />
                <span class="show-pwd" @click="showPwd">
                    <svg-icon v-if="passwordType == 'password'" icon-class="eye" />
                    <svg-icon v-else icon-class="eye_open" />
                </span>
            </el-form-item>
            <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="submitForm('loginForm')">登录</el-button>
        </el-form>
    </div>
</template>

<script>
  import jwt_decode from "jwt-decode";

  export default {
    name: "login",
    data() {
      return {
        passwordType: 'password',
        loading: false,
        loginUser: {
          email: "",
          password: ""
        },
        rules: {
          email: [
            {
              type: "email",
              required: true,
              message: "邮箱格式不正确",
              trigger: "change"
            }
          ],
          password: [
            { required: true, message: "密码不能为空", trigger: "blur" },
            { min: 6, max: 30, message: "长度在 6 到 30 个字符", trigger: "blur" }
          ]
        }
      };
    },
    methods: {
      showPwd() {
        if (this.passwordType === 'password') {
          this.passwordType = ''
        } else {
          this.passwordType = 'password'
        }
      },
      submitForm(formName) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            this.loading = true
            this.$axios.post("/api/users/login", this.loginUser).then(res => {
              this.loading = false
              // 登录成功
              const { token } = res.data;
              localStorage.setItem("eleToken", token);

              // 解析token
              const decode = jwt_decode(token);

              // 存储数据
              this.$store.dispatch("setIsAutnenticated", !this.isEmpty(decode));
              this.$store.dispatch("setUser", decode);

              // 页面跳转
              this.$router.push("/index");
            }).catch(() => {
              this.loading = false
            });
          } else {
            console.log("error submit!!");
            return false;
          }
        });
      },
      isEmpty(value) {
        return (
          value === undefined ||
          value === null ||
          (typeof value === "object" && Object.keys(value).length === 0) ||
          (typeof value === "string" && value.trim().length === 0)
        );
      }
    }
  };
</script>

<style rel="stylesheet/scss" lang="scss">
    /* 修复input 背景不协调 和光标变色 */
    /* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

    $bg:#283443;
    $light_gray:#eee;
    $cursor: #fff;

    @supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
        .login-container .el-input input{
            color: $cursor;
            &::first-line {
                color: $light_gray;
            }
        }
    }

    /* reset element-ui css */
    .login-container {
        .el-input {
            display: inline-block;
            height: 47px;
            width: 85%;
            input {
                background: transparent;
                border: 0px;
                -webkit-appearance: none;
                border-radius: 0px;
                padding: 12px 5px 12px 15px;
                color: $light_gray;
                height: 47px;
                caret-color: $cursor;
                &:-webkit-autofill {
                    -webkit-box-shadow: 0 0 0px 1000px $bg inset !important;
                    -webkit-text-fill-color: $cursor !important;
                }
            }
        }
        .el-form-item {
            border: 1px solid rgba(255, 255, 255, 0.1);
            background: rgba(0, 0, 0, 0.1);
            border-radius: 5px;
            color: #454545;
        }
    }
</style>

<style rel="stylesheet/scss" lang="scss" scoped>
    $bg:#2d3a4b;
    $dark_gray:#889aa4;
    $light_gray:#eee;

    .login-container {
        position: fixed;
        height: 100%;
        width: 100%;
        background-color: $bg;
        .login-form {
            position: absolute;
            left: 0;
            right: 0;
            width: 520px;
            max-width: 100%;
            padding: 35px 35px 15px 35px;
            margin: 120px auto;
        }
        .tips {
            font-size: 14px;
            color: #fff;
            margin-bottom: 10px;
            span {
                &:first-of-type {
                    margin-right: 16px;
                }
            }
        }
        .svg-container {
            padding: 6px 5px 6px 15px;
            color: $dark_gray;
            vertical-align: middle;
            width: 30px;
            display: inline-block;
        }
        .title-container {
            position: relative;
            .title {
                font-size: 26px;
                color: $light_gray;
                margin: 0px auto 40px auto;
                text-align: center;
                font-weight: bold;
            }
            .set-language {
                color: #fff;
                position: absolute;
                top: 5px;
                right: 0px;
            }
        }
        .show-pwd {
            position: absolute;
            right: 10px;
            top: 7px;
            font-size: 16px;
            color: $dark_gray;
            cursor: pointer;
            user-select: none;
        }
        .thirdparty-button {
            position: absolute;
            right: 35px;
            bottom: 28px;
        }
    }
</style>


