<template>
  <div data-page="blog" class="page-bg" :style="{backgroundImage:'url(' + latest + ')'}"/>
  <component :is="currentComponent"></component>
</template>

<script>
import BlogContainer from "./BlogContainer.vue";

export default {
  name: "BlogHub",
  components: {BlogContainer}
}
</script>

<script setup>
import {computed, ref} from "vue";

const currentComponent = ref('BlogContainer')

const latest = computed(() => {
  return 'https://ghost.ba1oretto.com/content/images/2022/04/Origin_Realms.jpg'
})
</script>