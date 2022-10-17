<template>
    <!-- 系统登录表单 -->
    <el-form ref="form" label-width="70px" :inline="true" class="login-container" :model="form" :rules="rules">
        <h3 class="login-title">系统登录</h3>
        <!-- 用户名 -->
        <el-form-item label="用户名" prop="username">
            <el-input v-model="form.username" placeholder="请输入账号"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="form.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <!-- 登录按钮 -->
        <el-form-item>
            <el-button @click="submit" type="primary" style="margin-left: 105px; margin-top: 10px">登录</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
import Mock from 'mockjs'
import Cookie from 'js-cookie'
import { getMenu } from '../api'
export default {
    data() {
        return {
            form: {
                username: '',
                password: ''
            },
            rules: {
                username: [
                    { required: true, message: '请输入用户名', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        // 登录
        submit() {
            // form表单校验通过
            this.$refs.form.validate((valid) => {
                if (valid) {
                    getMenu(this.form).then(({ data }) => {
                        console.log(data)
                        if (data.code === 20000) {
                            // 将获取到的token信息存入cookie用于不同页面间的通信
                            Cookie.set('token', data.data.token)

                            // 获取菜单的数据, 存入store中
                            this.$store.commit('setMenu', data.data.menu)
                            this.$store.commit('addMenu', this.$router)
                            // 跳转到首页 
                            this.$router.push('/home')
                        } else {
                            this.$message.error(data.data.message)
                        }
                    })
                }
            })
        }
    }
}
</script>

<style lang="less" scoped>
.login-container {
    width: 350px;
    border: 1px solid #eaeaea;

    margin: 180px auto; // 上下180px 左右自适应居中
    padding: 35px 35px 15px 35px;
    background-color: #fff;

    border-radius: 15px; // 边框圆角
    box-shadow: 0 0 25px #cac6c6; // 盒子阴影

    box-sizing: border-box; // 将边距设置为内边距
    .login-title {
        text-align: center;
        margin-bottom: 40px;
        color: #505458;
    }
    .el-input {
        width: 198px;
    }
}
</style>