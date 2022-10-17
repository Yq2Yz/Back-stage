<template>
    <div class="header-container">
        <div class="l-content">
            <el-button style="margin-right: 20px;" @click="handleMenu" icon="el-icon-menu" size="mini"></el-button>
            <!-- 面包屑 -->
            <el-breadcrumb separator="/">
                <el-breadcrumb-item v-for="item in tags" :key="item.path" :to="{ path: item.path }">{{ item.label }}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="r-content">
            <el-dropdown @command="handleClick">
                <span class="el-dropdown-link">
                    <img class="user" src="../assets/images/user.png" alt="">
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人中心</el-dropdown-item>
                    <el-dropdown-item command="logout">退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import Cookie from 'js-cookie'
export default {
    data() {
        return {}
    },
    methods: {
        handleMenu() {
            this.$store.commit('collapseMenu')
        },
        handleClick(command) {
            if (command === 'logout'){
                // 清除cookie中的token信息
                Cookie.remove('token')
                // 清除Cookie中的menu菜单项
                Cookie.remove('menu')
                // 跳转到登录页面
                this.$router.push('/login')
            }
        }
    },
    computed: {
        ...mapState({  // 扩展运算符... 将mapState返回的对象进行解构
            tags: state => state.tab.tabsList
        })
    }
}
</script>

<style lang="less" scoped>
.header-container {
    padding: 0 20px; // 左右内边距为20px
    background-color: #333;
    height: 60px;

    display: flex;
    justify-content: space-between; // 主轴上两端显示
    align-items: center;  //纵轴上垂直居中
    .text {
        color: #fff;
        font-size: 14px;
        margin-left: 10px;
    }
    .r-content {
        .user {
            width: 40px;
            height: 40px;
            border-radius: 50%;
        }
    }
    .l-content {
        display: flex;
        align-items: center;
        // 样式穿刺 /deep/
        /deep/.el-breadcrumb__item {
            .el-breadcrumb__inner {
                font-weight: normal;
                &.is-link {
                    color: #666
                }
            }
            &:last-child {
                .el-breadcrumb__inner {
                    color: #fff
                }
            }
        }

    }
}
</style>