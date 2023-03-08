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
}
.brush {
    margin-left: -2.2rem;
    user-select: none;
}
    .discount-slogan {
        font-style: normal;
        font-weight: 500;
        font-size: 0.95rem;
        line-height: 1rem;
        text-transform: uppercase;
        position: absolute;
        top: 40%;
        left: 4.5%;
        .fat {
            font-weight: 700;
        }
    }
</style>
