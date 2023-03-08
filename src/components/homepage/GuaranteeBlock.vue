<script setup lang="ts">
import HomePageTape from './HomePageTape.vue';

</script>

<template>
  <div class="guarantee-block">
    <div class="guarantee-text-block">
      <p class="guarantee-text">
        Устанавливаем натяжные <br> потолки с 2015 года. <br> <span class="fat">Честность и качество</span> <br> — залог
        успеха нашей работы!
      </p>
    </div>
    <div class="guarante-tape-block">
      <HomePageTape></HomePageTape>
    </div>
  </div>
</template>

<style scoped lang="scss">
.guarantee-block {
  position: absolute;
  bottom: 0;
  left: 0;
}
.guarantee-text-block {
  width: 11.5rem;
  border-radius: 6px;
  background-color: #FFFFFF;
  padding: 1rem 0.5rem 2.5rem 0.5rem;

  p {
    color: #FFFFFF;
    text-align: center;
    font-style: normal;
    font-weight: 500;
    font-size: 0.7rem;
    line-height: 130%;
    color: #373737;
  }

  .fat {
    font-weight: 900;
  }
}

.guarante-tape-block {
  position: absolute;
  left: -33%;
  top: 33%;
}


</style>
