<template>
  <div>
    <ul class="ul">
      <li v-for="(discount,index) in discountList" :key="index">
        <div>
            结束时间{{discount.endTime}}
            折扣{{discount.rate}}折
            折扣类型{{map[discount.type]}}折
        </div>
      </li>
    </ul>
    <div>
      <div @click="addDiscount">添加</div>
    </div>
  </div>
</template>
<script>
import FakeData from '@/constants/data'
export default {
  name: 'discount',
  data () {
    return {
      map: FakeData.map
    }
  },
  computed: {
    discountList () {
      return this.$store.state.discountList
    }
  },
  methods: {
    addDiscount () {
      this.$store.commit('SETNAV', 'addDiscount')
      this.$router.push({ path: '/me/addDiscount' })
      // 隐藏页脚
      this.$store.commit('SETFOOTER', false)
    }
  }
}
</script>
<style lang="less">
.ul {
  list-style: none;
  li {
    height: 13.3vh;
  }
}
</style>
