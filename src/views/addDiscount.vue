<template>
  <div>
    <ul class="ul">
      <li>
        商品类型
        <select v-model="formData.type">
          <option value="">请选择</option>
          <option value="it">电子</option>
          <option value="life">日用品</option>
          <option value="wine">酒类</option>
          <option value="food">食品</option>
        </select>
      </li>
      <li>
        折扣
        <input type="number" v-model="formData.rate">
      </li>
      <li>
        截止日期
        <input type="date" v-model="formData.endTime">
      </li>
    </ul>
    <div>
      <div @click="addDiscount">添加</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'addDiscount',
  data () {
    return {
      formData: {
        type: ''
      }
    }
  },
  methods: {
    addDiscount () {
      if (!this.formData.type || !this.formData.rate || !this.formData.endTime) {
        alert('请填写表单')
        return
      }
      if (!this.validate(this.formData.rate)) {
        alert('折扣在0-10之间')
        return
      }
      this.$store.commit('ADDDISCOUNT', this.formData)
      this.$router.go(-1)
      let { path, name } = this.$route
      if (path.indexOf('me') !== -1) {
        name = 'me'
      }
      this.$store.commit('SETNAV', name)
    },
    validate (value) {
      return value > 0 && value < 10
    }
  }
}
</script>
