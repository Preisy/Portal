<script setup lang="ts">
import Rate from "./Rate.vue";
interface ReviewCardProps {
  img_src: string,
  rate?: number,
  header: string
}

const props = withDefaults(defineProps<ReviewCardProps>(), {
  rate: 5
})
</script>

<template>
  <div class="review-card active">
    <div class="icon">
      <img :src="img_src" alt=""/>
    </div>
    <div class="review">
      <div class="rate">
        <Rate :rate="rate"></Rate>
      </div>
      <div class="review-header">
        <h4>
          {{ header }}
        </h4>
      </div>
      <div class="review-content">
        <p>
          <slot></slot>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.review-card {
  //display: flex;
  //flex-direction: column;
  //align-items: center;

  color: #373737;
  background: #fff;
  border-radius: 1.5rem;
  padding: 1.375rem 1.5rem;

  text-align: left;
  font-weight: 400;

  .icon {
    margin-bottom: 1.25rem;
    overflow: hidden;
    border-radius: 1rem;
    min-height: 160px;
    //height: 14rem;
    img {
      width: 100%;
      max-height: 17rem;
      pointer-events: none;

      @media (max-width: 670px) {
        width: 23rem;
      }
    }
  }

  .rate {
    margin-bottom: 1.25rem;
  }

  .review-header {
    font-size: 1.25rem;

    margin-bottom: 0.75rem;
  }

  .review-content {
    p {
      font-size: 1.2rem;
    }
  }

  //&.active {
  //  .icon {
  //    height: unset;
  //  }
  //  .review {
  //    opacity: 0;
  //  }
  //}
}
</style>
