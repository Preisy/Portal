<script setup lang="ts"></script>

<template>
  <div class="logo">
    <img src="../../assets/svg/logo-symbol.svg" alt="" class="logo-symbol">
    <div class="logo-slogans">
    <img src="../../assets/svg/logo-text.svg" alt="" class="logo-text">
    <img src="../../assets/svg/ceiling.svg" alt="" class="logo-add_text">
  </div>
  </div>
</template>

<style scoped lang="scss">
.logo {
    user-select: none;
    display: flex;
    align-items: center;
    .logo-symbol {
      margin-right: 1rem;
      height: 100%;
    }
  }
  .logo-slogans {
    display:flex;
    flex-direction: column;
    height: 2.5rem;
    width: 8rem;
    .logo-text {
      margin-left: -0.5rem;
      height: 100%;
    }
    .logo-add_text {
      margin-left: -1rem;
    }
  }

</style>
