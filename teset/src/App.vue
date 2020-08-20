<template>
  <div id="app">
    <top/>
    <sidebar/>

    <buttom/>
    <login/>
    <el-button @Click="Login">登录</el-button>
    <router-view/>
  </div>
</template>

<script>
import  sidebar from './components/sidebar';
import  top from './components/titlebar';
import  buttom from './components/buttom';
import  login from './components/login';
export default {
 methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      login(){
        this.$router.push("/login")
      }
    },
  name: 'App',
  components: {
    sidebar,buttom,top,login
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
