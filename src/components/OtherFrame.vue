<template>
  <div id="_frame">
    <div class="body-wrap grid grid-rows-body h-full">
      <page-header/>
      <main-body/>
    </div>
  </div>
</template>

<script>
export default {
  name: "OtherFrame"
}
</script>

<script setup>

import PageHeader from "./page/PageHeader.vue";
import MainBody from "./MainBody.vue";
</script>