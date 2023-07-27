<script setup lang="ts">
import { reviewCardsData } from './ReviewCardsData';
import ReviewCard from './ReviewCard.vue'
import { QCarousel, QCarouselControl, QBtn } from "quasar";
import WorkCard from '../doneWorks/WorkCard.vue';
import { ref } from 'vue';


let i = ref('0')


</script>

<template>
  <div class="content">
    <QCarousel ref="carousel" swipeable animated infinite navigation transition-prev="jump-right"
      transition-next="jump-left" v-model="i" class="slider">
      <template v-slot:navigation-icon="{ active, btnProps, onClick }">
        <q-btn v-if="active" class="btn active aaaf" size="lg" color="yellow" flat round dense @click="onClick" />
        <q-btn v-else class="btn notActive" size="sm" color="white" flat round dense @click="onClick" />
      </template>

      <template #default>
        <ReviewCard class="card" :img_src="card.imgSrc" :header="card.header" v-for="(card, i) in reviewCardsData" :name="`${i}`">
          {{ card.message }}
        </ReviewCard>
      </template>
    </QCarousel>
  </div>
</template>

<style scoped lang="scss">
@media (max-width: 670px) {
  .content {
    width: min-content;
    margin: 0 auto;

    .slider {
      height: auto !important;
      background-color: transparent;
    }

    .card {
      border-radius: 1.5rem;
    }

    .btn {
      border-radius: 100%;
      width: 0rem !important;
      margin: 0.5rem !important;
      padding: 0rem !important;

      &.active {
        background: linear-gradient(180deg, #d0a029 0%, #db9c09 100%);
        font-size: 0.35rem !important;
      }

      &.notActive {
        background: linear-gradient(180deg, #feda82 0%, #fec338 100%);
        font-size: 0.32rem !important;
      }
    }

    &:deep(.q-carousel__control) {
      // position: unset !important;
      // height: unset !important;
      // bottom: unset !important;
    }

    &:deep(.q-panel-parent) {
      overflow: unset;
    }

  }
}
</style>

