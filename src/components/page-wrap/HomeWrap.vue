<template>
  <div id="_frame">
    <div class="body-wrap grid grid-rows-body h-full">
      <!--make -->
      <page-wrap/>
      <!--todo v-show-->
      <page-footer v-show="true"/>
      <!--<page-loading/>-->
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeWrap"
}
</script>

<script setup>
import PageWrap from "../PageWrap.vue";
import PageLoading from "../PageLoading.vue";
import PageFooter from "../PageFooter.vue";
</script>