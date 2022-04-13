<template>
  <!--todo singleton-->
  <transition name="page" mode="out-in">
    <div class="page-wrap">
      <!--todo dynamic components-->
      <component :is="currentPageWrap">
        <div :data-page="currentPageWrap.name" class="page-bg" :style="{backgroundImage:'url(' + 'https://ghost.ba1oretto.com/content/images/2022/04/Origin_Realms.jpg' + ')'}"/>
      </component>
    </div>
  </transition>
</template>

<script>
import home from "./page-wrap/home/HomeHub.vue";
import blog from "./page-wrap/blog/BlogHub.vue";
import rules from "./page-wrap/rules/RulesHub.vue";
import post from "./page-wrap/post/PostHub.vue";
export default {
  name: "PageWrap",
  components: {
    home,
    blog,
    rules,
    post
  }
}
</script>

<script setup>
import {onMounted, shallowRef} from "vue";
import {useRoute, useRouter} from "vue-router";
import pubsub from "pubsub-js";
import isBlank from "../hook/isBlank.js";

useRoute().name

const changePageWrap = (_, name) => {
  if (!isBlank(name)) currentPageWrap.value = name
}
pubsub.subscribe('changePageWrap', changePageWrap)

const currentPageWrap = shallowRef('home')
changePageWrap('', useRoute().name)
</script>