<template>
  <div class="page-wrap">
    <slot/>
    <post-container/>
  </div>
</template>

<script>
export default {
  name: "PostPage"
}
</script>

<script setup>
import PostContainer from "./PostContainer.vue";
import {setCurrentMenu} from "../../../hook/appearance.js";

setCurrentMenu('blog')
</script>