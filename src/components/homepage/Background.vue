<script setup lang="ts">

</script>

<template>
  <div class="bg-wrapper">
    <div class="bg"></div>
    <div class="shadow"></div>
  </div>
</template>

<style scoped lang="scss">
.bg-wrapper {
  position: relative;
}
.bg {
  background: url(../../assets/images/homepage/background.png) no-repeat;
  background-size: cover;

}
.shadow {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 125px;
  background: linear-gradient(180deg, rgba(27, 27, 27, 0) 27%, #151515 57%);
}
</style>
