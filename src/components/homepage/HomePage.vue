<script setup lang="ts">
import GuaranteeBlock from '@/components/homepage/GuaranteeBlock.vue'
</script>

<template>
  <div class="homepage-wrapper" id="homepage">
    <div class="shadow-block">
        <div class="shadow"></div>
      </div>
    <div class="structure">
      <div class="homepage-items">
        <div class="slogans">
          <h1 class="main-slogan">
            Установим лучший натяжной потолок <span class="another-color">в Москве</span>
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
    padding-top: 11.375rem;
    position: relative;
  }
}
.shadow-block {
  position: relative;
}
.shadow {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 17.56em;
  top: 41rem;
  background: linear-gradient(180deg, rgba(27, 27, 27, 0) 27%, #151515 57%);
}
.homepage-items {
  display: flex;
  align-items: center;
  .another-color {
    font-style: normal;
    font-weight: 800;
    font-size: 3.5rem;
    line-height: 4rem;
    -webkit-background-clip: text;
    background-color: #FFFFFF;
  }
  h1 { 
    font-style: italic;
    font-weight: 800;
    font-size: 3.5rem;
    line-height: 4rem;
    background: linear-gradient(86.98deg, #FEDA82 22.54%, #FEC338 105.96%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-right: 4rem;
    margin-bottom: 1.75rem;
  }
  p { 
    font-style: normal;
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 1.75rem;
    color: #FFFFFF;
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

.guarantee-block {
  position: absolute;
  bottom: 0;
  left: 0;
}
</style>