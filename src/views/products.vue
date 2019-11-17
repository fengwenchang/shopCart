<template>
  <div>
    <ul class="ul">
       <li v-for="(product,index) in goodsList" :key="index">
         <div>
           <div class="left">
              {{product.name}}
              <br/>
              {{product.price}}
           </div>
           <div class="right" @click="addGoods(product)">
             添加
           </div>
         </div>
       </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'products',
  data () {
    return {
      type: ''
    }
  },
  computed: {
    goodsList () {
      return this.$store.state.goods
    }
  },
  methods: {
    addGoods (item) {
      // 添加到购物车 如果已经有这个商品了那么直接将Num数量+1,如果没有的话直接设置num的值为1
      let index = this.$store.state.buyList.findIndex((goods) => {
        return item.name === goods.name
      })
      if (index !== -1) {
        this.$set(this.$store.state.buyList[index], 'num', ++this.$store.state.buyList[index].num)
      } else {
        this.$set(item, 'num', 1)
        this.$store.commit('SETBUYLIST', item)
      }
    }
  },
  created () {
    this.type = this.$store.state.type
  }
}
</script>
<style lang="less">
.ul{
  list-style:none;
  li{
    height:13.3vh;  }
}
  .left{
    width:80%;
    display:inline-block;
    text-align:left;
  }
  .right{
    width:20%;
    display:inline-block;
  }
</style>
