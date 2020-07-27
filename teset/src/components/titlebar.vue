<template>
  <div id="top">
  <h1>Test Manage System</h1>
  </div>
</template>

<script>
export default {
  name: 'sidebar',
  props: {
    msg: String
  },
  data() {
      return {
        isCollapse: true
      };
    },
  methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
 .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
#top{
        background-color: steelblue;
        position: absolute;
        top: 0;
        width: 100%;
        clear:both
  }
</style>
