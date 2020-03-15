<template>
  <div>User componet

    <div>
      {{userObj}}
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';

// https://vuex.vuejs.org/zh/guide/state.html
// vue-router
// vue-cli

// mutation: 更改state 同步操作
// action: 更改state 异步操作，适用于网络请求
// 通常action发起一个mutation，mutation修改state
// get相当于一个简单的同步操作(例如数据过滤，拼接)，例如first name+second name拼接，同步操作
// module 相当于命名空间区分


export default {
  components: {},
  data() {
    return {};
  },
  computed: {

    ...mapState({
      userObj: 'user',
    }),
  },
  mounted() {
    console.log(this.$store);
  },
  methods: {},
};
</script>

<style scoped lang="less">
</style>
