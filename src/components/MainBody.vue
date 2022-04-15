<template>
  <router-view v-slot="{ Component, route }">
    <transition name="page" mode="out-in">
      <component :is="Component" :key="route.path">
        <div :data-page="route.name" class="page-bg" :style="{backgroundImage:'url(' + 'https://ghost.ba1oretto.com/content/images/2022/04/Origin_Realms.jpg' + ')'}"/>
      </component>
    </transition>
  </router-view>
  <page-footer/>
  <page-loading/>
</template>

<script>
export default {
  name: "MainBody"
}
</script>

<script setup>

import PageFooter from "./PageFooter.vue";
import PageLoading from "./PageLoading.vue";
</script>