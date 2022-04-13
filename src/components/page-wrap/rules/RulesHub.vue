<template>
  <slot/>
  <rules-container/>
</template>

<script>
import RulesContainer from "./RulesContainer.vue";
import PageHeader from "../../PageHeader.vue";

export default {
  name: "RulesHub",
  components: {PageHeader, RulesContainer}
}
</script>

<style scoped>

</style>