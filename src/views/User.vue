<template>
  <div>User componet
{{age}}
    <div>
      {{userObj}}
    </div>
    <div v-for="(item, index) in list" v-bind:key="index">
      <input type="text" v-model="item.name">
      <button @click="changeItem">post</button>
    </div>
    <input type="text" v-model="age">
    <button @click="changeList">btn</button>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import { getUserList, getUserListPost } from '../services/getUserList';

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
    return {
      list: [],
      age: 123,
    };
  },
  computed: {

    ...mapState({
      userObj: 'user',
    }),
  },
  mounted() {
    this.getUser();
  },
  methods: {
    getUser() {
      getUserList().then((res) => {
        this.list = res.data.results[0].list;
      });
    },
    changeList() {
      this.age = 1;
      // this.$nextTick(() => {
      //   console.log('第二次');
      //   console.log(this.age);
      // });
      // this.xx = xx是同步的，但页面更新是异步的
      // 等待当前的同步任务完成之后再更新
      this.list[0].name = 'hhhhh';
      this.list.push({
        name: `hh${Math.random()}`,
      });
    },
    changeItem() {
      getUserListPost();
    },
  },
};
</script>

<style scoped lang="less">
</style>
