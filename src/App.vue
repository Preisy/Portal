<script setup lang="ts">
import { Screen } from "quasar"
import LandingPage from "./components/LandingPage.vue";

Screen.setSizes({sm: 400, lg: 1440, xl: 1920});
</script>

<template>
  <LandingPage></LandingPage>
</template>

<style scoped lang="scss"></style>
