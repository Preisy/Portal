<script setup lang="ts">
import { ref } from "vue";
import { computed } from "@vue/reactivity";
const props = defineProps({
    img_src: { type: String, required: true },
    ref_element: {
        type: HTMLElement,
        default: document.body
    }
});

const currentScroll = ref(window.scrollY);
const parallax = computed(() => {
    const modifier = 0.4;
    return `transform: translateY(${currentScroll.value * modifier}px)`;
});

window.addEventListener("scroll", () => {
    currentScroll.value = window.scrollY - props.ref_element?.offsetTop;
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
