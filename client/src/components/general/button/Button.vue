<script setup lang="ts">
import { QBtn } from 'quasar';

/** ****************************************************************************
 *  @param href - отвечает за ссылку перехода
 *  @param volumetric - включает/выключает тень
 *  @param redirect - включает/выключает переход по ссылке
 ******************************************************************************/
const props = defineProps({
    href: String,
    volumetric: {
        type: Boolean,
        default: true,
    },
    redirect: {
        type: Boolean,
        default: true,
    },
    loading: {
        type: Boolean,
        default: false
    }
});

const emits = defineEmits<{
    (e: "click"): void;
}>();

function click(e: Event) {
    emits('click');
    if (!props.redirect) e.preventDefault();
}
</script>

<template>
    <QBtn @click="click" :href="props.href ?? '#'" class="button">
        <slot />
    </QBtn>
</template>

<style scoped lang="scss">
$base-gradient: linear-gradient(180deg, #feda82 0%, #fec338 100%);
$click-gradient: linear-gradient(180deg, #f4dea6 0%, #fbce63 100%);
$text-shadow: 0px 0.0625rem 0px rgba(254, 225, 154, 0.7);
$shadow-color: #da9d22;
$base-shadow: 0px 0.1875rem 0px 0px $shadow-color;
$height: 3.75rem;

.button {
    display: inline-block;
    box-sizing: border-box;
    padding: calc($height / 2) 3.25rem;
    text-align: center;
    // height: $height;
    width: max-content;

    border-radius: 0.875rem;
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
    transform: translateY(2px);
}

a.button {
    text-decoration: none;
    outline: none;
}
</style>
