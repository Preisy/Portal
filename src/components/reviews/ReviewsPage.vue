<script setup lang="ts">
import {ref} from "vue";
import ReviewsPageControls from "@/components/reviews/ReviewsPageControls.vue";
import ReviewCards from "@/components/reviews/ReviewCards.vue";
import {reviewCardsData} from "./ReviewCardsData"

let index = ref(0)

let wait = false;

function change(num: -1 | 1) {
  index.value = (index.value + num) % reviewCardsData.length;
  if (wait) return;
  wait = true;
  setTimeout(() => {
    wait = false
  }, 3000)
}

setInterval(() => {
  if (!wait)
    index.value += 1
}, 3000)

</script>

<template>
  <div class="reviews-page">
    <div class="structure">
      <div class="description">
        <h3><span class="highlighted">Отзывы</span> клиентов</h3>
      </div>

      <ReviewCards :index="index"></ReviewCards>

      <ReviewsPageControls @click:left="change(-1)" @click:right="change(1)"/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.reviews-page {
  background: #1c1c1c;
  text-align: center;

  padding-top: 6rem;

  .structure {
    padding-top: 8rem;
    padding-bottom: 6rem;
  }

  .description {
    color: #fff;
    margin-bottom: 3.5rem;
    position: relative;
    z-index: 1;

    .highlighted {
      background: linear-gradient(
              86.98deg,
              #feda82 22.54%,
              #fec338 105.96%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;

      &::selection {
        -webkit-text-fill-color: #fff;
      }
    }
  }
}
</style>
