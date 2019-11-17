<template>
  <div>
    <ul class="ul">
      <li>
        购物金额
        <input type="number" v-model="formData.total">
      </li>
      <li>
        减免金额
        <input type="number" v-model="formData.discount">
      </li>
      <li>
        截止日期
        <input type="date" v-model="formData.endTime">
      </li>
    </ul>
    <div>
      <div @click="addTicket">添加</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'addTicket',
  data () {
    return {
      formData: {}
    }
  },
  methods: {
    addTicket () {
      if (!this.formData.total || !this.formData.discount || !this.formData.endTime) {
        alert('请填写表单')
        return
      }
      this.$store.commit('ADDTICKET', this.formData)
      this.$router.go(-1)
      let { path, name } = this.$route
      if (path.indexOf('me') !== -1) {
        name = 'me'
      }
      this.$store.commit('SETNAV', name)
    }
  }
}
</script>
