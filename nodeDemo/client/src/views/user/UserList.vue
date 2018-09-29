<template>
    <div class="fillcontain">
        <div>
            <el-form
                :inline="true"
                ref="search_data"
                :model='search_data' >
                <el-form-item label="投标时间筛选:">
                    <el-date-picker
                        v-model="search_data.startTime"
                        type="datetime"
                        placeholder="选择开始时间">
                    </el-date-picker> --
                    <el-date-picker
                        v-model="search_data.endTime"
                        type="datetime"
                        placeholder="选择结束时间">
                    </el-date-picker>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" size ="small" icon="search" @click='onScreeoutMoney()'>筛选</el-button>
                </el-form-item>
                 <el-form-item class="btnRight">
                    <el-button type="primary" size ="small" icon="view" @click='onAddMoney()'>添加</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div class="table_container">
            <el-table
                v-if="tableData.length > 0"
                :data='tableData'
                max-height="450"
                border
                :default-sort = "{prop: 'date', order: 'descending'}"
                style="width: 100%">
                 <el-table-column
                    type="index"
                    label="序号"
                    align='center'
                    width="70">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="姓名"
                        align='center'
                        width="150">
                </el-table-column>
                <el-table-column
                        prop="email"
                        label="邮箱"
                        align='center'>
                </el-table-column>
                <el-table-column
                        prop="identity"
                        label="身份类型"
                        align='center'>
                    <template slot-scope="scope">
                        <span>{{ getIdentity(scope.row.identity) }}</span>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="date"
                    label="创建时间"
                    align='center'
                    sortable>
                    <template slot-scope="scope">
                        <el-icon name="time"></el-icon>
                        <span style="margin-left: 10px">{{ $moment(scope.row.date).format("YYYY-MM-DD HH:mm")  }}</span>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="operation"
                    align='center'
                    label="操作"
                    fixed="right">
                    <template slot-scope='scope'>
                        <el-button
                            type="warning"
                            icon='edit'
                            size="small"
                            @click='onEditMoney(scope.row)'
                        >编辑</el-button>
                        <el-button
                            type="danger"
                            icon='delete'
                            size="small"
                            @click='onDeleteUser(scope.row,scope.$index)'
                        >删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <!-- 分页 -->
             <el-row>
                <el-col :span="24">
                    <div class="pagination">
                        <el-pagination
                            v-if='paginations.total > 0'
                            :page-sizes="paginations.page_sizes"
                            :page-size="paginations.page_size"
                            :layout="paginations.layout"
                            :total="paginations.total"
                            :current-page.sync='paginations.page_index'
                            @current-change='handleCurrentChange'
                            @size-change='handleSizeChange'>
                        </el-pagination>
                    </div>
                </el-col>
            </el-row>
        </div>
        <!-- 弹框页面 -->
        <UserDialog :dialog='dialog' :form='form' @update="getUsers"></UserDialog>
    </div>
</template>

<script>
import UserDialog from "@/components/dialog/UserDialog";

export default {
  name: "fundlist",
  components: {
    UserDialog
  },
  data() {
    return {
      tableData: [],
      allTableData: [],
      filterTableData: [],
      dialog: {
        show: false,
        title: "",
        option: "edit"
      },
      form: {
        name: "",
        email: "",
        password: "",
        identity: "",
      },
      //需要给分页组件传的信息
      paginations: {
        page_index: 1, // 当前位于哪页
        total: 0, // 总数
        page_size: 5, // 1页显示多少条
        page_sizes: [5, 10, 15, 20], //每页显示多少条
        layout: "total, sizes, prev, pager, next, jumper" // 翻页属性
      },
      search_data: {
        startTime: "",
        endTime: ""
      }
    };
  },
  created() {
    this.getUsers();
  },
  methods: {
    getIdentity(data) {
      if(data === 'manager'){
        return '管理员'
      }else {
        return '员工'
      }
    },
    getUsers() {
      // 获取表格数据
      this.$axios("/api/users").then(res => {
        // this.tableData = res.data;
        this.allTableData = res.data;
        this.filterTableData = res.data;
        // 设置分页数据
        this.setPaginations();
      });
    },
    onEditMoney(row) {
      // 编辑
      this.dialog = {
        show: true,
        title: "修改用户信息",
        option: "edit"
      };
      this.form = {
        name: row.name,
        email: row.email,
        password: '',
        identity: row.identity,
        id: row._id
      };
    },
    onDeleteUser(row, index) {
      // 删除
      this.$axios.delete(`/api/users/delete/${row._id}`).then(res => {
        this.$message("删除成功");
        this.getUsers();
      });
    },
    onAddMoney() {
      // 添加
      this.dialog = {
        show: true,
        title: "添加用户",
        option: "add"
      };
      this.form = {
        name: '',
        email: '',
        password: '',
        identity: '',
        id: ''
      };
    },
    handleCurrentChange(page) {
      // 当前页
      let sortnum = this.paginations.page_size * (page - 1);
      let table = this.allTableData.filter((item, index) => {
        return index >= sortnum;
      });
      // 设置默认分页数据
      this.tableData = table.filter((item, index) => {
        return index < this.paginations.page_size;
      });
    },
    handleSizeChange(page_size) {
      // 切换size
      this.paginations.page_index = 1;
      this.paginations.page_size = page_size;
      this.tableData = this.allTableData.filter((item, index) => {
        return index < page_size;
      });
    },
    setPaginations() {
      // 总页数
      this.paginations.total = this.allTableData.length;
      this.paginations.page_index = 1;
      this.paginations.page_size = 5;
      // 设置默认分页数据
      this.tableData = this.allTableData.filter((item, index) => {
        return index < this.paginations.page_size;
      });
    },
    onScreeoutMoney() {
      // 筛选
      if (!this.search_data.startTime || !this.search_data.endTime) {
        this.$message({
          type: "warning",
          message: "请选择时间区间"
        });
        this.getUsers();
        return;
      }
      const stime = this.search_data.startTime.getTime();
      const etime = this.search_data.endTime.getTime();
      this.allTableData = this.filterTableData.filter(item => {
        let date = new Date(item.date);
        let time = date.getTime();
        return time >= stime && time <= etime;
      });
      // 分页数据
      this.setPaginations();
    }
  }
};
</script>
<style scoped>
.fillcontain {
  width: 100%;
  height: 100%;
  padding: 16px;
  box-sizing: border-box;
}
.btnRight {
  float: right;
}
.pagination {
  text-align: right;
  margin-top: 10px;
}
</style>
