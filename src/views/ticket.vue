<template>
  <div>
    <ul class="ul">
      <li v-for="(discount,index) in ticketList" :key="index">
        <div>
          满{{discount.total}}减{{discount.discount}}
        </div>
      </li>
    </ul>
    <div>
      <div @click="addTicket">添加</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ticket',
  computed: {
    ticketList () {
      return this.$store.state.ticketList
    }
  },
  methods: {
    addTicket () {
      this.$store.commit('SETNAV', 'addTicket')
      this.$router.push({ path: '/me/addTicket' })
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
.left {
  width: 80%;
  display: inline-block;
  text-align: left;
}
.right {
  width: 20%;
  display: inline-block;
}
</style>
