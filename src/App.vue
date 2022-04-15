<template>
  <transition name="page" mode="out-in">
    <component :is="currentBodyWrap"/>
  </transition>
</template>

<script setup>
import {shallowRef} from "vue";
import HomeFrame from "./components/HomeFrame.vue";
import OtherFrame from "./components/OtherFrame.vue";
import {useRouter} from "vue-router";

useRouter().beforeEach((to) => {
  currentBodyWrap.value = to.name === 'home' ? HomeFrame : OtherFrame
})

const currentBodyWrap = shallowRef(HomeFrame)
</script>