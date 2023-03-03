<script setup lang="ts">
defineProps({
    imgSrc: {
        type: String,
        required: true
    },
})
</script>

<template>
    <div class="advantage-card">
        <div class="img-wrapper">
            <img :src="imgSrc" alt="">
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
    width: 340px;
    
    box-sizing: border-box;
    padding: 1.2rem 3rem;
    border-radius: 1.4rem;

    background: #2B2B2B;
    color: #fff;
    
    text-align: center;


    .img-wrapper{
        img{
            height: 8rem;
        }
    }
    .short-desc{
        font-size: 1.125rem;
        font-weight: 600;
        margin-bottom: 0.9rem;

        white-space: nowrap;
    }
    .long-desc{
        font-size: 1rem;
    }
}
</style>