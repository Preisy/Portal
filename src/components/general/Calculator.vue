<script setup lang="ts">
import Button from "./Button.vue";
</script>

<template>
    <div class="calculator-holder">
        <div class="head">
            <span>Рассчет стоимости</span>
            <img src="../../assets/images/calculator/calculator.png" alt="" />
        </div>
        <div class="settings"></div>
        <div class="result"></div>
        <div class="contact"></div>
        <Button href="#">отправить заявку</Button>
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

    padding: 0px $calculator-width/10;
}

.head {
    position: relative;

    span {
        font-weight: 700;
        font-size: 24px;
    }
    img {
        $rotation-matrix: matrix(-0.71, 0.71, 0.71, 0.71, 0, 0);
        $size: 80px * 1.41;

        position: absolute;
        width: $size;
        height: $size;
        transform: $rotation-matrix;
    }
}
</style>
