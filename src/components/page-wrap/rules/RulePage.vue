<template>
  <div class="page-wrap">
    <slot/>
    <rules-container/>
  </div>
</template>

<script>
export default {
  name: "RulePage"
}
</script>

<script setup>
import RulesContainer from "./RulesContainer.vue";
import {setCurrentMenu} from "../../../hook/appearance.js";

setCurrentMenu('rule')
</script>