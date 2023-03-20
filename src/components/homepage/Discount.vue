<script setup lang="ts">

</script>

<template>
    <div class="discount">
        <img src="../../assets/svg/brush.svg" alt="" class="brush">
        <p class="discount-slogan">Натяжные потолки сегодня <span class="fat">дешевле на 25%</span></p>
    </div>
</template>

<style scoped lang="scss">
.discount {
    position: relative;
    margin-top: 2.5rem;
}

.brush {
    margin-left: -2.5rem;
    user-select: none;
    position: absolute;
    width: 70%;
    top: -1.8rem;
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
    .brush {
        width: 90%;
    }
}

@media (max-width: 400px) {
    .discount-slogan {
        text-align: center;
        font-size: 1.6rem;
        line-height: 1.4rem;
        
    }
    .brush {
        width: 37rem;
        margin-top: 0.82rem;
    }
}
</style>
