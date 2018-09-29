<template>
    <div class="logFund">
         <el-dialog
            :title="dialog.title"
            :visible.sync="dialog.show" width="500px">
            <div class="form">
                <el-form ref="registerForm" :model="form" :rules="rules" class="registerForm" auto-complete="on" label-width="80px" label-position="right">
                    <el-form-item prop="name" label="用户名">
                        <el-input v-model="form.name" placeholder="请输入用户名"></el-input>
                    </el-form-item>
                    <el-form-item prop="email" label="邮箱">
                        <el-input v-model="form.email" placeholder="请输入邮箱"></el-input>
                    </el-form-item>
                    <el-form-item prop="password" label="密码">
                        <el-input v-model="form.password" placeholder="请输入密码" type="password"></el-input>
                    </el-form-item>
                    <el-form-item prop="identity" label="身份">
                        <el-select v-model="form.identity" placeholder="请选择身份" style="width: 100%">
                            <el-option label="管理员" value="manager"></el-option>
                            <el-option label="员工" value="employee"></el-option>
                        </el-select>
                    </el-form-item>
                </el-form>
            </div>
             <div slot="footer" class="dialog-footer">
                 <el-button @click="dialog.show = false">取消</el-button>
                 <el-button type="primary" @click="onSubmit">确定</el-button>
             </div>
        </el-dialog>
    </div>
</template>

<script>
export default {
  name: "logfound",
  props: {
    dialog: Object,
    form: Object
  },
  data() {
    return {
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
        identity:[
          {required: true, message: "请选择身份", trigger: "change"},
        ]
      }
    };
  },
  methods: {
    onSubmit(form) {
      this.$refs[form].validate(valid => {
        if (valid) {
          //表单数据验证完成之后，提交数据;
          const url =
            this.dialog.option == "add" ? "add" : `edit/${this.form.id}`;
          this.$axios.post(`/api/users/${url}`, this.form).then(res => {
            // 操作成功
            this.$message({
              message: "保存成功！",
              type: "success"
            });
            this.dialog.show = false;
            this.$emit("update");
          });
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
    .logFund{
        width: 560px;
        /deep/ .el-dialog__body {
            padding: 18px 20px 0;
        }
    }
</style>

