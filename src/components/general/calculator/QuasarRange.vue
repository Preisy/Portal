<script setup lang="ts">
import { ref, watch, computed } from "vue";
import { QSlider } from "quasar";

const props = defineProps({
    modelValue: {
        type: Number,
        required: true,
    },
    min: {
        type: Number,
        required: true,
    },
    max: {
        type: Number,
        required: true,
    },
});
const emit = defineEmits(['update:modelValue'])

const value = computed({
    get() {
        return props.modelValue;
    },
    set(value) {
        emit("update:modelValue", value);
    },
});
</script>

<template>
    <QSlider
        class="slider"
        v-model="value"
        :min="min"
        :max="max"
        color="calculator"
        thumb-size="1.125rem"
        track-size="0.375rem"
        marker-labels
        label-always
        switch-label-side>
        <template #marker-label-group="scope">
            <p
                class="marker min"
                :class="scope.markerMap[min].classes"
                :style="scope.markerMap[min].style.all">
                {{ min }}
            </p>
            <p
                class="marker max"
                :class="scope.markerMap[max].classes"
                :style="scope.markerMap[max].style.all">
                {{ max }}
            </p>
        </template>
    </QSlider>
</template>

<style scoped lang="scss">
$inactive-color: #d9d9d9;
.slider {
    font-family: var(--font-family);
    font-size: 1rem;
    .marker {
        color: $inactive-color;
        display: block;
        font-weight: 400;
    }
    .current-value {
        font-weight: 600;
        position: absolute;
    }
}
</style>
