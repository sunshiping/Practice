<template>
    <div class="register">
        <el-form ref="registerForm" :model="registerUser" :rules="rules" class="registerForm" auto-complete="on" label-position="left">
            <div class="title-container">
                <h3 class="title">注册账号</h3>
            </div>
            <el-form-item prop="name">
                    <span class="svg-container">
                      <svg-icon icon-class="user" />
                    </span>
                <el-input v-model="registerUser.name" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item prop="email">
                     <span class="svg-container">
                      <svg-icon icon-class="email" />
                    </span>
                <el-input v-model="registerUser.email" placeholder="请输入邮箱"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                     <span class="svg-container">
                      <svg-icon icon-class="password" />
                    </span>
                <el-input v-model="registerUser.password" placeholder="请输入密码" type="password"></el-input>
            </el-form-item>
            <el-form-item prop="password2">
                     <span class="svg-container">
                      <svg-icon icon-class="password" />
                    </span>
                <el-input v-model="registerUser.password2" placeholder="请确认密码" type="password"></el-input>
            </el-form-item>
            <el-form-item prop="identity">
                     <span class="svg-container">
                      <svg-icon icon-class="identity" />
                    </span>
                <el-select v-model="registerUser.identity" placeholder="请选择身份" style="width: 88%">
                    <el-option label="管理员" value="manager"></el-option>
                    <el-option label="员工" value="employee"></el-option>
                </el-select>
            </el-form-item>
            <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:16px;" @click="submitForm('registerForm')">注 册</el-button>
            <div class="tips fn-fr">
                <router-link :to="{ path: 'login' }">已有账号 登录>></router-link>
            </div>
        </el-form>
    </div>
</template>

<script>
  export default {
    name: "register",
    data() {
      var validatePass2 = (rule, value, callback) => {
        if (value !== this.registerUser.password) {
          callback(new Error("两次输入密码不一致!"));
        } else {
          callback();
        }
      };
      return {
        loading: false,
        registerUser: {
          name: "",
          email: "",
          password: "",
          password2: "",
          identity: ""
        },
        rules: {
          name: [
            {required: true, message: "用户名不能为空", trigger: "change"},
            {min: 2, max: 30, message: "长度在 2 到 30 个字符", trigger: "blur"}
          ],
          email: [
            {
              type: "email",
              required: true,
              message: "邮箱格式不正确",
              trigger: "blur"
            }
          ],
          password: [
            {required: true, message: "密码不能为空", trigger: "blur"},
            {min: 6, max: 30, message: "长度在 6 到 30 个字符", trigger: "blur"}
          ],
          password2: [
            {required: true, message: "确认密码不能为空", trigger: "blur"},
            {
              min: 6,
              max: 30,
              message: "长度在 6 到 30 个字符",
              trigger: "blur"
            },
            {validator: validatePass2, trigger: "blur"}
          ],
          identity:[
            {required: true, message: "请选择身份", trigger: "change"},
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            this.loading = true
            this.$axios.post("/api/users/register", this.registerUser)
              .then(res => {
                this.loading = false
                // 注册成功
                this.$message({
                  message: "注册成功！",
                  type: "success"
                });
                this.$router.push("/login");
              }).catch(() => {
              this.loading = false
            });;
          } else {
            console.log("error submit!!");
            return false;
          }
        });
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
        .register .el-input input{
            color: $cursor;
            &::first-line {
                color: $light_gray;
            }
        }
    }

    /* reset element-ui css */
    .register {
        .el-input {
            display: inline-block;
            height: 47px;
            width: 85%;
            input {
                background: transparent;
                border: 0;
                -webkit-appearance: none;
                border-radius: 0;
                padding: 12px 5px 12px 15px;
                color: $light_gray;
                height: 47px;
                caret-color: $cursor;
                &:-webkit-autofill {
                    -webkit-box-shadow: 0 0 0 1000px $bg inset !important;
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
        .el-select{
            .el-input {
                width: 100%;
            }
        }
        .el-form-item__content {
            line-height: 30px;
        }
    }
</style>

<style rel="stylesheet/scss" lang="scss" scoped>
    $bg:#2d3a4b;
    $dark_gray:#889aa4;
    $light_gray:#eee;

    .register {
        position: fixed;
        height: 100%;
        width: 100%;
        background-color: $bg;
        .registerForm {
            position: absolute;
            left: 0;
            right: 0;
            width: 520px;
            max-width: 100%;
            padding: 35px 35px 15px 35px;
            margin: 30px auto;
        }
        .tips {
            font-size: 14px;
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
                margin: 0 auto 40px auto;
                text-align: center;
                font-weight: bold;
            }
            .set-language {
                color: #fff;
                position: absolute;
                top: 5px;
                right: 0;
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


