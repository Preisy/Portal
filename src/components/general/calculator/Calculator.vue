<script setup lang="ts">
import PrettyRange from "./PrettyRange.vue";
import Button from "@/components/general/Button.vue";
import CalculatorRangeDeclarative from "@/components/general/calculator/CalculatorRangeDeclarative.vue";
</script>

<template>
    <div class="calculator-holder">
        <div class="head">
            <span>Расчет стоимости</span>
            <img src="@/assets/images/calculator/calculator.png" alt="" />
        </div>
        <div class="settings">
            <div class="setting-line">
                <span class="description">Imperatively</span>
                <PrettyRange :min="0" :max="200"></PrettyRange>
            </div>

            <div class="setting-line">
              <span class="description">Declarative</span>
              <CalculatorRangeDeclarative :min="0" :max="200"></CalculatorRangeDeclarative>
            </div>
        </div>
        <div class="result">
            <span class="description">Цена для вас</span>
            <span class="result-value">12345</span>
        </div>
        <div class="contact">
            <!-- TODO: pattern-matching для инпута -->
            <input placeholder="Ваш номер телефона" type="tel" />
        </div>
        <Button class="button" href="#">отправить заявку</Button>
    </div>
</template>

<style scoped lang="scss">
$calculator-width: 440px;
$calculator-height: 520px;
.calculator-holder {
    background: var(--color-white);
    width: $calculator-width;
    height: $calculator-height;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    align-items: center;

    border-radius: 14px;

    padding: 0px calc($calculator-width / 10);
}

.head {
    $head-height: 60px;
    position: relative;
    width: 100%;

    span {
        font-weight: 700;
        font-size: 24px;
        line-height: $head-height;
        vertical-align: middle;
    }
    img {
        $rotation-matrix: matrix(-0.71, 0.71, 0.71, 0.71, 0, 0);
        $size: 80px * 1.41;

        position: absolute;
        width: 112.8px;
        height: 112.8px;
        transform: matrix(-0.71, 0.71, 0.71, 0.71, 0, 0);
        top: -50%;
    }
}

.settings {
    width: 100%;
    position: relative;
    z-index: 1;

    .setting-line {
        margin-bottom: 20px;
    }
    .description {
        font-weight: 600;
        font-size: 16px;
    }
}

.result {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-bottom: 20px;

    span {
        font-weight: 600;
    }
    .result-value {
        position: relative;

        font-size: 28px;
        margin-left: auto;
        margin-right: auto;

        &::after {
            content: "₽";
            font-size: 20px;
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
    margin-bottom: 20px;

    input {
        height: 60px;
        width: 100%;

        background: #f6f6f6;
        border: 1px solid #e5e5e5;
        border-radius: 13px;

        font-size: 18px;
        &::placeholder {
            font-weight: 400;

            color: #ababab;
        }
    }
}

.button {
    width: 100%;
}
</style>
