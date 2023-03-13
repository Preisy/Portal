<script setup lang="ts">
import {computed, ref, watch} from "vue";
import type {Nullable} from "@/types/types";

const props = defineProps({
  min: {
    type: Number,
    default: 0
  },
  max: {
    type: Number,
    default: 10
  },
  scale: {
    type: Number,
    default: 1
  }
});

const inputRangeEl = ref<Nullable<HTMLElement>>();
const minEl = ref<Nullable<HTMLElement>>();
const maxEl = ref<Nullable<HTMLElement>>();
const currentValueReactive = ref((props.min + props.max) / 2);

let offset = computed(() => {
  if (!minEl.value || !maxEl.value) return 0;
  const width = maxEl.value?.getBoundingClientRect().left - minEl.value?.getBoundingClientRect().left;
  const newPos = (width / (props.max - props.min) * currentValueReactive.value / props.scale);
  return Math.round(newPos * 10) / 10;
})
let gradient = computed(() => {
  const percentage = (currentValueReactive.value / props.max / props.scale) * 100;
  return `background: linear-gradient(90deg, #fec640 ${percentage}%, #d9d9d9 ${percentage}%)`;
})
</script>

<template>
  <div class="range-holder">
    <input ref="inputRangeEl"
           class="pretty-range"
           type="range"
           :min="min"
           :max="max*scale"
           v-model="currentValueReactive"
           :style="gradient"/>
    <div class="value-borders">
      <span class="min" ref="minEl">{{ min }}</span>
      <span class="max" ref="maxEl">{{ max }}</span>
      <span ref="currentValueEl"
            class="current-value"
            :style="`left: ${offset}px`">{{ Math.round(currentValueReactive / scale) }}</span>
    </div>
  </div>
</template>


<style scoped lang="scss">
/*
    Взято отсюда, если что
    https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/
*/

$thumb-size: 0.8rem;
$range-color: #fec640;
$inactive-color: #d9d9d9;

@mixin track() {
  background: #fdc640;
  border: 0;
  border-radius: 0.8rem;
  width: 100%;
  height: 3px;
  cursor: pointer;
}

@mixin thumb {
  width: $thumb-size;
  height: $thumb-size;
  background: #fec640;
  border: 0;
  border-radius: 100%;
  cursor: pointer;
}

input[type="range"] {
  @include track();
  appearance: none;
  -webkit-appearance: none;

  &::-webkit-slider-thumb {
    @include thumb();
    -webkit-appearance: none;
  }

  &::-ms-thumb{
    @include thumb();
  }
  &::-moz-range-thumb{
    @include thumb();
  }
}

@supports (-ms-ime-align: auto) {
  input[type="range"] {
    margin: 0;
  }
}

.value-borders {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 0.2rem;

  span {
    color: $inactive-color;
    display: block;
    font-weight: 400;
    font-size: 0.9rem;
  }

  .current-value {
    color: $range-color;
    font-weight: 600;
    position: absolute;
  }
}
</style>
