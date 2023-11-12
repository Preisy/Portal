<script setup lang="ts">
import ReviewCard from "@/components/reviews/ReviewCard.vue";
import {onMounted, onUnmounted, ref} from "vue";
import {PlacesFactory} from "@/components/reviews/PlacesFactory";
import {cards} from "./ReviewCardsData"
import type {Nullable} from "@/types/types";

const props = defineProps<{
  index: number
}>()

const placeholder = ref<HTMLDivElement>();
let reviews = ref<NodeListOf<HTMLDivElement>>();
let places = ref<Nullable<[number, number][]>>()
let phantoms = ref<NodeListOf<HTMLDivElement>>()

let placesFactory: Nullable<PlacesFactory>;
onMounted(() => {
  placesFactory = new PlacesFactory(placeholder.value!!, phantoms.value!!);
  places.value = placesFactory.getPlaces()
})
const resizeHandler = () => places.value = placesFactory!!.getPlaces()

onMounted(() => window.addEventListener("resize", resizeHandler))
onUnmounted(() => window.removeEventListener("resize", resizeHandler))

function position(num: number) {
  if (!placeholder.value) return '';
  const posIndex = (reviews.value!!.length + num + props.index!!) % reviews.value!!.length;
  const isShown = 0 <= posIndex && posIndex < places.value!!.length;
  if (!isShown) return 'display: none;'

  const place = places.value!![posIndex];
  return (
      `top: ${place[0]}px;` +
      `left: ${place[1]}px;`
  )
}
</script>

<template>
  <div ref="placeholder" class="placeholder">
    <div class="phantom" ref="phantoms" v-for="_ in 4"></div>

    <ReviewCard
        :rate="5"
        v-for="(card, i) in cards"
        ref="reviews"
        :style="position(i)"
        class="review"
        :img_src="card.imgSrc"
        :header="card.header">
      {{ card.message }}
    </ReviewCard>
  </div>
</template>

<style scoped lang="scss">
.placeholder {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 2.4rem;
  justify-content: space-between;
  justify-items: center;

  width: fit-content;
  margin: 0 auto 1.5rem;

  position: relative;
  overflow: hidden;

  //--review-width: 34.8rem;
  --review-width: 29rem;
  --review-height: 35rem;

  .phantom {
    width: var(--review-width);
    height: var(--review-height);
  }

  .review {
    position: absolute;
    width: var(--review-width);
    transition: 0.6s;
    //transition: 3s;
  }

  .up-bound {
    position: absolute;
    top: -36rem;
    right: 0;
  }

  .pos-lt {
    grid-area: 1 / 1 / 2 / 2;
  }

  .pos-rt {
    grid-area: 1 / 2 / 2 / 3;
  }

  .pos-lb {
    grid-area: 2 / 1 / 3 / 2;
  }

  .pos.rb {
    grid-area: 2 / 2 / 3 / 3;
  }

  .right-bound {
    position: absolute;
    bottom: 0;
    right: -34rem;
  }
}
</style>