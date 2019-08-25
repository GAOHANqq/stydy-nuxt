<template>
  <div>
    <p>普通方式</p>
    <p>{{$store.state.count}}</p>
    <van-button type="default" @click="$store.commit('add')">+1</van-button>

    <hr>
    <p>模块方式</p>
    <p>{{$store.state.subCount.scount}}</p>
    <van-button type="default" @click="$store.commit('subCount/addScount')">+2</van-button>




  </div>
</template>

<script>
  export default {
    name: "index",
    mounted(){
      console.log(this.$store.state);
    }
  }
</script>

<style scoped>

</style>
