<script setup lang="ts">
    import Calculator from '../general/calculator/Calculator.vue';
import Arrow from '../icons/Arrow.vue';
    import Application from './Application.vue';
</script>

<template>
    <div class="final-bg">
        <div class="structure">
            <div class="second-calc-section">
                <div class="apply">
                    <div class="circle">
                        <div class="add-circle">
                            <p class="circle-text">Скорее <br> заполняй <br> заявку!</p>
                        </div>
                    </div>
                    <div class="application-block">
                        <Application class="application"></Application>
                    </div>
                    <Arrow class="arrow"></Arrow>
                </div>
                <div class="second-calc">
                    <Calculator class="calc"></Calculator>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.final-bg {
    background: url(../../assets/images/final-block/final-bg.png);
    background-repeat: no-repeat;
    background-size: cover;
}
.structure {
    padding-top: 3.2rem;
}
.second-calc-section {
    position: relative;
    display: flex;
    justify-content: space-between;
}
.apply {
    width: 13.5rem;
}
.circle {
    position: absolute;
    width: 9rem;
    height: 9rem;
    border-radius: 50%;
    background-color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 20%;
    right: 68.5%;
    z-index: 1;
    .add-circle {
        width: 7.5rem;
        height: 7.5rem;
        border-radius: 50%;
        border: 0.15rem solid #FEDA82;
        display: flex;
        justify-content: center;
        align-items: center;
        .circle-text {
            font-weight: 600;
            font-size: 1.2rem;
            line-height: 1.4rem;
            text-align: center;
        }
    }
}

.application {
    position: absolute;
    top: 43%;
    right: 66.5%;
    width: 12rem;

}
.arrow {
    position: absolute;
    bottom: 10%;
    width: 10.5rem;
    transform: scale(-1, 0.75);
    top: 62%;
    right: 55%;
}

    .calc {
        width: 27rem;
        margin-right: 13.5rem;
    }
</style>
