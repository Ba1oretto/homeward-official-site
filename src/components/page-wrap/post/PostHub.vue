<template>
  <!--<div data-page="post" class="page-bg" :style="getImageAddress(current)"/>-->
  <!--<post-container/>-->
  <div>
    111
  </div>
</template>

<script>
import PostContainer from "./PostContainer.vue";
export default {
  name: "PostHub",
  components: {PostContainer}
}
</script>

<script setup>
import {ref} from "vue";
import pubsub from "pubsub-js";
import {getImageAddress} from "../../../hook/attribute-generator.js";

// const current = ref('')
// const setCurrentBackground = (_, bg) => {
//   current.value = bg
// }
// pubsub.subscribe('setCurrentBackground', setCurrentBackground)
</script>