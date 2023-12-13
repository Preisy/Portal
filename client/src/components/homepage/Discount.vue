<script setup lang="ts">
import brush from '@/assets/svg/brush.svg'
</script>

<template>
    <div class="discount">
        <img :src="brush" alt="" class="brush">
        <p class="discount-slogan">До нового года <span class="fat">дешевле на 25%</span></p>
    </div>
    <div class="discount last">
        <img :src="brush" alt="" class="brush">
        <p class="discount-slogan">+ <span class="fat">бесплатный</span> замер</p>
    </div>
</template>

<style scoped lang="scss">
.discount {
    position: relative;
    margin-top: 2.5rem;
    width: fit-content;
    zoom: 1.5;

    @media (max-width: $screen-md) {
        zoom: 1 !important;
    }

    &.last {
        .brush {
            width: 150%;
            scale: 1 1.4;
        }
        .discount-slogan{
            top:-0.05rem;
        }
    }
}

.brush {
    margin-left: -2.5rem;
    user-select: none;
    position: absolute;
    width: 135%;
    top: -1rem;
    z-index: 0;

}

.discount-slogan {
    position: relative;
    font-style: normal;
    font-weight: 500;
    font-size: 0.95rem;
    line-height: 1rem;
    text-transform: uppercase;
    z-index: 1;
    margin-left: 1rem;

    .fat {
        font-weight: 700;
    }
}

@media (max-width: 900px) {
    // .brush {
        // width: 90%;
    // }
}

@media (max-width: $screen-md) {
    .discount {
        margin-left: auto;
        margin-right: auto;
    }
    .discount.last {
        .brush{
            scale: 1;
            width: 30rem;
        }
        .discount-slogan{
            top: 1.5rem;
        }
    }

    .discount-slogan {
        text-align: center;
        font-size: 1.6rem;
        line-height: 1.4rem;
        width: 25rem;
        margin: 0 auto;
        
        
    }
    .brush {
        width: 30rem;
        transform: scaleY(1.8);
        margin-top: 0.82rem;
        // right: 5%;
        top: -35%;
    }
}
</style>
