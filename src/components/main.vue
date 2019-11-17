 <template>
    <div id="main">
      <div class="products-container">
        <router-view></router-view>
      </div>
    </div>
</template>
<script>
export default {
}
</script>
<style lang="less" scoped>
 .products-container{
   max-height:80vh;
  overflow-y:auto;
 }
</style>
