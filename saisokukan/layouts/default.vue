<template>
  <div id="pageTop">
    <c-header />
    <nuxt />
    <c-footer />
  </div>
</template>
<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
export default {
  //transition: 'page',
  components: {
    'c-header':Header,
    'c-footer':Footer
  },
  mounted() {
    //   this.$nextTick(() => {
    //   this.$nuxt.$loading.start()
    //   setTimeout(() => this.$nuxt.$loading.finish(), 2000)
    // })
  }
}
</script>
