<script setup lang="ts">
import { ref, watch } from "vue";

import PrettyRange from "./PrettyRange.vue";
import Button from "@/components/general/button/Button.vue";
import CalculatorRangeDeclarative from "@/components/general/calculator/CalculatorRangeDeclarative.vue";
import type { Nullable } from "@/types/Types";
import QuasarRange from "./QuasarRange.vue";

const inputEl = ref<Nullable<HTMLInputElement>>();
const inputVal = ref("");
watch(inputVal, (newVal, oldVal) => {
    inputVal.value = inputVal.value.replace(/\D/, "");
});

const ceilVal = ref(0);
watch(ceilVal, (newVal, oldVal) => {
    console.log(newVal);
});
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
                <!-- <CalculatorRangeDeclarative :min="0" :max="200"></CalculatorRangeDeclarative> -->
                <QuasarRange
                    v-model="ceilVal"
                    :min="0"
                    :max="200"></QuasarRange>
            </div>
            <div class="setting-line">
                <span class="description">Количество углов</span>
            </div>
            <div class="setting-line">
                <span class="description">Количество светильников</span>
            </div>
        </div>
        <div class="result">
            <span class="description">Цена для вас</span>
            <span class="result-value">12345</span>
        </div>
        <div class="contact">
            <!-- TODO: pattern-matching для инпута -->
            <input
                v-model="inputVal"
                ref="inputEl"
                placeholder="Ваш номер телефона"
                type="tel" />
            <img
                class="phone"
                src="@/assets/images/calculator/phone.svg"
                alt="" />
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

    padding: 0px $calculator-width / 10;
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
    .description {
        font-size: 1.25rem;
    }
    .result-value {
        position: relative;

        font-size: 1.75rem;
        font-size: 600;
        margin-left: auto;
        margin-right: auto;

        &::after {
            content: "₽";
            font-size: 1.25rem;
        }
        &::before {
            content: "";
            position: absolute;
            width: 9.5rem;
            height: 4.5rem;
            left: -1.5rem;
            top: -0.2rem;
            background: url(/src/assets/images/calculator/result_highlight.svg);
            background-size: contain;
            background-repeat: no-repeat;
        }
    }
}

.contact {
    width: 100%;
    margin-bottom: 1.25rem;
    position: relative;

    input {
        height: 3.6rem;
        width: 100%;

        background: #f6f6f6;
        border: 1px solid #e5e5e5;
        border-radius: 0.9rem;
        box-sizing: border-box;
        padding: 1rem;
        padding-left: 2.5rem;

        font-size: 1rem;

        &::placeholder {
            font-weight: 400;
            color: #ababab;
        }
    }
    .phone {
        --height: 1.25rem;
        position: absolute;
        left: 0.5rem;
        height: var(--height);
        top: calc(50% - var(--height) / 2);
    }
}

.button {
    width: 100%;
    margin-bottom: 2.5rem;
}
</style>
