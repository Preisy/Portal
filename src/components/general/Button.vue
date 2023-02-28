<script setup lang="ts">
const props = defineProps({
    href: String,
});
</script>

<template>
    <a :href="props.href ? props.href : '#'" class="button">
        <slot />
    </a>
</template>

<style scoped lang="scss">
$base-gradient: linear-gradient(180deg, #feda82 0%, #fec338 100%);
$click-gradient: linear-gradient(180deg, #f4dea6 0%, #fbce63 100%);
$shadow-color: #da9d22;
$base-shadow: 0px 3px 0px 0px $shadow-color;
$height: 60px;

.button {
    box-sizing: border-box;
    padding: calc($height / 2) 40px;
    text-align: center;
    height: $height;
    width: max-content;

    border-radius: 14px;
    box-shadow: $base-shadow;
    background: $base-gradient;

    color: var(--color-grey-text);
    font-size: 12px;
    font-weight: 800;
    text-transform: uppercase;

    transition: all ease-out 0.2s;
    line-height: 0;
}

.button:hover {
    box-shadow: $base-shadow, 0px 0px 20px 0px #ffcb52;
}

.button:active {
    background: $click-gradient;
    box-shadow: $base-shadow;
}

a.button {
    text-decoration: none;
    outline: none;
}
</style>
