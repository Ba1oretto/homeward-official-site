<template>
  <div id="_frame">
    <div class="body-wrap grid grid-rows-body h-full">
      <page-header/>
      <page-wrap/>
      <!--todo v-show-->
      <page-footer v-show="true"/>
      <!--<page-loading/>-->
    </div>
  </div>
</template>

<script>
export default {
  name: "OtherWrap"
}
</script>

<script setup>

import PageWrap from "../PageWrap.vue";
import PageFooter from "../PageFooter.vue";
import PageLoading from "../PageLoading.vue";
import PageHeader from "../PageHeader.vue";
</script>