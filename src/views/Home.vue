<template>
  <div class="home">
    <h3>用户注册<small>{{ this.msg }}</small></h3>
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="账号" prop="username">
        <el-input v-model="ruleForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="昵称" prop="nickname">
        <el-input v-model="ruleForm.nickname"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    var username = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入账号'))
      } else {
        callback()
      }
    }
    var nickname = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入昵称'))
      } else {
        callback()
      }
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    return {
      msg: '',
      ruleForm: {
        username: '',
        password: '',
        nickname: ''
      },
      rules: {
        username: [
          // trigger: 'blur'失去焦点
          { validator: username, trigger: 'blur' }
        ],
        password: [
          { validator: validatePass, trigger: 'blur' }
        ],
        nickname: [
          { validator: nickname, trigger: 'blur' }
        ]
      }
    }
  },
  created () {
    // 引入axios
    this.$http
      .get('/user/register')
      .then((res) => {
        this.msg = res.data
      })
      .catch((err) => {
        console.log(err)
      })
  },
  methods: {
    submitForm (formName) {
      this.$http
        .post('/user/register')
        .then((res) => {
          this.msg = res.data
          console.log(res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>
