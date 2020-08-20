<template>
    
    <div class="login-wrap">
        <div class="ms-title">学生登录系统</div>
        <div class="ms-login">
         <el-button type="primary" @click="adlogin">管理员</el-button><el-button type="primary" @click="tealogin">教师</el-button><el-button type="primary" @click="stulogin">学生</el-button>
          <br/>
          <br/>
            <el-form :model="ruleForm" ref="ruleForm" label-width="0px" class="demo-ruleForm">
                <el-form-item prop="username">
                    <el-input v-model="ruleForm.username" placeholder="username" id="username"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" placeholder="password" v-model="ruleForm.password" id="password"></el-input>
                </el-form-item>
                <div class="login-btn">
                    <el-button type="primary" @click='submitForm' id="btn_login">登录</el-button>
                </div>
            </el-form>
        </div>
    </div>
</template>

<script>


    export default {
        data: function(){
            return {
                 ruleForm: {
                    username: '',
                    password: ''
                }
             }
    },
       
    }
</script>

<style scoped>
   
    .ms-title{
        position: absolute;
        width: 100%;
        text-align: center;
        top:20%;
        font-size: 30px;
        margin-top:-20px;
    }

    .ms-login{
        position: absolute;
        left:50%;
        top:50%;
        width:300px;
        height:200px;
        margin:-150px 0 0 -190px;
        padding:40px;
        border-radius: 5px;
        background:#475669;
    }
    .login-btn{
        text-align: center;
    }
    .login-btn button{
        width:100%;
        height:36px;
    }
</style>