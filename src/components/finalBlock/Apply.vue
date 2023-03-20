<script setup lang="ts">
import Arrow from '../icons/Arrow.vue';
import Application from './Application.vue';
</script>

<template>
  <div class="apply-block">
    <div class="apply-container">
      <div class="circle">
        <div class="add-circle">
          <p class="circle-text">Скорее <br> заполняй <br> заявку!</p>
        </div>
      </div>
      <div class="application-block">
        <Application class="application"></Application>
      </div>
    </div>
    <div class="arrow-block">
      <Arrow class="arrow"></Arrow>
    </div>
  </div>
</template>

<style scoped lang="scss">
.apply-block {
  display: flex;
}
.apply-container {
  display: flex;
  flex-direction: column;

}

.circle {
  position: relative;
  top: 8.5rem;
  left: 2rem;
  width: 9rem;
  height: 9rem;
  border-radius: 50%;
  background-color: #FFFFFF;
  display: flex;
  justify-content: center;
  align-items: center;

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
  width: 13rem;
  height: 13rem;
  user-select: none;
  margin-top: 6.6rem;
}

.arrow {
  width: 10.5rem;
  transform: scale(-1, 1) rotate(20deg);
  margin-top: 23rem;
  margin-left: -1.5rem;
}
@media (max-aspect-ratio: 320 / 937) {
  .circle {
    left: 0;
  }
  .application {
    margin-left: -2rem;
  }
  .arrow {
    transform: scale(-1, 1) rotate(100deg);
    margin-top: 10rem;
  }
}
</style>
