<script setup lang="ts">
import star from '@/assets/images/reviews/star.svg'
defineProps({
  rate: {
    type: Number,
    required: true,
  },
});
</script>

<template>
  <div class="rate">
    <div class="stars">
      <img
          v-for="index in rate"
          :key="index"
          :src="star"/>
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
