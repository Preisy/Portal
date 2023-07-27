<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import { computed } from "@vue/reactivity";
import isVisible from "@/utils/isVisible";
import { throttle } from "quasar";
import Rellax from 'rellax'
// import throttle from "lodash"

interface BgAttachImgProps {
    img_src: string,
    ref_element?: HTMLElement
    modifier?: number,
}
const props = withDefaults(defineProps<BgAttachImgProps>(), {
    ref_element: () => document.body,
    modifier: 0.25
});




let rellax: unknown
onMounted(() => {
    document.documentElement.scrollTop = 0
    rellax = new Rellax('.rellax', {
        speed: -2,
        center: true,
        wrapper: null,
        round: true,
        vertical: true,
        horizontal: false,
    })
})

</script>

<template>
    <img ref="element" class="bg_img rellax" :src="img_src" alt="" />
</template>

<style scoped lang="scss">
.bg_img {
    display: block;
    opacity: 0.95;
    filter: blur(0.175rem);
    user-select: none;
}
</style>
