export const useIndexStore = defineStore('index', {
  state() {
    return {
      num: 1
    }
  },
  getters: {
    number(): number {
      return this.num++
    }
  },
  actions: {
    getNum() {
      console.log(this.num)
    }
  }
});
