<template>
    <div>
  <el-form :inline="true" :model="formInline" class="demo-form-inline">
  <el-form-item label="请求连接">
    <el-input v-model="formInline.user" placeholder="请求连接"></el-input>
  </el-form-item>
  <el-form-item label="请求地址">
    <el-input v-model="formInline.user" placeholder="请求地址"></el-input>
  </el-form-item>
  <el-form-item label="测试人">
    <el-input v-model="formInline.user" placeholder="测试人"></el-input>
  </el-form-item>
  <el-form-item label="测试人">
    <el-input v-model="formInline.user" placeholder="测试人"></el-input>
  </el-form-item>
  </el-form>
  <el-form :inline="true" :model="formInline">
  <el-form-item label="测试项目">
    <el-select v-model="formInline.region" placeholder="测试项目">
      <el-option label="项目一" value="project1"></el-option>
      <el-option label="项目二" value="project2"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="请求方式">
    <el-select v-model="formInline.region" placeholder="请求方式">
      <el-option label="GET" value="GET"></el-option>
      <el-option label="POST" value="POST"></el-option>
      <el-option label="DELETE" value="DELETE"></el-option>
      <el-option label="PATCH" value="PATCH"></el-option>
      <el-option label="UPDATE" value="UPDATE"></el-option>
    </el-select>
  </el-form-item>
</el-form>
<el-button type="primary" @click="onSubmit">添加操作</el-button>

<el-table
    :data="tableData5"
    max-height="400"
    border
    style="width: 600px"
    :row-class-name="right">
    <template slot-scope="scope">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      label="报告id"
      prop="_id">
    </el-table-column>
       <el-table-column
      label="报告名称"
      prop="name">
      
    </el-table-column>
     <el-table-column
      label="操作">
      <el-button type="text"  @click="delte()" size="small">删除</el-button>
      </el-table-column>
    </template>

   
        
  </el-table>
    
    </div>
</template>

<script>
    export default {
        data: function(){
            return {
                formInline: {
                    user: '',
                    region: ''
                    },
                tableData5:[{
                    "_id":1,
                    "name":"test",
                    "right":".warning-row"
                },
                {
                    "_id":2,
                    "name":"test2",
                    "right":".warning-row"
                },
                {
                    "_id":3,
                    "name":"test3",
                    "right":".success-row"
                },
                {
                    "_id":4,
                    "name":"test4",
                    "right":".success-row"
                },
                ]
            }
        },
        methods:{
            onSubmit() {
                    console.log('submit!');
                },
            delte(_id) {
                    console.log(_id);
                },
            
        }
    }
</script>

<style scoped>
.el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
    .ms-doc{
        width:100%;
        max-width: 980px;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
    }
    .ms-doc h3{
        padding: 9px 10px 10px;
        margin: 0;
        font-size: 14px;
        line-height: 17px;
        background-color: #f5f5f5;
        border: 1px solid #d8d8d8;
        border-bottom: 0;
        border-radius: 3px 3px 0 0;
    }
    .ms-doc article{
        padding: 45px;
        word-wrap: break-word;
        background-color: #fff;
        border: 1px solid #ddd;
        border-bottom-right-radius: 3px;
        border-bottom-left-radius: 3px;
    }
    .ms-doc article h1{
        font-size:32px;
        padding-bottom: 10px;
        margin-bottom: 15px;
        border-bottom: 1px solid #ddd;
    }
    .ms-doc article h2 {
        margin: 24px 0 16px;
        font-weight: 600;
        line-height: 1.25;
        padding-bottom: 7px;
        font-size: 24px;
        border-bottom: 1px solid #eee;
    }
    .ms-doc article p{
        margin-bottom: 15px;
        line-height: 1.5;
    }
    .ms-doc article .el-checkbox{
        margin-bottom: 5px;
    }
</style>