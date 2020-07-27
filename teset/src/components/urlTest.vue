<template>
  <div class="URLTest">
    <h2>URLTest</h2>
    <el-form ref="form" :label-position="labelPosition" :model="form" label-width="80px">
       <el-form-item label="测试名称">
         <el-input v-model="form.testname"></el-input>
        </el-form-item>
        <el-form-item label="请求方式">
        <el-select v-model="form.UrlMethod" placeholder="请选择请求方式">
          <el-option label="Get" value="Get"></el-option>
          <el-option label="Post" value="Post"></el-option>
        </el-select>
        
          
  </el-form-item>
    </el-form>
    <el-form :model="form" label-width="100px" ref="form" class="demo-ruleForm">
  <el-form-item
    label="请求次数"
    prop="age"
    :rules="[
      { required: true, message: '次数不能为空'},
      { type: 'number', message: '次数必须为数字值'}
    ]"
  >
    <el-input type="age" v-model.number="form.age" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item
    v-for="(domain, index) in form.domains"
    :label="'域名'"
    :key="domain.key"
    :prop="'domains.' + index + '.value'"
    :rules="{
      required: true, message: '域名不能为空', trigger: 'blur'
    }"
  >
    <el-input v-model="domain.value"></el-input><el-button @click.prevent="removeDomain(domain)">删除</el-button>
  </el-form-item>
</el-form>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="date"
        width="180">
      </el-table-column>
      <el-table-column
        prop="Status"
        label="Status"
        width="180">
      </el-table-column>
      <el-table-column
        prop="URL"
        label="URL"
        width="180">
      </el-table-column>
       <el-table-column
        prop="Timing"
        label="Timing"
        width="180">
      </el-table-column>
      <el-table-column
        prop="Result"
        label="Result"
        width="180">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'URLTest',
  
  props: {
    msg: String
  },
  method:{
    removeDomain(item) {
        var index = this.dynamicValidateForm.domains.indexOf(item)
        if (index !== -1) {
          this.dynamicValidateForm.domains.splice(index, 1)
        }
      }
  },
  data(){
    return {
      form: {
           testname:'',
           UrlMethod:'',
           desc:'',
           age:'',
           domains: [{
            value: ''
          }],
        },
       tableData:   [{
            date: '2016-05-02',
            Status: '200',
            URL: 'www.baidu.com',
            Result:"True"
          },
           {
            date: '2016-05-04',
            Status: '300',
            URL: 'www.baidu.com',
            Result:"False"
          },
           {
            date: '2016-05-01',
            Status: '200',
            URL: 'www.baidu.com',
            Result:"True"
          }, 
          {
            date: '2016-05-03',
            Status: '300',
            URL: 'www.baidu.com',
            Result:"False"
          }]
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
</style>
