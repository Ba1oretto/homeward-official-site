<template>
  <div class="page-wrap">
    <slot/>
    <blog-container/>
  </div>
</template>

<script>
export default {
  name: "BlogPage"
}
</script>

<script setup>
import BlogContainer from "./BlogContainer.vue";
import {setCurrentMenu} from "../../../hook/appearance.js";

setCurrentMenu('blog')
</script>