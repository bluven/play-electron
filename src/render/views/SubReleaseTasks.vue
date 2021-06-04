<template>
  <el-dialog
    title="标题"
    v-model="opened"
    :show-close="false"
    @open="handleDialogOpen"
    @close="handleDialogClose"
  >
    <span class="dialog-footer">
      <el-button @click="close">关闭</el-button>
      <el-button
        @click="submit"
        :loading="submitting"
        :disabled="submitting"
        type="primary"
        >添加</el-button
      >
    </span>
  </el-dialog>
</template>


<script>
export default {
  data() {
    return {
      opened: false,
      submitting: false,
    };
  },
  computed: {
    title() {
      return "标题";
    },
  },
  methods: {
    submit() {},

    reset() {
      // clear
    },

    open() {
      this.opened = true;
    },

    close() {
      this.opened = false;
      this.$emit("close");
    },

    async handleDialogOpen() {
      // prepare
    },

    async handleDialogClose() {
      if (this.opened) {
        this.close();
      }

      setTimeout(this.reset, 500);
    },
  },
};
</script>