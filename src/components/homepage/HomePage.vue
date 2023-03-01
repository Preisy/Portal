<script setup lang="ts">
import GuaranteeBlock from '@/components/homepage/GuaranteeBlock.vue'
</script>

<template>
  <div class="homepage-wrapper" id="homepage">
    <div class="structure">
      <div class="homepage-items">
        <div class="slogans">
          <h1 class="main-slogan">
            Установим лучший натяжной потолок в Москве
          </h1>
          <p class="add-slogan">
            Используем только качественные, проверенные <br> временем материалы. Сотрудничаем с лучшими <br>
            производителями натяжных потолков.
          </p>
        </div>
        <div class="calc"></div>
      </div>
      <div class="guarantee-block">
        <GuaranteeBlock/>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.homepage-wrapper {
  background: url(../../assets/images/homepage/background.png) no-repeat;
  background-size: cover;

  .structure {
    padding-top: 182px;
    position: relative;
  }
}

.homepage-items {
  display: flex;
}

.slogans {
  flex: 1 0;

  h1 { //bruh
    font-family: 'Montserrat';
    font-style: italic;
    font-weight: 800;
    font-size: 5rem;
    line-height: 49px;
    background: linear-gradient(86.98deg, #FEDA82 22.54%, #FEC338 105.96%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-right: 61px;
    margin-bottom: 28px;
  }

  p { // bruuuuh
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 28px;
    color: #FFFFFF;
  }

}

.calc {
  width: 440px;
  height: 513px;
  background-color: black;
}

.guarantee-block {
  position: absolute;
  bottom: 0;
  left: 0;
}

</style>