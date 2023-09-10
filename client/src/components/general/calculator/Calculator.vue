<script setup lang="ts">
import { ref } from "vue";
import Button from "@/components/general/button/Button.vue";
import { QInput, QBtn } from "quasar";
import QuasarRange from "./QuasarRange.vue";
import { sendData } from "@/services/calculator.service";

const phoneNumber = ref("");
const ceilArea = ref(0);
const cornersCount = ref(0);
const lightersCount = ref(0);

const isButtonDisabled = ref<boolean>(false);
const buttonCooldownInMs = 5000;
const onclick = () => {
    if(isButtonDisabled.value) return;

    isButtonDisabled.value = true;
    setTimeout(()=>isButtonDisabled.value = false, buttonCooldownInMs);

    sendData({
        ceilArea: ceilArea.value,
        cornersCount: cornersCount.value,
        lightersCount: lightersCount.value,
        phonenumber: phoneNumber.value
    });
};
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
                    v-model="ceilArea"
                    :min="0"
                    :max="200"></QuasarRange>
            </div>
            <div class="setting-line">
                <span class="description">Количество углов</span>
                <QuasarRange
                    v-model="cornersCount"
                    :min="0"
                    :max="10"></QuasarRange>
            </div>
            <div class="setting-line">
                <span class="description">Количество светильников</span>
                <QuasarRange
                    v-model="lightersCount"
                    :min="0"
                    :max="10"></QuasarRange>
            </div>
        </div>
        <div class="result">
            <span class="description">Цена для вас</span>
            <span class="result-value">
                12345
                <div class="highlight" />
            </span>
        </div>
        <div class="contact">
            <QInput
                dense
                class="input"
                v-model="phoneNumber"
                ref="inputEl"
                placeholder="Ваш номер телефона"
                mask="# (###) ###-##-##">
                <template v-slot:prepend>
                    <q-icon name="phone" />
                </template>
            </QInput>
        </div>
        <Button class="button" @click="onclick" :loading="isButtonDisabled">
            отправить заявку
        </Button>
    </div>
</template>

<style scoped lang="scss">
$calculator-width: 37.5rem;

.calculator-holder {
    background: var(--color-white);
    width: $calculator-width;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    align-items: center;

    border-radius: 0.9rem;

    padding: 0 calc($calculator-width / 10);
}

.input {
    font-size: 1rem;
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
        top: calc(-1 * $size / 2);
        user-select: none;
    }
}

.settings {
    width: 100%;
    position: relative;
    z-index: 1;

    .setting-line {
        margin-bottom: 0.8rem;
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
        z-index: 1;

        font-size: 1.75rem;
        font-weight: 600;
        margin-left: auto;
        margin-right: auto;

        &::after {
            content: "₽";
            font-size: 1.25rem;
        }

        .highlight {
            position: absolute;
            width: 9.5rem;
            height: 4.5rem;
            left: -1.5rem;
            top: -0.5rem;

            z-index: -1;

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
        border: 0.0625rem solid #e5e5e5;
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
