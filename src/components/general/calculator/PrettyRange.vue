<script setup lang="ts">
import { ref, onMounted } from "vue";
const props = defineProps({
    min: Number,
    max: Number,
});

const root = ref<HTMLElement | null>(null);
const currentValueEl = ref<HTMLElement | null>(null);
const valueBordersStart = ref<HTMLElement | null>(null);
const valueBordersEnd = ref<HTMLElement | null>(null);
const inputRangeEl = ref<HTMLElement | null>(null);

const min = props.min ? props.min : 0;
const max = props.max ? props.max : 10;
const currentValueReactive = ref((min + max) / 2);

// При монтаже считываем элементы
onMounted(() => {
    currentValueEl.value = root.value?.querySelector(
        ".current-value"
    ) as HTMLSpanElement;
    valueBordersStart.value = root.value?.querySelector(
        ".value-borders .min"
    ) as HTMLDivElement;
    valueBordersEnd.value = root.value?.querySelector(
        ".value-borders .max"
    ) as HTMLDivElement;
    inputRangeEl.value = root.value?.querySelector("input") as HTMLInputElement;

    update(currentValueReactive.value);
});

/**
 * @function rangeEventHolder
 * @param event - событие сдвига input:range
 * @brief на каждый сдвиг обновляем "неактивную" зону -> gradientRedraw()
 *                        обновляем выбранное число -> moveCurrentValue()
 */
function rangeEventHolder(event: Event): void {
    const { currentTarget } = event;
    const inputRange = currentTarget as HTMLInputElement;

    update(parseInt(inputRange.value));
}

function update(val: number): void {
    currentValueReactive.value = val;
    moveCurrentValue(val);

    if (!inputRangeEl.value) return;
    inputRangeEl.value.style.background = gradientRedraw(val);
}

/**
 * @function moveCurrentValue
 * @param val - текущее значение на input'e
 * @brief обновляет положение отображения текущего выбранного числа
 *
 * @note можно было бы без параметра, так как уже есть currentValueReactive
 */
function moveCurrentValue(val: number) {
    const start = valueBordersStart.value?.getBoundingClientRect().left;
    const end = valueBordersEnd.value?.getBoundingClientRect().left;
    // const inputWidth = inputRangeEl.value?.getBoundingClientRect().width;
    // const currentWidth = currentValueEl.value?.getBoundingClientRect().width;
    if (!start) return;
    if (!end) return;
    // if (!inputWidth) return;
    // if (!currentWidth) return;

    const newPos = ((end - start) * val) / max;
    // const newPos = (inputWidth * val) / max - currentWidth / 2 + 3;

    if (currentValueEl.value) currentValueEl.value.style.left = `${newPos}px`;
}

function gradientRedraw(val: number): string {
    const percentage = (val / max) * 100;
    return `linear-gradient(90deg, #fec640 ${percentage}%, #d9d9d9 ${percentage}%)`;
}
</script>

<template>
    <div ref="root" class="range-holder">
        <input
            class="pretty-range"
            type="range"
            id=""
            :min="min"
            :max="max"
            :value="currentValueReactive"
            @input="rangeEventHolder"
            @change="rangeEventHolder" />
        <div class="value-borders">
            <span class="min">{{ min }}</span>
            <span class="max">{{ max }}</span>
            <span class="current-value">{{ currentValueReactive }}</span>
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

input[type="range"] {
    @include track();
    appearance: none;
    -webkit-appearance: none;

    &::-webkit-slider-thumb {
        @include thumb();
        -webkit-appearance: none;
    }
    &::-ms-thumb {
        @include thumb();
    }
    &::-moz-range-thumb {
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
