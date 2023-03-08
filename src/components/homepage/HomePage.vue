<script setup lang="ts">
import GuaranteeBlock from '@/components/homepage/GuaranteeBlock.vue'
import Discount from './Discount.vue'
</script>

<template>
  <div class="homepage-wrapper" id="homepage">
    <div class="shadow"></div>
    <div class="structure">
      <div class="homepage-items">
        <div class="slogans">
          <h1 class="main-slogan">
            Установим лучший натяжной потолок <span class="another-color">в Москве и МО</span>
          </h1>
          <p class="add-slogan">
            Используем только качественные, проверенные <br> временем материалы. Сотрудничаем с лучшими <br>
            производителями натяжных потолков.
          </p>
          <Discount></Discount>
        </div>
        <div class="calc"></div>
      </div>
      <GuaranteeBlock />
    </div>
  </div>
</template>

<style scoped lang="scss">
.homepage-wrapper {
  background: url(../../assets/images/homepage/background.png) no-repeat;
  background-size: cover;
  position: relative;

  .structure {
    padding-top: 10rem;
    position: relative;
  }
}
.shadow {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 125px;
  background: linear-gradient(180deg, rgba(27, 27, 27, 0) 27%, #151515 57%);
}

.homepage-items {
  display: flex;
  align-items: center;

  .add-slogan {
    font-style: normal;
    font-weight: 500;
    font-size: 1.35rem;
    line-height: 1.75rem;
    color: #FFFFFF;
    margin-bottom: 1rem;
  }
}

.slogans {
  flex: 1 0;
}

.calc {
  width: 440px;
  height: 513px;
  background-color: black;
}


</style>