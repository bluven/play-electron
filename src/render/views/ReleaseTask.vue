<template>
  <el-table :data="tasks" style="width: 100%">
    <el-table-column prop="name" label="名称">
      <template v-slot="scope">
        <el-tooltip
          class="item"
          effect="dark"
          placement="top"
          :content="scope.row.id.toString()"
        >
          <span>{{ scope.row.name }}</span>
        </el-tooltip>
      </template>
    </el-table-column>
    <el-table-column prop="type" label="类型"> </el-table-column>
    <el-table-column prop="namespace" label="Namespace"> </el-table-column>
    <el-table-column prop="status" label="状态"> </el-table-column>
    <el-table-column prop="edge_names" label="节点">
      <template v-slot="scope">
        <el-tag
          :key="edge"
          v-for="edge in edgeNames(scope.row)"
          :disable-transitions="false"
        >
          {{ edge }}
        </el-tag>
      </template>
    </el-table-column>
    <el-table-column label="删除操作?">
      <template v-slot="scope">
        {{ scope.row.for_deletion == 1 ? "是" : "否" }}
      </template>
    </el-table-column>
    <el-table-column label="开始时间">
      <template v-slot="scope">
        {{ scope.row.start_time.toJSON() }}
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { loadTasks } from "../database";

export default {
  data() {
    return {
      tasks: [],
    };
  },
  methods: {
    edgeNames(task) {
      return JSON.parse(task.edge_names || "[]");
    },
  },
  async mounted() {
    this.tasks = await loadTasks();
  },
};
</script>