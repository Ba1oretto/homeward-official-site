<template>
  <router-view v-slot="{ Component, route }">
    <transition name="page" mode="out-in">
      <component :is="Component" :key="route.path">
        <div :data-page="route.name" class="page-bg" :style="bgImg.enable ? getImageAddress(bgImg.url) : ''"/>
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
import PageFooter from "./page/PageFooter.vue";
import PageLoading from "./page/PageLoading.vue";
import {reactive} from "vue";
import {subscribe} from "pubsub-js";
import {getImageAddress} from "../hook/attribute-generator.js";

const bgImg = reactive({
  enable: false,
  url: ''
})
const setCurrentBackground = (_, path) => {
  bgImg.url = path
  bgImg.enable = true
}
subscribe('setCurrentBackground', setCurrentBackground)
</script>