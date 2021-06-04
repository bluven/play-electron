<template>
  <el-table :data="tasks" style="width: 100%">
    <el-table-column prop="name" label="名称">
      <template v-slot="{ row: task }">
        <el-tooltip
          class="item"
          effect="dark"
          placement="top"
          :content="task.id.toString()"
        >
          <span>{{ task.name }}</span>
        </el-tooltip>
      </template>
    </el-table-column>
    <el-table-column prop="type" label="类型"> </el-table-column>
    <el-table-column prop="namespace" label="Namespace"> </el-table-column>
    <el-table-column prop="status" label="状态"> </el-table-column>
    <el-table-column prop="edge_names" label="节点">
      <template v-slot="{ row: task }">
        <el-tag
          :key="edge"
          v-for="edge in edgeNames(task)"
          :disable-transitions="false"
        >
          {{ edge }}
        </el-tag>
      </template>
    </el-table-column>
    <el-table-column label="删除操作?">
      <template v-slot="{ row: task }">
        {{ task.for_deletion == 1 ? "是" : "否" }}
      </template>
    </el-table-column>
    <el-table-column label="开始时间">
      <template v-slot="{ row: task }">
        {{ task.start_time.toJSON() }}
      </template>
    </el-table-column>
    <el-table-column fixed="right" label="操作" width="100">
      <template v-slot="{ row: task }">
        <el-button @click="openSubTasks(task)" type="text" size="small"
          >查看子任务
        </el-button>
      </template>
    </el-table-column>
  </el-table>
  <sub-release-tasks ref="subTasks"></sub-release-tasks>
</template>

<script>
import { loadTasks } from "../database";
import SubReleaseTasks from "./SubReleaseTasks.vue";
import TestDialog from "./TestDialog.vue";

export default {
  components: {
    SubReleaseTasks,
    TestDialog,
  },
  data() {
    return {
      dialogVisible: false,
      tasks: [],
    };
  },
  methods: {
    edgeNames(task) {
      return JSON.parse(task.edge_names || "[]");
    },
    openSubTasks(taskID) {
      this.$refs.subTasks.open();
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
  },
  async mounted() {
    this.tasks = await loadTasks();
  },
};
</script>