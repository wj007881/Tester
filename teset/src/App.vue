<template>
  <div id="app">
    <top/>
    <sidebar/>

    <buttom/>
    <router-view/>
  </div>
</template>

<script>
import  sidebar from './components/sidebar';
import  top from './components/titlebar';
import  buttom from './components/buttom';
export default {
 methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    },
  name: 'App',
  components: {
    sidebar,buttom,top
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
