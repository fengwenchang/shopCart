import Vue from 'vue'
import Vuex from 'vuex'
import FakeData from '@/constants/data'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    type: 'it', // 当前商品类型
    goods: [], // 当前类型商品
    buyList: [], // 购物车商品
    buyListByType: {}, // 购物车商品按类型
    nav: [], // 导航
    footer: true, // 是否显示脚部
    discountList: FakeData.discount, // 折扣
    ticketList: FakeData.ticket // 优惠卷
  },
  mutations: {
    SETTYPE (state, type) {
      state.type = type
    },
    SETGOODS (state) {
      state.goods = FakeData.products.filter((item) => {
        return item.type === this.state.type
      })
    },
    SETBUYLIST (state, item) {
      state.buyList.push(item)
      if (!state.buyListByType[item.type]) {
        state.buyListByType[item.type] = []
      }
      state.buyListByType[item.type].push(item)
    },
    SETNAV (state, footer) {
      state.nav = FakeData.nav[footer]
    },
    SETFOOTER (state, route) {
      state.footer = route
    },
    ADDDISCOUNT (state, item) {
      state.discountList.push(item)
    },
    ADDTICKET (state, item) {
      state.ticketList.push(item)
    }
  }
})
