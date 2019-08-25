// import Vue from 'vue';
// import Vuex from 'vuex';
// Vue.use(Vuex);
//
//
// const store = () => new Vuex.Store({
//   state: {
//     count : 0
//   },
//   mutations : {
//     add(state){
//       state.count ++
//     }
//   }
// });
//
// export default store;

/*使用模块方式时,上面普通方式的写法不可用,必须都有模块模式写法*/
export const state = ()=>({
  count : 0
});

export const mutations = {
  add(state){
    state.count ++
  }
}














