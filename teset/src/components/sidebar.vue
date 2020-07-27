<template>
  <div id="sidebar">
<el-col :span="24">
   <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-submenu index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">个人信息</span>
      </el-submenu>
      <el-submenu index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">测试管理</span>
      </el-submenu>
      <el-submenu index="3" >
        <i class="el-icon-document"></i>
        <span slot="title">测试用例库</span>
      </el-submenu>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>软件测试</span>
        </template>
        <el-menu-item-group>
          <template slot="title"></template>
        <router-link to="./urlTest"><el-menu-item index="1-1">接口测试</el-menu-item></router-link>
        </el-menu-item-group>
        <el-menu-item-group>
          <router-link to="./ADBTest"><el-menu-item index="1-2">WebADB</el-menu-item></router-link>
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item index="1-3">测试结果</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      
    </el-menu>
  </el-col>
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
 .el-menu-demo:not(.el-menu--collapse) {
    width:100%;
    
    background-color:linen
  }
  .el-menu-demo .el-submenu{
      float: right;
      
  }
</style>
