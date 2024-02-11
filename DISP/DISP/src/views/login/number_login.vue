<template>
        <!--        登录卡片-->
        <transition name="fade" mode="out-in" appear>
            <el-card class="box-card" v-if="show_login" style="margin-right: 10%;">
                <div class="card-body">
                    <el-form ref="loginForm" :model="form" :rules="ruleForm">
                        <el-form-item prop="loginName">
                            <el-input class="input_st" type="text" v-model="form.loginName" auto-complete="off"
                                      placeholder="请输入手机号" :suffix-icon="User">
                                <template slot="prepend"><i style="font-size:20px" class="el-icon-user-solid"></i>
                                </template>
                            </el-input>
                        </el-form-item>
                        <el-form-item prop="loginPass">
                            <el-input style="width: 230px" type="password" v-model="form.loginPass" auto-complete="off"
                                      placeholder="请输入短信验证码"
                                      :suffix-icon="Key">
                                <template slot="prepend"><i style="font-size:20px" class="el-icon-s-goods"></i>
                                </template>
                            </el-input>
                            <el-button type="primary" style="margin-left: 5px;width: 70px;">发送</el-button>
                        </el-form-item>
                        <el-form-item>
                            <el-button class="btn_st" type="primary" :loading="logining">登录
                            </el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </el-card>
        </transition>
</template>

<script>
import {Key, User} from "@element-plus/icons-vue";


export default {
    computed: {
        Key() {
            return Key
        },
        User() {
            return User
        }
    },
    data() {
        return {
            show_login: true,
            logining: false,
            form: {

            },
            ruleForm: {
                loginName: [
                    {
                        required: true,
                        message: '请输入账号',
                        trigger: 'blur'
                    },
                    {
                        min: 3,
                        max: 8,
                        message: '用户名长度必须是4-8个字符',
                        trigger: 'blur'
                    }
                ],
                loginPass: [
                    {
                        required: true,
                        message: '请输入密码',
                        trigger: 'blur'
                    }
                ]
            }
        }
    },
    methods: {

    }
}

</script>

<style scoped>

:deep(.el-input__wrapper) {
    border-radius: 10px;
    height: 50px;
}

:deep(.el-button.is-link) {
    font-size: 18px;
}

.btn_st {
    width: 100%;
    border-radius: 10px;
    height: 50px;
    font-size: 20px;
}

:deep(.el-button--primary) {
    --el-button-text-color: rgba(65, 124, 165, 1);
    --el-button-border-color: rgba(65, 124, 165, 1);
    --el-button-bg-color: transparent;
    --el-button-hover-bg-color: rgba(65, 124, 165, 1);
}

:deep(.el-input) {
    font-size: 22px;
}

.sys-name {
    font-size: 18px;
}

.box-card {
    margin-left: 150%;
    width: 480px;
    height: 450px;
    margin: 0 auto;
    margin-top: 160px;
    background-color: rgba(228, 228, 228, 0.6);

}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.fade-leave-from,
.fade-enter-to {
    opacity: 1;
}

.card-body {
    padding: 0 64px;
    margin-top: 15%;
}

</style>
