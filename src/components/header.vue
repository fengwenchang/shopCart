 <template>
  <header id="header">
    <p v-for="item in navList" :key="item.type" @click="toPath(item)">{{item.label}}</p>
  </header>
</template>
<script>
export default {
  computed: {
    navList () {
      return this.$store.state.nav.head
    }
  },
  methods: {
    commitState (type) {
      this.$store.commit('SETTYPE', type)
      this.$store.commit('SETGOODS')
      this.$router.push({ path: `/products/${type}` })
    },
    toPath (item) {
      // 点击更新导航 如果是返回 返回中如果有me则返回Me,因为只有me有二级导航
      if (item.father === 'products') {
        this.commitState(item.type)
      } else {
        if (item.type === 'back') {
          this.$router.go(-1)
          let { path, name } = this.$route
          if (path.indexOf('me') !== -1) {
            name = 'me'
          }
          this.$store.commit('SETNAV', name)
          // 显示页脚
          this.$store.commit('SETFOOTER', true)
        } else {
          this.$router.push({ name: item.type })
        }
      }
    }
  }
}
</script>
<style lang="less">
#header {
  height: 10vh;
}
</style>
