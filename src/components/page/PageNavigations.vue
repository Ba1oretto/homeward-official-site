<template>
  <div :class="{active: isActive}" @click="isActive = !isActive" class="mobile-toggle ml-auto block md:hidden p-8">
    <div class="bar"/>
    <div class="bar"/>
    <div class="bar"/>
  </div>
  <div :class="{active: isActive}" class="menu-collapse flex md:items-center flex-col md:flex-row md:justify-center">
    <ul class="md:flex md:justify-center md:items-center md:mb-3 md:-mx-3 uppercase font-bold tracking-widest text-lg text-shadow">
      <li v-for="nav in navigations" @click="isActive = !isActive" class="mx-3 mb-3 md:mb-0">
        <router-link :to="nav.path" :class="nav.enable ? nav.style.active : nav.style.inactive" class="flex items-center px-5 py-3 md:py-1 transition duration-200 border border-transparent hover:border-lighten">
          <span class="block">{{nav.chinese}}</span>
        </router-link>
      </li>
      <li class="mx-3 mb-3 md:mb-0">
        <a href="https://baioretto.com" class="flex items-center px-5 py-3 md:py-1 transition duration-200 bg-red-600/80 text-white hover:bg-red-500 border border-lighten">商店</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "PageNavigations"
}
</script>

<script setup>
import {reactive, shallowRef} from "vue";
import {subscribe} from "pubsub-js";

const isActive = shallowRef(false)
const navigations = reactive({
  home: {
    name: 'home',
    chinese: '主页',
    path: '/',
    style: {
      active: 'bg-nav-home border-lighten',
      inactive: 'hover:bg-nav-home'
    },
    enable: true
  },
  blog: {
    name: 'blog',
    chinese: '博客',
    path: '/blog',
    style: {
      active: 'bg-nav-blog border-lighten',
      inactive: 'hover:bg-nav-blog'
    },
    enable: false
  },
  rule: {
    name: 'rule',
    chinese: '规则',
    path: '/rule',
    style: {
      active: 'bg-nav-help border-lighten',
      inactive: 'hover:bg-nav-help'
    },
    enable: false
  },
})
const setCurrentMenu = (_, name) => {
  switch (name) {
    case 'blog': {
      navigations.blog.enable = true
      navigations.home.enable = navigations.rule.enable = false
      break
    }
    case 'rule': {
      navigations.rule.enable = true
      navigations.home.enable = navigations.blog.enable = false
      break
    }
  }
}
subscribe('setCurrentMenu', setCurrentMenu)
</script>