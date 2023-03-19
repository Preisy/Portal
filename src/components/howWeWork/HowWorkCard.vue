<script setup lang="ts">
defineProps<{
    num: number,
    img_src: string,
}>();
</script>

<template>
    <div class="how-we-work-card">
        <div class="circle-num">{{ num }}</div>
        <div class="card-body">
            <div class="image-holder">
                <img :src="img_src" alt="" />
            </div>
            <div class="description">
                <p><slot></slot></p>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.how-we-work-card {
    height: 100%;
    position: relative;

    .circle-num {
        --size: 4rem;
        --outline-size: 0.675rem;

        position: absolute;
        z-index: 1;
        top: calc(var(--size) / 2 * -1);
        left: calc(var(--size) / 2 * -1 + 0.5rem);

        width: calc(var(--size) - var(--outline-size));
        height: calc(var(--size) - var(--outline-size));
        border-radius: 100%;

        line-height: calc(var(--size) - var(--outline-size));
        text-align: center;

        border: 0.125rem solid #feda82;
        outline: var(--outline-size) solid #fff;
        background: #fff;

        font-size: 1.75rem;
        font-weight: 600;

        box-shadow: 0 0 1.125rem 0 #000;

        @media (max-width: 400px) {
            left: calc(50% - var(--size) / 2);
        }
    }
    .card-body {
        position: relative;
        .image-holder {
            img {
                height: 28rem;
            }
        }
        .description {
            text-align: left;
            position: absolute;
            bottom: 1.9rem;

            p {
                color: #fff;
                padding: 0 1.25rem;
                font-size: 1rem;
                font-weight: 500;
                line-height: 1.225rem;
            }
        }
    }
}
</style>
