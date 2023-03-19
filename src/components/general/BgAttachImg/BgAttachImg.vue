<script setup lang="ts">
import { ref } from "vue";
import { computed } from "@vue/reactivity";
import isVisible from "@/utils/isVisible";

const props = defineProps<{
    img_src: string,
    ref_element: HTMLElement,
    modifier?: number,
}>();

const currentScroll = ref(window.scrollY);
const parallax = computed(() => {
    if (!props.modifier) return;
    return `transform: translateY(${currentScroll.value * props.modifier}px)`;
});
const element = ref<HTMLElement>();

window.addEventListener("scroll", () => {
    if (isVisible(element.value))
        currentScroll.value = Math.max(
            0,
            window.scrollY - props.ref_element?.scrollHeight
        );
});
</script>

<template>
    <img ref="element" class="bg_img" :style="parallax" :src="img_src" alt="" />
</template>

<style scoped lang="scss">
.bg_img {
    opacity: 0.95;
    filter: blur(0.175rem);
    user-select: none;
}
</style>
