<template>
  <div id="_frame">
    <div class="body-wrap grid grid-rows-body h-full">
      <main-body/>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeFrame"
}
</script>

<script setup>

import MainBody from "./MainBody.vue";
</script>