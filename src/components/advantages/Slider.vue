<script setup lang="ts">
import type { Nullable } from "@/types/types";
import { computed } from "@vue/reactivity";
import { onMounted, ref, watch } from "vue";

const props = defineProps({
    position: {
        type: Number,
        default: 0,
    },
});

const max = ref(0);

const content = ref<Nullable<HTMLElement>>();
const controls_left = ref<Nullable<HTMLElement>>();
const controls_right = ref<Nullable<HTMLElement>>();

const translate = computed(() => {
    if (!max) return;
    
    const val = (props.position % max.value) * 100;
    console.log(val);
    return `transform: translateX(${val}%)`;
});

onMounted(() => {
    if (content.value) max.value = content.value?.childElementCount;
});
</script>

<template>
    <div class="slider">
        <div class="slider-holder">
            <div ref="content" class="slider-content" :style="translate">
                <slot></slot>
            </div>
        </div>

        <div class="slider-controls">
            <slot name="slider-controls">
                <slot ref="controls_left" name="slider-control-left"></slot>
                <slot ref="controls_right" name="slider-control-right"></slot>
            </slot>
        </div>
    </div>
</template>

<style scoped lang="scss">
.slider {
    .slider-holder {
        width: 100%;
        overflow: hidden;

        .slider-content {
            width: fit-content;
        }
    }
}
</style>
