<template>
    <div id="app">
        <el-container>
            <el-aside width="auto">
                <!-- <CommonAside /> -->
                <common-aside />
            </el-aside>
            <el-container>
                <el-header>
                    <!-- <CommonHeader /> -->
                    <common-header />
                </el-header>
                <!-- <CommonTag /> -->
                <common-tag />
                <el-main>
                    <!-- 路由出口 -->
                    <!-- 路由配置到的组件将渲染到这里 -->
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import CommonAside from '../components/CommonAside.vue'
import CommonHeader from '../components/CommonHeader.vue'
import CommonTag from '../components/CommonTag.vue'
export default {
    data() {
        return {}
    },
    components: {
        CommonAside,
        CommonHeader,
        CommonTag
    }
}
</script>

<style scoped>
.el-header {
    padding: 0
}
</style>