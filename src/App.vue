<script setup>
import {shallowRef} from "vue";
import homeWrap from "./components/page-wrap/HomeWrap.vue";
import otherWrap from "./components/page-wrap/OtherWrap.vue";
import {useRouter} from "vue-router";

useRouter().beforeEach((to) => {
  currentBodyWrap.value = to.name === 'home' ? homeWrap : otherWrap
})

const currentBodyWrap = shallowRef(homeWrap)
</script>

<template>
  <transition name="page" mode="out-in">
    <component :is="currentBodyWrap"/>
  </transition>
</template>