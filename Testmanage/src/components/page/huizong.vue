<template>
 <div id="app">
   <h1>远程服务器管理</h1>
   <el-row>
     <el-col :span="24">
       <el-table size="normal" :data="master_user.data" @selection-change="changeFun" border style="width: 100%" highlight-current-row>
         <el-table-column
              type="selection"
              width="55">
          </el-table-column>
         <el-table-column type="index"></el-table-column>
         
         <el-table-column v-for="(item,index) in master_user.columns" :label="item.label" :prop="item.prop" :width="item.width" :key="index">
           <template slot-scope="scope">
             
             <span v-if="scope.row.isSet" >
               <el-input size="mini" placeholder="请输入内容" v-model="master_user.sel[item.prop]">
               </el-input>
             </span>
             <span v-else>{{scope.row[item.prop]}}</span>
           </template>
         </el-table-column>
         <el-table-column label="操作" width="">
           <template slot-scope="scope">
             <el-button type="primary" @click="saveRow(scope.row,scope.$index)">
               确定
             </el-button>
             <el-button type="success" @click="editRow(scope.row,scope.$index)">
               编辑
             </el-button>
             <el-button  type="danger" @click="deleteRow(scope.$index,master_user.data)">
               删除
             </el-button>
           </template>
         </el-table-column>
       </el-table>
     </el-col>
     <el-col :span="24" style="margin-top:15px">
      <el-button type="primary" @click="add()">
              添加
      </el-button>
     </el-col>
   </el-row>
   <el-dialog title="服务器操作" :visible.sync="visible2">
         
            <el-form >
            <el-form-item label="命令" :label-width="formLabelWidth">
              <el-input v-model="cmd" auto-complete="off"></el-input>
            </el-form-item>
          </el-form>
          <el-button type="primary" @click="confirm()">
               确定
             </el-button>
        </el-dialog>
   <div style="margin-top:15px">
      <el-button  @click="sendcmd()" type="primary" >
             发送命令
      </el-button>
     </div>
     
 </div>
</template>

<script>
 export default {
   name: '',
   data() {
     return {
       visible2:false,
       cmd:'',
       multipleSelection: [],
       master_user: {
         sel: null, //选中行   
         columns: [{
             prop: "type",
             label: "远程类型",
             width: 120
           },
           {
             prop: "addport",
             label: "连接地址",
             width: 150
           },
           {
             prop: "user",
             label: "登录用户",
             width: 120
           },
           {
             prop: "pwd",
             label: "登录密码",
             width: 220
           },
           {
             prop: "info",
             label: "其他信息"
           }
         ],
         data: [],
       },
     }
   },
   methods: {
     changeFun (val) {
          this.multipleSelection = val
          console.log(this.multipleSelection) // 返回的是选中的列的数组集合
        },
     add() {
       for (let i of this.master_user.data) {
         if (i.isSet) return this.$message.warning("请先保存当前编辑项");
       }
       let j = {
         "type": "",
         "addport": "",
         "user": "",
         "pwd": "",
         "info": "",
         "isSet": true,
       };
       this.master_user.data.push(j);
       this.master_user.sel = JSON.parse(JSON.stringify(j));
     },
     saveRow(row, index) { //保存
       let data = JSON.parse(JSON.stringify(this.master_user.sel));
       for (let k in data) {
         row[k] = data[k] //将sel里面的value赋值给这一行。ps(for....in..)的妙用，细心的同学发现这里我并没有循环对象row
       }
       row.isSet = false;
     },
     editRow(row) { //编辑
       for (let i of this.master_user.data) {
         if (i.isSet) return this.$message.warning("请先保存当前编辑11项");
       }
       this.master_user.sel = row
       row.isSet = true
     },
     deleteRow(index, rows) { //删除
       rows.splice(index, 1)
     },
     sendcmd() { //打开发送命令界面
       this.visible2=true
     },
     confirm(){

     }
   },
   components: {}
 }
</script>

<style >
 .el-table-add-row {
   margin-top: 10px;
   width: 100%;
   height: 34px;
   border: 1px dashed #c1c1cd;
   border-radius: 3px;
   cursor: pointer;
   justify-content: center;
   display: flex;
   line-height: 34px;
 }
</style>