<script setup lang="ts">
import GuaranteeBlock from '@/components/homepage/GuaranteeBlock.vue'
import Discount from './Discount.vue'
import Calculator from '../general/calculator/Calculator.vue'
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
          <Calculator class="calc"></Calculator>
        </div>
        <GuaranteeBlock />
      </div>
  </div>
</template>

<style scoped lang="scss">
.homepage-wrapper {
  position: relative;
  background: url(../../assets/images/homepage/background.png);
  background-repeat: no-repeat;
  background-size: cover;

  .structure {
    width: 63.5%;
    padding-top: 10rem;
    position: relative;
  }
}
.background-wrapper {
  position: absolute;
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

  .main-slogan{
    font-style: italic;
    line-height: 2.9rem;
    background: linear-gradient(86.98deg, #FEDA82 22.54%, #FEC338 105.96%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-right: 4rem;
    margin-bottom: 1.75rem;
    .another-color {
      font-style: normal;
      -webkit-background-clip: text;
      background-clip: text;
      background-color: #FFFFFF;
    }
  }
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
}


</style>
