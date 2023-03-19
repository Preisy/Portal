<script setup lang="ts">
defineProps<{
  rate: number
}>();
</script>

<template>
  <div class="rate">
    <div class="stars">
      <img
          v-for="index in rate"
          :key="index"
          src="@/assets/images/reviews/star.svg" alt=""/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.rate {
  img {
    height: 1.125rem;
    margin-right: 0.2rem;
    user-select: none;
  }
}
</style>
