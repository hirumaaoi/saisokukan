<template>
    <li class="l-menu__list"><nuxt-link :to="url">{{ menu }}</nuxt-link></li>
</template>
<script>
export default {
  props:{
    menu:{
      type: String,
      default: "",
    },
    url: {
      type: String,
      default: "",
    }
  },
}
</script>