<template>
  <div>
    <div id="header" class="l-header" :class='{"is-open":isLoad}'>
      <header>
        <nav class="l-menu--header" :class='{"is-open":isOpen}'>
          <h1 class="l-header__sitename"><nuxt-link to="/"><c-logo /></nuxt-link></h1>
          <ul class="l-menu">
            <c-global
              v-for="item in items"
              :key="item.id"
              :menu="item.menu"
              :url="item.url"
            />
          </ul>
          <div class="l-humberger" @click='onClick()' :class='{"is-open":isOpen}'>
            <span class="l-humberger--linetop"></span>
            <span class="l-humberger--linebottom"></span>
          </div>
          <div class="l-overlay"></div>
      </nav>
      </header>
    </div>
  </div>
</template>
<script>
import Logo from './Logo.vue';
import GlobalMenu from './GlobalMenu.vue';
import menuList from '~/assets/json/menu.json'
export default {
  components: {
    'c-logo' : Logo,
    'c-global' : GlobalMenu
  },
  data() {
    return {
        isOpen: false,
        isLoad: false,
        isDelay: false,
        items: menuList,
      }
  },
  mounted(){
    this.isLoad = true;
  },
  methods: {
    onClick(){
      this.isOpen=!this.isOpen
    }
  },
}
</script>
<style lang="scss">

</style>