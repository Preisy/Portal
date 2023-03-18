<script setup lang="ts">
import Calculator from '../general/calculator/Calculator.vue';
import Apply from './Apply.vue';
import { ref, computed } from "vue";
import type { Nullable } from '@/types/types';
import { inject } from 'vue';
import { onMounted } from 'vue'
const footerHeight = ref();
const footer = ref<HTMLElement>()
onMounted(() => {
    footer.value = document.querySelector(".bg-footer-wrapper") as HTMLElement??undefined;
    footerHeight.value = footer.value?.getBoundingClientRect().height;
})

const FoorerHeight = inject('footerHeight')

const root = ref<Nullable<HTMLElement>>();
const currentScroll = ref(window.scrollY);
const backgroundHeight = ref<Nullable<DOMRect>>()
window.addEventListener("scroll", () => {
    footerHeight.value = footer.value?.getBoundingClientRect().height;
    currentScroll.value = window.scrollY;
    backgroundHeight.value = root.value?.getBoundingClientRect()
});

const onScroll = computed(() => {
    // console.log(footerHeight.value);
    if (backgroundHeight.value && footerHeight.value)
        return `background-position-y:${(window.innerHeight - backgroundHeight.value?.bottom - 1.2*(footerHeight.value)) * 0.3}px`;

});
</script>

<template>
    <div ref="root" class="final-bg" :style="onScroll">
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
    background-size: 105% 107%;
}

.structure {
    position: relative;
    padding-top: 3.2rem;
}

.second-calc-section {
    display: flex;
    justify-content: space-between;
    width: 65%;
    margin: 0 auto;
}

.calc {
    width: 27rem;
}
</style>
