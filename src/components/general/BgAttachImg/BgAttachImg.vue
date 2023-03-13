<script setup lang="ts">
import { ref } from "vue";
import { computed } from "@vue/reactivity";

const props = defineProps({
    img_src: { type: String, required: true },
    ref_element: {
        type: HTMLElement,
        default: document.body,
    },
    modifier: { 
        type: Number,
        default: 0.25
    },
});

const currentScroll = ref(window.scrollY);
const parallax = computed(() => {
    if(!props.modifier) return;
    return `transform: translateY(${currentScroll.value * props.modifier}px)`;
});

window.addEventListener("scroll", () => {
    currentScroll.value = Math.max(
        0,
        window.scrollY - props.ref_element?.scrollHeight
    );
});
</script>

<template>
    <img class="bg_img" :style="parallax" :src="img_src" alt="" />
</template>

<style scoped lang="scss">
.bg_img {
    opacity: 0.95;
    filter: blur(3.5px);
    user-select: none;
}
</style>
