<template>
  <div>
    <router-view />
    home
  </div>
</template>

// router-view 相当于一个占位符，从路由找到子组件，例如home下的user组件

<script>
export default {
  components: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="less">
</style>
