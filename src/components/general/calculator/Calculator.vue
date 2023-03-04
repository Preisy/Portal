<script setup lang="ts">
import { ref, watch } from "vue";

import PrettyRange from "./PrettyRange.vue";
import Button from "@/components/general/Button.vue";
import CalculatorRangeDeclarative from "@/components/general/calculator/CalculatorRangeDeclarative.vue";
import type { Nullable } from "@/types/Types";

const inputEl = ref<Nullable<HTMLInputElement>>();
const inputVal = ref("");
watch(inputVal, (newVal, oldVal)=>{
    inputVal.value = inputVal.value.replace(/\D/, "");
})
</script>

<template>
    <div class="calculator-holder">
        <div class="head">
            <span>Расчет стоимости</span>
            <img src="@/assets/images/calculator/calculator.png" alt="" />
        </div>
        <div class="settings">
            <div class="setting-line">
                <span class="description">Площадь потолка</span>
                <CalculatorRangeDeclarative :min="0" :max="200"></CalculatorRangeDeclarative>
            </div>
            <div class="setting-line">
                <span class="description">Количество углов</span>
                <CalculatorRangeDeclarative :min="0" :max="10" :scale="10"></CalculatorRangeDeclarative>
            </div>
            <div class="setting-line">
                <span class="description">Количество светильников</span>
                <CalculatorRangeDeclarative :min="0" :max="10" :scale="10"></CalculatorRangeDeclarative>
            </div>
        </div>
        <div class="result">
            <span class="description">Цена для вас</span>
            <span class="result-value">12345</span>
        </div>
        <div class="contact">
            <!-- TODO: pattern-matching для инпута -->
            <input v-model="inputVal" ref="inputEl" placeholder="Ваш номер телефона" type="tel" />
        </div>
        <Button class="button" href="#">отправить заявку</Button>
    </div>
</template>

<style scoped lang="scss">
$calculator-width: 440px;
.calculator-holder {
    background: var(--color-white);
    width: $calculator-width;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    align-items: center;

    border-radius: 0.9rem;

    padding: 0px calc($calculator-width / 10);
}

.head {
    $head-height: 4rem;
    position: relative;
    width: 100%;

    span {
        font-weight: 700;
        font-size: 1.5rem;
        line-height: $head-height;
        vertical-align: middle;
    }
    img {
        $rotation-matrix: matrix(-0.71, 0.71, 0.71, 0.71, 0, 0);
        $size: 5rem * 1.41;

        position: absolute;
        width: $size;
        height: $size;
        transform: matrix(-0.71, 0.71, 0.71, 0.71, 0, 0);
        top: -50%;
    }
}

.settings {
    width: 100%;
    position: relative;
    z-index: 1;

    .setting-line {
        margin-bottom: 1.25rem;
    }
    .description {
        font-weight: 600;
        font-size: 1rem;
    }
}

.result {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-bottom: 1.25rem;

    span {
        font-weight: 600;
    }
    .description{
        font-size: 1.25rem
    }
    .result-value {
        position: relative;

        font-size: 1.75rem;
        margin-left: auto;
        margin-right: auto;

        &::after {
            content: "₽";
            font-size: 1.25rem;
        }
        // @todo:
        // &::before{
        //     content: url("../../assets/images/calculator/result_highlight.svg");
        //     position: absolute;
        // }
    }
}

.contact {
    width: 100%;
    margin-bottom: 1.25rem;

    input {
        height: 3.6rem;
        width: 100%;

        background: #f6f6f6;
        border: 1px solid #e5e5e5;
        border-radius: 0.9rem;
        box-sizing: border-box;
        padding: 1rem;

        font-size: 1rem;
        &::placeholder {
            font-weight: 400;

            color: #ababab;
        }
    }
}

.button {
    width: 100%;
    margin-bottom: 2.5rem;
}
</style>
