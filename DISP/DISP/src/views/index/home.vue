<template>
    <el-container class="home-container">
        <el-header>
            <div class="left-logo">
                <img style="width: 200px" src="../../assets/images/u154.png" alt="">
            </div>
            <el-menu
                    class="el-menu-demo"
                    mode="horizontal"
                    background-color="transparent"
                    :ellipsis="false"
                    @select="handleSelect"
                    style="margin-left: auto;margin-right: 0;"
                    router
            >
                <div class="flex-grow"/>
                <el-menu-item index="/home">首页</el-menu-item>
                <el-sub-menu index="2">
                    <template #title>应用</template>
                    <el-menu-item index="/home">首页</el-menu-item>
                    <el-menu-item index="/uploadFile">文件上传</el-menu-item>
                    <el-menu-item index="/myFile">我的文件</el-menu-item>
                    <el-menu-item index="2-3">item three</el-menu-item>
                    <el-sub-menu index="2-4">
                        <template #title>item four</template>
                        <el-menu-item index="2-4-1">item one</el-menu-item>
                        <el-menu-item index="2-4-2">item two</el-menu-item>
                        <el-menu-item index="2-4-3">item three</el-menu-item>
                    </el-sub-menu>
                </el-sub-menu>
            </el-menu>
            <div class="right-menu">
                <el-dropdown style="margin-left: auto;margin-right: 0">
                    <div>
                        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"/>
                        <el-icon class="el-icon--right">
                            <arrow-down/>
                        </el-icon>
                    </div>
                    <template #dropdown style="margin-right: 20%">
                        <el-dropdown-menu>
                            <el-dropdown-item>个人中心</el-dropdown-item>
                            <el-dropdown-item>退出登录</el-dropdown-item>
                            <el-dropdown-item divided>注销</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </div>
        </el-header>
        <el-container>
            <el-aside width="200px">Aside</el-aside>
            <el-container>
                <el-main>
                    <router-view></router-view>
                </el-main>
                <el-footer></el-footer>
            </el-container>
        </el-container>
    </el-container>

</template>

<style scoped lang="less">

:deep(.el-collapse-item__header) {
  padding-left: 10px;
}

.home-container {
  height: 100%;
}

.el-header {
  background-color: #adbfcb;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
}

.el-aside {
  background-color: #333744;
}

.el-main {
  padding-right: 0;
  padding-left: 10px;
  background-color: #EAEDF1;
}

.right-menu {
  width: 300px;
  height: 100%;
  display: flex;
  align-items: center;
}

.left-logo {
  height: 100%;
}

.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}

.flex-grow {
  flex-grow: 1;
}


</style>
<script lang="ts" setup>
import {ArrowDown} from '@element-plus/icons-vue'
import {ref, reactive} from 'vue'
import router from "../../router";

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
    router.push(key)
}
</script>
