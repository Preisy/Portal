<script setup lang="ts">
defineProps({
    imgSrc: {
        type: String,
        required: true,
    },
});
</script>

<template>
    <div class="advantage-card">
        <div class="img-wrapper">
            <img :src="imgSrc" alt="" />
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
.advantage-card {
    --transition: transform ease-in-out 0.125s;
    width: 340px;
    box-sizing: border-box;
    padding: 1.2rem 3.5rem;
    border-radius: 1.4rem;
    background: #2b2b2b;
    color: #fff;
    text-align: center;
    transition: var(--transition);

    &:hover{
        transform: scale(1.05);
        img{
            transform: translateY(-5px) scale(1.1);
        }
    }

    .img-wrapper {
        margin-top: 0.5rem;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 0.9rem;
        img {
            height: 7rem;
            transition: var(--transition);
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
    }
}
</style>
