<template>
    <div class="bg">
        <!--        登录卡片-->
        <number_login v-show="is_number">
        </number_login>
        <transition name="fade" mode="out-in" appear>
            <div v-show="is_login">
                <el-card class="box-card" v-if="show_login" style="margin-right: 10%;">
                    <div class="card-body">
                        <el-form ref="loginForm" :model="form" :rules="ruleForm">
                            <el-form-item prop="loginName">
                                <el-input class="input_st" type="text" v-model="form.loginName" auto-complete="off"
                                          placeholder="请输入用户名" :suffix-icon="User">
                                    <template slot="prepend"><i style="font-size:20px" class="el-icon-user-solid"></i>
                                    </template>
                                </el-input>
                            </el-form-item>
                            <el-form-item prop="loginPass">
                                <el-input type="password" v-model="form.loginPass" auto-complete="off"
                                          placeholder="请输入用户密码"
                                          :suffix-icon="Key">
                                    <template slot="prepend"><i style="font-size:20px" class="el-icon-s-goods"></i>
                                    </template>
                                </el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-button class="btn_st" type="primary" @click="submit()" :loading="logining">登录
                                </el-button>
                            </el-form-item>
                            <el-form-item>
                                <el-button :key="'primary'" :type="'primary'"
                                           @click="show_login = !show_login" link>
                                    注册
                                </el-button>
                                <el-button style="margin-left: 50%;" :key="'primary'" :type="'primary'" link @click="is_number = !is_number;is_login = !is_login">
                                    短信验证登录
                                </el-button>
                            </el-form-item>
                        </el-form>
                    </div>

                </el-card>
                <!--        注册卡片-->
                <el-card class="box-card" key="2" v-else="show_login" style="margin-right: 10%;">
                    <div class="card-body">
                        <el-form ref="loginForm" :model="form" :rules="ruleForm">
                            <el-form-item prop="loginName">
                                <el-input class="input_st" type="text" v-model="form.loginName" auto-complete="off"
                                          placeholder="请输入用户名" :suffix-icon="User">
                                    <template slot="prepend"><i style="font-size:20px" class="el-icon-user-solid"></i>
                                    </template>
                                </el-input>
                            </el-form-item>
                            <el-form-item prop="loginPass">
                                <el-input type="password" v-model="form.loginPass" auto-complete="off"
                                          placeholder="请输入用户密码"
                                          :suffix-icon="Key">
                                    <template slot="prepend"><i style="font-size:20px" class="el-icon-s-goods"></i>
                                    </template>
                                </el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-button class="btn_st" type="primary" @click="register()" :loading="logining">注册
                                </el-button>
                            </el-form-item>
                            <el-form-item>
                                <el-button :key="'primary'" :type="'primary'"
                                           @click="show_login = !show_login" link>
                                    登录
                                </el-button>
                            </el-form-item>
                        </el-form>
                    </div>

                </el-card>
            </div>


        </transition>

    </div>
</template>

<script>
// @ is an alias to /src
import {Key, User} from "@element-plus/icons-vue";
import router from "@/router";
import _service from "@/api";
import {ElMessage} from "element-plus";
import Wxlogin from "vue-wxlogin"
import number_login from "@/views/login/number_login.vue";


export default {
    name: 'Login',
    components: {
        number_login,
        Wxlogin,
        User
    },
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
            is_login: true,
            is_number: false,
            show_login: true,
            logining: false,
            form: {
                loginName: '',
                loginPass: ''
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
                        message: '用户名长度必须是4-11个字符',
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
        submit() {
            // console.log(this.$refs.loginForm)
            this.$refs.loginForm.validate((valid) => {
                if (valid) { //valid成功为true，失败为false
                    console.log(this.form.loginName)
                    let userdata = [{
                        user_name: this.form.loginName,
                        user_pwd: this.form.loginPass
                    }]
                    _service.submitLogin({userdata}).then(res => {
                        if (res.data.log_success === 1) {
                            router.push('/home')
                        } else if (res.data.name_fault === 1) {
                            ElMessage({
                                showClose: true,
                                message: '账号未注册或账号名错误！',
                                type: 'error',
                            })
                        } else if (res.data.pwd_fault === 1) {
                            ElMessage({
                                showClose: true,
                                message: '密码错误！',
                                type: 'error',
                            })
                        }
                    })
                } else {
                    return false;
                }
            });

        },
        register() {
            this.$refs.loginForm.validate((valid) => {
                if (valid) { //valid成功为true，失败为false
                    let registerData = [{
                        user_name: this.form.loginName,
                        user_pwd: this.form.loginPass
                    }]
                    _service.submitRegister({registerData}).then(res => {
                        if (res.data.reg_success === 1) {
                            ElMessage({
                                showClose: true,
                                message: '注册成功，快去登录吧！',
                                type: 'success',
                            })
                        } else {
                            ElMessage({
                                showClose: true,
                                message: '账号已注册，无需重复注册！',
                                type: 'warning',
                            })
                        }
                    })
                } else {
                    return false;
                }
            });
        },
    }
}

</script>

<style scoped>
.bg {
    margin: 0;
    padding: 0;
    border: 0;
    width: 100%;
    height: 100%;
    background: url("@/assets/images/u2505.jpg");
    position: fixed;
    background-size: 100% 100%;
}

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
//transform: translateX(100px);
}

.card-body {
    padding: 0 64px;
    margin-top: 15%;
}

</style>
