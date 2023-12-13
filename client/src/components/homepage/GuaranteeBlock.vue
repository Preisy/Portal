<script setup lang="ts">
import HomePageTape from "./HomePageTape.vue";
</script>

<template>
  <div class="guarantee-block">
    <div class="guarantee-text-block">
      <p class="guarantee-text">
        Устанавливаем натяжные <br />
        потолки с 2015 года. <br />
        <span class="fat">Честность и качество</span> <br />
        — залог успеха нашей работы!
      </p>
    </div>
    <div class="guarante-tape-block">
      <HomePageTape></HomePageTape>
    </div>

    <p v-if="!$q.screen.lt.md" class="add-slogan">
      Используем только качественные, проверенные временем материалы.
      Сотрудничаем с лучшими производителями натяжных потолков.
    </p>
  </div>
</template>

<style scoped lang="scss">
.add-slogan {
  font-style: normal;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 1.75rem;
  color: #ffffff;

  width: 60%;
  margin-left: 2rem;
}

.guarantee-text-block,
.guarante-tape-block {
  zoom: 1.3;
}

.guarantee-block {
  // position: absolute;
  // bottom: 0;
  // left: 0;
  position: relative;
  // margin-top: 5rem;
  z-index: 1;
  display: flex;
  align-items: baseline;
}
.guarantee-text-block {
  width: 12.5rem;
  border-radius: 0.4rem;
  background-color: #ffffff;
  padding: 1rem 0.5rem 2.5rem 0.5rem;

  p {
    color: #ffffff;
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
  top: 33%;
  width: 12.5rem;

  img {
    width: 150%;
    margin-left: -25%;
    margin-top: 0.5rem;
  }
}
</style>
