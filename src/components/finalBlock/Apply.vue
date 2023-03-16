<script setup lang="ts">
import Arrow from '../icons/Arrow.vue';
import Application from './Application.vue';
</script>

<template>
  <div class="circle">
    <div class="add-circle">
      <p class="circle-text">Скорее <br> заполняй <br> заявку!</p>
    </div>
  </div>
  <div class="application-block">
    <Application class="application"></Application>
  </div>
  <Arrow class="arrow"></Arrow>
</template>

<style scoped lang="scss">
.circle {
  position: relative;
  width: 9rem;
  height: 9rem;
  border-radius: 50%;
  background-color: #FFFFFF;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 8rem;
  right: -2.5rem;
  z-index: 1;

  .add-circle {
    width: 7.5rem;
    height: 7.5rem;
    border-radius: 50%;
    border: 0.15rem solid #FEDA82;
    display: flex;
    justify-content: center;
    align-items: center;

    .circle-text {
      font-weight: 600;
      font-size: 1.2rem;
      line-height: 1.4rem;
      text-align: center;
    }
  }
}

.application {
  position: absolute;
  top: 45%;
  left: 1%;
  width: 13rem;
  height: 13rem;
  user-select: none;

}

.arrow {
  position: absolute;
  bottom: 10%;
  width: 10.5rem;
  transform: scale(-1,1) rotate(20deg);
  top: 67%;
  right: 58%;
}
</style>
