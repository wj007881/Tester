<template>
    <div>
  <el-select v-model="value" placeholder="请选择课程" @change="aaa123()">
    <el-option
      v-for="item in options1"
      :key="item.kechengID"
      :label="item.kechengID"
      :value="item.kechengID">
    </el-option>
  </el-select>
    <br><br>
    
  <template>
  <el-table
    :data="tableData5"
    max-height="400"
    border
    style="width: 650px">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      prop="code"
      label="学号"
      width="110">
    </el-table-column>
    <el-table-column
      prop="displayName"
      label="姓名">
    </el-table-column>
        <el-table-column
      prop="email"
      label="电子邮件"
      width="110">
    </el-table-column>
    <el-table-column
      prop="sj"
      label="上交状态">
    </el-table-column>
  </el-table>
  <el-form ref="form" :model="form" label-width="80px" >
            <el-form-item label="活动名称">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="活动区域">
              <el-select v-model="form.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="活动时间">
              <el-col :span="11">
                <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
              </el-col>
              <el-col class="line" :span="2">-</el-col>
              <el-col :span="11">
                <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
              </el-col>
            </el-form-item>
            <el-form-item label="即时配送">
              <el-switch v-model="form.delivery"></el-switch>
            </el-form-item>
            <el-form-item label="活动性质">
              <el-checkbox-group v-model="form.type">
                <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                <el-checkbox label="地推活动" name="type"></el-checkbox>
                <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
            <el-form-item label="特殊资源">
              <el-radio-group v-model="form.resource">
                <el-radio label="线上品牌商赞助"></el-radio>
                <el-radio label="线下场地免费"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="活动形式">
              <el-input type="textarea" v-model="form.desc"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">立即创建</el-button>
              <el-button>取消</el-button>
            </el-form-item>
          </el-form>
          
  </template>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        value:{},
        value1:{},
          options1:[],
          options:[{"shiyan":"实验一"},{"shiyan":"实验二"},{"shiyan":"实验三"},{"shiyan":"实验四"},{"shiyan":"实验五"},{"shiyan":"实验六"}],
          tableData3: [],
          tableData4:[],
          tableData5:[],
           form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
 
      }
    },
    methods:{
      aaa123(){
        let a2;
             for(var x in this.options1){
                 var a1=this.options1[x].kechengID
                     if(this.value==a1){
                       a2=x;
                       this.tableData4.push(this.options1[x].class)
                     };
             };
                 
for( var k=0;k<this.tableData4.length;k++){
                       for( var j=0;j<this.tableData4[k].length;j++){
                       this.tableData5.push(this.tableData4[k][j])
                       }
                     };  




           },
    },
    mounted(){
  this.$axios.get('http://172.16.186.93:3000/db/Techers')
  .then((response) => {

                   for(var x in response.data){
                     if(this.$store.state.loginID==response.data[x].code){
                     this.options1.push(response.data[x])
                     /*this.tableData4.push(response.data[x].shiyanfabu[0])*/
                    };
                   };


                          
  })
  .catch(function (error) {
    console.log(error);
  });
      }
  }
  </script>