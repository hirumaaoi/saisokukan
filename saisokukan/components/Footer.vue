<template>
  <div>
    <div id="footer" class="l-footer">
      <footer>
        <p class="l-footer__copyright">&copy; Saisokukan All rights Reserved.</p>
      </footer>
      <nuxt-link class="c-pageTop" v-scroll-to="'#pageTop'" to>
        <pagetop />
      </nuxt-link>
    </div>
  </div>
</template>
<script>
import Pagetop from './Pagetop.vue'
import Sns from './Sns.vue'
export default {
  components: {
    Pagetop,
  },
  data() {
    return {
    }
  },
  method() {

  }
}
</script>