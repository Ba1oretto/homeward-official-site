<template>
  <div id="_frame">
    <div class="body-wrap grid grid-rows-body h-full">
      <router-view v-slot="{ Component, route }">
        <transition name="page" mode="out-in">
          <component :is="Component" :key="route.path"/>
        </transition>
      </router-view>
      <!--todo v-show-->
      <page-footer v-show="false"/>
      <page-loading/>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeWrap"
}
</script>

<script setup>
import PageLoading from "./PageLoading.vue";
import PageFooter from "./PageFooter.vue";
</script>