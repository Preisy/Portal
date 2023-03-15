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
const emit = defineEmits(["update:modelValue"]);

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
        class="slider calc-slider"
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
                :style="scope.markerMap[min].style">
                {{ min }}
            </p>
            <p
                class="marker max"
                :class="scope.markerMap[max].classes"
                :style="scope.markerMap[max].style">
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

<style lang="scss">
.calc-slider {
    .q-slider__pin--h-switched:before {
        top: 0.125rem !important;
        border-bottom: 0.375rem solid currentColor !important;
    }
    .q-slider__label--h-switched {
        top: 0.4rem !important;
    }
    .q-slider__text-container {
        min-height: 1.5rem !important;
        padding: 0.125rem 0.5rem !important;
        border-radius: 0.25rem !important;
        .q-slider__text {
            font-size: 0.75rem !important;
        }
    }
    .q-slider__track-container--h {
        padding: 0.75rem 0 !important;
    }
    .q-slider__pin--h:before {
        border-left: 0.375rem solid transparent !important;
        border-right: 0.375rem solid transparent !important;
    }
    .q-slider__marker-labels-container {
        min-height: 2rem !important;
        min-width: 2rem !important;
    }
}
</style>
