import { createStore } from 'vuex'

// 创建一个新的 store 实例
const store = createStore({
  state () {
    return {
      wqttData: undefined
    }
  },
  mutations: {
    setWqttData (state: any, val: any) {
      state.wqttData = val
    }
  }
})

export default store