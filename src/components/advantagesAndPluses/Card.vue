<script setup lang="ts">
defineProps({
    imgSrc: {
        type: String,
        required: true,
    }
});
</script>

<template>
    <div class="card-wrapper">
        <div class="img-wrapper">
            <img :src="imgSrc" alt="" />
            <slot name="shadow"></slot>
        </div>
        <div class="short-desc">
            <p><slot name="short"></slot></p>
        </div>
        <div class="long-desc">
            <p><slot name="long"></slot></p>
        </div>
    </div>
</template>

<style scoped lang="scss">
.card-wrapper {
    --transition: transform ease-in-out 0.2s;
    --img-height: 7rem;

    width: 23rem;
    box-sizing: border-box;
    padding: 1.2rem 3.5rem;
    border-radius: 1.4rem;
    text-align: center;
    transition: var(--transition);

    &:hover {
        transform: scale(1.05);
        img {
            transform: translateY(-5px);
        }
    }

    .img-wrapper {
        margin-top: 0.5rem;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 0.9rem;
        position: relative;
        img {
            height: var(--img-height);
            transition: var(--transition);
            position: relative;
            z-index: 1;
        }
        .img-shadow {
            position: absolute;
            height: var(--img-height);
            width: 70%;
            border-radius: 100%;
            background: #181818;
            opacity: 0.28;
            filter: blur(6px);
            top: 2rem;
            left: 12%;
            transform: rotateX(60deg);

            // Как правильно сделать тень?
        }
    }
    .short-desc {
        font-size: 1.125rem;
        font-weight: 600;
        margin-bottom: 1.1rem;

        white-space: nowrap;
    }
    .long-desc {
        font-size: 1rem;
        line-height: 1.25rem;
    }

    @media (max-width: 400px) {
        --img-height: 5rem;

        min-width: 15rem;
        width: 100%;
        padding: 0.2rem 3.5rem;
        grid-column: 1/1;
        grid-row: 1/1;

        .short-desc {
            font-size: 0.875rem;
        }
        .long-desc {
            font-size: 0.75rem;
        }

        &:hover {
        transform: unset;
        img {
            transform: unset;
        }
    }
    }
}
</style>
