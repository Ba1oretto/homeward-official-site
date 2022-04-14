<template>
  <div id="_frame">
    <div class="body-wrap grid grid-rows-body h-full">
      <page-header/>

      <router-view v-slot="{ Component, route }">
        <transition name="page" mode="out-in">
          <component :is="Component" :key="route.path">
            <div :data-page="route.name" class="page-bg" :style="{backgroundImage:'url(' + 'https://ghost.ba1oretto.com/content/images/2022/04/Origin_Realms.jpg' + ')'}"/>
          </component>
        </transition>
      </router-view>

      <!--todo v-show-->

      <transition name="page" mode="out-in">
        <page-footer v-show="footerEnabled"/>
      </transition>
      <page-loading/>
    </div>
  </div>
</template>

<script>
export default {
  name: "OtherWrap"
}
</script>

<script setup>
import PageFooter from "./PageFooter.vue";
import PageLoading from "./PageLoading.vue";
import PageHeader from "./PageHeader.vue";
import {shallowRef} from "vue";
import {subscribe} from "pubsub-js";

const footerEnabled = shallowRef(false)
const changeFooterCondition = (_, enable) => {
  footerEnabled.value = enable
}
subscribe('changeFooterCondition', changeFooterCondition)
</script>