<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="发布任务" name="release-tasks">
      <release-task></release-task>
    </el-tab-pane>
    <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
    <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
    <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
  </el-tabs>
</template>

<script>
import ReleaseTask from "./ReleaseTask.vue";

export default {
  components: { ReleaseTask },
  data() {
    return {
      activeName: "release-tasks",
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>