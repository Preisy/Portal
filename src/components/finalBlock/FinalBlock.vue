<script setup lang="ts">
    import Calculator from '../general/calculator/Calculator.vue';
    import Apply from './Apply.vue';
</script>

<template>
    <div class="final-bg">
        <div class="structure">
            <div class="second-calc-section">
                <div class="apply">
                    <Apply></Apply>
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
    margin: 0 13rem;
}
    .calc {
        width: 27rem;
    }
</style>
