<template>
  <div id="footer">
    <p to="/products/it" @click="toProduct()">商城</p>
    <p to="/me" @click="toMe()">我</p>
    <p to="/cart" @click="toCart()">购物车</p>
  </div>
</template>
<style lang="less">
#footer {
  height: 10vh;
}
</style>
<script>
export default {
  data () {
    return {
      a: 1
    }
  },
  methods: {
    toProduct () {
      const type = this.$store.state.type
      this.$store.commit('SETTYPE', type)
      this.$store.commit('SETGOODS')
      this.$router.push({ path: `/products/${type}` })
      this.setHeader()
    },
    toMe () {
      this.$router.push({ name: 'me' })
      this.setHeader()
    },
    toCart () {
      this.$router.push({ name: 'cart' })
      this.setHeader()
    },
    setHeader () {
      let { path, name } = this.$route
      if (path.indexOf('me') !== -1) {
        name = 'me'
      }
      this.$store.commit('SETNAV', name)
    }
  },
  created () {
    const type = this.$store.state.type
    this.$store.commit('SETTYPE', type)
    this.$store.commit('SETGOODS')
    this.setHeader()
  }
}
</script>
