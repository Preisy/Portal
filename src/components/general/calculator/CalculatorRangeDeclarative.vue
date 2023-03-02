<script setup lang="ts">
import {computed, ref} from "vue";
import type {Nullable} from "@/types/Types";

const props = defineProps({
  min: Number,
  max: Number,
});

const inputRangeEl = ref<Nullable<HTMLElement>>();
const min = props.min ? props.min : 0;
const max = props.max ? props.max : 10;
const currentValueReactive = ref((min + max) / 2);

let offset = computed(() => {
  if (!inputRangeEl.value) return 0;
  const newPos = (inputRangeEl.value!!.clientWidth / (max - min) * currentValueReactive.value);
  return Math.round(newPos * 10) / 10;
})
let gradient = computed(() => {
  const percentage = (currentValueReactive.value / max) * 100;
  return `background: linear-gradient(90deg, #fec640 ${percentage}%, #d9d9d9 ${percentage}%)`;
})
</script>

<template>
  <div class="range-holder">
    <input ref="inputRangeEl"
           class="pretty-range"
           type="range"
           :min="min"
           :max="max"
           v-model="currentValueReactive"
           :style="gradient"/>
    <div class="value-borders">
      <span class="min" ref="valueBordersStart">{{ min }}</span>
      <span class="max" ref="valueBordersEnd">{{ max }}</span>
      <span ref="currentValueEl"
            class="current-value"
            :style="`left: ${offset}px`">{{ currentValueReactive }}</span>
    </div>
  </div>
</template>


<style scoped lang="scss">
/*
    Взято отсюда, если что
    https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/
*/

$thumb-size: 10px;
$range-color: #fec640;
$inactive-color: #d9d9d9;

@mixin track() {
  background: #fdc640;
  border: 0;
  border-radius: 8.5px;
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

input[type="range"]:not(.test) {
  @include track();
  appearance: none;
  -webkit-appearance: none;

  &::-webkit-slider-thumb {
    @include thumb();
    -webkit-appearance: none;
  }

  &::-ms-thumb,
  &::-moz-range-thumb{
    @include thumb();
  }
}

@supports (-ms-ime-align: auto) {
  input[type="range"] {
    margin: 0;
  }
}

.test {
  margin-top: 10px;
}

.value-borders {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  span {
    color: $inactive-color;
    display: block;
    font-weight: 400;
    font-size: 14px;
  }

  .current-value {
    color: $range-color;
    font-weight: 600;
    position: absolute;
  }
}
</style>
