<template>
  <div>
    <h2>详情页面</h2>
    {{$route.params.id}}

    <br/>
    <p>异步加载数据:</p>
    姓名:{{detail.name}}
    年龄:{{detail.age}}
    性别:{{detail.sex}}
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    /*组件加载之前执行*/
    // asyncData() {
    //   return axios.get('/data/test.json').then((res) => {
    //     console.log(res);
    //     return {
    //       detail: res.data
    //     };
    //   });
    // }


    // async await写法更好
    async asyncData() {
      const res = await axios.get('/data/test.json');
      console.log(res);
      return {
          detail: res.data
        };
    }
  }
</script>

<style scoped>

</style>
