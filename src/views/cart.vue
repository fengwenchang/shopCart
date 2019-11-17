<template>
  <div>
    <ul class="ul">
      <li v-for="(product,index) in buyList" :key="index">
        <div>
          <div class="left">
            {{product.name}}
            <br />
            {{product.price}}
          </div>
          <div class="right">
            <span>x&nbsp;</span>
            <input type="text" v-model="product.num" @change="changeNum(product)" style="width:40px;"/>
          </div>
        </div>
      </li>
    </ul>
    <div>
      <div>
        <h5>折扣</h5>
        <ul class="ul">
        <li v-for="(discount,index) in discountList" :key="index">
          <div>
              结束时间{{discount.endTime}}
              折扣{{discount.rate}}折
              折扣类型{{map[discount.type]}}折
          </div>
        </li>
      </ul>
      </div>
      <div>
        <h5>优惠卷</h5>
        <ul class="ul">
          <li v-for="(discount,index) in ticketList" :key="index">
            <div>
              满{{discount.total}}减{{discount.discount}}
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div>
      <div class="left">{{discountReduceTicket}}</div>
      <div class="right">
        <button @click="goPay">立即结算</button>
      </div>
    </div>
  </div>
</template>
<script>
/**
 * 购物车
 * 1先计算出按商品类型的商品总价 放在buyListByType中
 * 2再计算出1减去各类型的折扣后的总价放在totalReduceDiscount中
 * 最后算出2减去折扣的价格即为最后的总价discountReduceTicket
 */
import FakeData from '@/constants/data'
export default {
  name: 'products',
  data () {
    return {
      map: FakeData.map
    }
  },
  computed: {
    buyList () {
      return this.$store.state.buyList
    },
    buyListByType () {
      return this.$store.state.buyListByType
    },
    totalByType () {
      // 计算按type计算总价
      let totalTypeMoney = {}
      for (let [key, value] of Object.entries(this.buyListByType)) {
        let typeValue = value.reduce((total, item) => {
          return total + item.price * item.num
        }, 0)
        totalTypeMoney[key] = typeValue
      }
      return totalTypeMoney
    },
    usedTicket () {
      // 本次使用的优惠卷
      let ticket = this.ticketList.filter((item) => this.totalReduceDiscount >= item.total)
      if (ticket.length) {
        return ticket[ticket.length - 1]
      } else {
        return null
      }
    },
    usedDiscount () {
      // 本次使用的折扣
      return this.discountList.filter((item) => (item.type in this.totalByType))
    },
    discountReduceTicket () {
      // 计算折扣减去优惠卷
      if (this.usedTicket) {
        return (this.totalReduceDiscount && (this.totalReduceDiscount - this.usedTicket.discount)).toFixed(2)
      } else {
        return this.totalReduceDiscount
      }
    },
    totalReduceDiscount () {
      // 计算总价减去折扣折扣
      let money = 0
      for (let [key, value] of Object.entries(this.totalByType)) {
        if (this.getTypeDiscount(key)) {
          money += value * (this.getTypeDiscount(key).rate / 10)
        } else {
          money += value
        }
      }
      return money.toFixed(2)
    },
    discountList () {
      // 折扣列表去掉已经失效的
      let date = new Date().getTime()
      return this.$store.state.discountList.filter((item) => {
        return new Date(item.endTime).getTime() >= date
      })
    },
    ticketList () {
      // 优惠卷列表去掉已经失效的
      let date = new Date().getTime()
      return this.$store.state.ticketList.filter((item) => {
        return new Date(item.endTime).getTime() >= date
      }).sort((a, b) => {
        return a.total - b.total
      })
    }
  },
  methods: {
    getTypeDiscount (type) {
      // 获得对应类型的优惠卷
      return this.discountList.find((item) => {
        return item.type === type
      })
    },
    goPay () {
      // 结算并清空购物车列表,删除本次使用的优惠卷和折扣
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
