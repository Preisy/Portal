<script setup lang="ts">
import { ref } from "vue";
import { computed } from "@vue/reactivity";

const props = defineProps({
    href: String,
    volumetric: {
        type: Boolean,
        default: true,
    },
    delta: { type: Number, default: 0 },
    modelValue: Number,
});

const emit = defineEmits(["update:modelValue"]);
const val = ref(props.modelValue);
function click() {
    ///Todo: find better way to check
    if (val.value === undefined) return;

    val.value += props.delta;
    emit("update:modelValue", val.value);
}
</script>

<template>
    <a @click="click" :href="props.href ?? '#'" class="button">
        <slot />
    </a>
</template>

<style scoped lang="scss">
$base-gradient: linear-gradient(180deg, #feda82 0%, #fec338 100%);
$click-gradient: linear-gradient(180deg, #f4dea6 0%, #fbce63 100%);
$text-shadow: 0px 1px 0px rgba(254, 225, 154, 0.7);
$shadow-color: #da9d22;
$base-shadow: 0px 3px 0px 0px $shadow-color;
$height: 3.75rem;

.button {
    box-sizing: border-box;
    padding: $height / 2 3.25rem;
    text-align: center;
    height: $height;
    width: max-content;

    border-radius: 14px;
    box-shadow: $base-shadow;
    background: $base-gradient;

    color: var(--color-grey-text);
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    text-shadow: $text-shadow;

    transition: all ease-out 0.2s, transform 0.1s;
    line-height: 0;
}

.button:hover {
    box-shadow: $base-shadow, 0px 0px 20px 0px #ffcb52;
    $shadow-color: #ebb133;
}

.button:active {
    background: $click-gradient;
    box-shadow: $base-shadow;
    transform: translateY(5px);
}

a.button {
    text-decoration: none;
    outline: none;
}
</style>
