<template>
  <slot/>
  <blog-container/>
</template>

<script>
export default {
  name: "BlogHub"
}
</script>

<script setup>
import {computed, shallowRef} from "vue";
import blogContainer from "./BlogContainer.vue";
import BlogContainer from "./BlogContainer.vue";
</script>