<template>
  <div class="mobile-toggle ml-auto block md:hidden p-8">
    <div class="bar"/>
    <div class="bar"/>
    <div class="bar"/>
  </div>
  <div class="menu-collapse flex md:items-center flex-col md:flex-row md:justify-center">
    <ul class="md:flex md:justify-center md:items-center md:mb-3 md:-mx-3 uppercase font-bold tracking-widest text-lg text-shadow">
      <li @click="changePage(nav.name)" v-for="nav in navigations" class="mx-3 mb-3 md:mb-0">
        <router-link :to="nav.path" :class="nav.enable ? nav.style.active : nav.style.inactive" class="flex items-center px-5 py-3 md:py-1 transition duration-200 border border-transparent hover:border-lighten">
          <span class="block">{{nav.name}}</span>
        </router-link>
      </li>
      <li class="mx-3 mb-3 md:mb-0">
        <a href="https://baioretto.com" class="flex items-center px-5 py-3 md:py-1 transition duration-200 bg-red-600/80 text-white hover:bg-red-500 border border-lighten">Store</a>
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
import {reactive} from "vue";
import pubsub from "pubsub-js";

const changePage = (name) => {
  pubsub.publish('changePageWrap', name)
}

const navigations = reactive({
  home: {
    name: 'home',
    path: '/',
    style: {
      active: 'bg-nav-home border-lighten',
      inactive: 'hover:bg-nav-home'
    },
    enable: false
  },
  blog: {
    name: 'blog',
    path: '/blog',
    style: {
      active: 'bg-nav-blog border-lighten',
      inactive: 'hover:bg-nav-blog'
    },
    enable: false
  },
  rule: {
    name: 'rules',
    path: '/rules',
    style: {
      active: 'bg-nav-help border-lighten',
      inactive: 'hover:bg-nav-help'
    },
    enable: false
  },
})
</script>