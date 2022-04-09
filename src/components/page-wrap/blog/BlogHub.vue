<template>
  <div data-page="blog" class="page-bg" :style="getImageAddress(latest)"/>
  <blog-container/>
  <div class="stone-bg dark pt-10 pb-20 blog-offset"/>
</template>

<script>
import BlogContainer from "./BlogContainer.vue";
import PageHeader from "../../PageHeader.vue";

export default {
  name: "BlogHub",
  components: {BlogContainer, PageHeader}
}
</script>

<script setup>
import {getImageAddress} from "../../../hook/attribute-generator.js";
import {ref} from "vue";
import pubsub from "pubsub-js";

const latest = ref('')
const setCurrentBackground = (_, bg) => {
  latest.value = bg
}
pubsub.subscribe('setCurrentBackground', setCurrentBackground)
</script>