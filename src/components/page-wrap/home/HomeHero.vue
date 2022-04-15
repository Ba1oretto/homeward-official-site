<template>
  <div class="hero mb-56">
    <div data-page="home" class="page-bg"/>
    <nav class="nav mb-2 z-40 mt-5">
      <div class="container mx-auto">
        <page-navigations/>
      </div>
    </nav>
    <div class="logo mx-auto mt-32">
      <div class="img"/>
    </div>
    <div @click="copyIp" data-clipboard-text="play.fantang.cc" class="cursor-pointer group inline-block mx-auto">
      <div class="server mx-auto mt-8 font-bold text-sm uppercase flex flex-col justify-center items-center lg:items-stretch lg:flex-row transition-opacity duration-150 ease-in-out group-hover:opacity-75">
        <div class="server bg-ip-900 tracking-widest py-2 px-3 border border-lighten shadow-ip">play.fantang.cc</div>
        <div class="flex items-center ml-auto px-3 tracking-wide bg-ip-800 text-ip-400 !-ml-px border shadow-ip-count border-lighten text-sm">169</div>
      </div>
      <div class="tooltips font-extrabold text-sm text-center tracking-widest uppercase mt-4 text-white relative text-shadow-md">
        <transition name="tooltip" mode="out-in">
          <p v-if="ipStyle">Click to Copy</p>
          <p v-else-if="!ipStyle">Copied to Clipboard</p>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeHero"
}
</script>

<script setup>
import {ref} from "vue";
import {debounce} from "lodash";
import {copy} from "../../../hook/clipboard.js";
import PageNavigations from "../../page/PageNavigations.vue";

const ipStyle = ref(true)
const copyIp = () => {
  changeIpStyle()
}
const privateBounce = debounce(() => {
  ipStyle.value = true
}, 5000)
const changeIpStyle = () => {
  ipStyle.value = false
  copy('.cursor-pointer.group.inline-block.mx-auto')
  privateBounce()
}
</script>