<template>
   <div  id="app">
    <Header></Header>
    <Main></Main>
    <div v-if="hasFooter">
      <Footer></Footer>
    </div>
  </div>
</template>
<script>
import Header from '@/components/header'
import Footer from '@/components/footer'
import Main from '@/components/main'
export default {
  name: 'root',
  data () {
    return {
      a: 1
    }
  },
  computed: {
    hasFooter () {
      return this.$store.state.footer
    }
  },
  components: {
    Header,
    Footer,
    Main
  }
}
</script>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#header,#footer {
  display: flex;
  p {
    font-weight: bold;
    color: #2c3e50;
    display: block;
    width: 33%;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
#main{
  height:80vh;
}
</style>
