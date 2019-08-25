<template>
  <div>
    <h2>商品列表</h2>
    <ul>
      <li v-for="(item,index) in list" :key="item.name">
        <nuxt-link :to="'/detail/'+item.id">{{item.name}}:${{item.price}}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "index",
    asyncData({app}){
      const sortArr = app.sort([1,5,6,9,11]);
      console.log(sortArr);

      // const sortArr1 = app.$sortUp([1,5,6,9,11]);
      // console.log('同时注入context',sortArr1);


    },
    // mounted(){
    //   const sortArr2 = this.$sortUp([1,5,6,9,11]);
    //   console.log('同时注入Vue',sortArr2);
    // },
    data(){
      return {
        list:[
          {name:'鸡蛋',price:50,id:'001'},
          {name:'茄子',price:100,id:'002'},
          {name:'青菜',price:150,id:'003'}
        ]
      }
    }


  }
</script>

<style scoped>

</style>
