<script setup lang="ts">
import Helmet from './Helmet.vue'
import Arrow from '../icons/Arrow.vue'
import Button from '../general/button/Button.vue';
</script>

<template>
  <div class="results-bg">
    <div class="structure">
      <div class="results-main-teg">
        <h2 class="results-teg">Итоги</h2>
      </div>
      <div class="results-main-content">
        <div class="results-block">
          <div class="results-block-item">
            <div class="circle">
              <p class="number">1</p>
            </div>
            <p class="result-text-block">Натяжной потолок — <span class="fat-text">лучшее <br> решение</span> по цене и
              качеству.</p>
          </div>
          <div class="results-block-item">
            <div class="circle">
              <p class="number">2</p>
            </div>
            <p class="result-text-block">Мы <span class="fat-text">знаем все</span> о натяжных <br>потолках.</p>
          </div>
          <div class="results-block-item">
            <div class="circle">
              <p class="number">3</p>
            </div>
            <p class="result-text-block">Не теряйте времени, <span class="fat-text">свяжитесь <br>с нами</span> в
              WhatsApp.</p>
          </div>
        </div>
        <div class="results-button-block">
          <div class="helmet">
            <Helmet></Helmet>
          </div>
            <Button :redirect="false" class='result-cost'>Рассчитать стоимость</Button>
          <Arrow class="arrow"></Arrow>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.results-bg {
  background: url(../../assets/images/results/results-bg.png);
  background-repeat: no-repeat;
  background-size: cover;
}

.structure {
  position: relative;
}
.results-main-teg {
  margin-bottom: 2rem;
}

.results-teg {
  font-style: italic;
  background: linear-gradient(86.98deg, #FEDA82 22.54%, #FEC338 105.96%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
}

.results-main-content {
  display: flex;
}

.results-block {
  padding: 3rem 3.4rem;
  background: #FFFFFF;
  box-shadow: 0px 4px 48px -3px rgba(0, 0, 0, 0.12);
  border-radius: 1rem;
  margin-right: 8rem;
}

.results-block-item {
  display: flex;
  align-items: center;
  margin-bottom: 2.3rem;

  &:last-child {
    margin-bottom: 0;
  }
}

.circle {
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
  border: 0.1rem solid #FEC338;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 2.2rem;
}

.number {
  font-weight: 600;
  font-size: 1.8rem;
  line-height: 2rem;
}

.result-text-block {
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 125%;
  color: #515151;

  .fat-text {
    font-weight: 700;
  }
}

.results-button-block {
  display: flex;
  flex-direction: column;
  justify-content: end;
}
.helmet {
  width: 27rem;
  height: 27rem;
  position: absolute;
  bottom: 1%;
  right: 9%;
}

.result-cost {
  position: relative;
  padding: 1.45rem 3rem;
  border-radius: 1.2rem;
  font-weight: 600;
  font-size: 0.75rem;
  line-height: 1rem;
  text-align: center;
  letter-spacing: 0.04em;
  color: #302C23;
  text-shadow: 0px 1px 0px rgba(254, 225, 154, 0.7);
}

.arrow {
  width: 10.5rem;
  position: absolute;
  bottom: 12%;
  right: 2%;
}
</style>
