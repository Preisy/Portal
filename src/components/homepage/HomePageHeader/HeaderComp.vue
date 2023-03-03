<script setup lang="ts">
import WhatsappLogo from './WhatsappLogo.vue';
import HeaderLogo from './HeaderLogo.vue'

</script>

<template>
  <header>
    <div class="structure">
      <div class="header-items">
        <div class="left-items">
          <HeaderLogo></HeaderLogo>
          <p class="place">Натяжные потолки<br>в Москве</p>
        </div>
        <div class="right-items">
          <div class="whatsapp">
            <WhatsappLogo></WhatsappLogo>
            <button class="contact">Написать в WhatsApp</button>
          </div>
          <p class="time">
            Пн-Вс. 8:00–22:00
          </p>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
header {
  position: fixed;
  width: 100%;
  z-index: 5;

  .structure {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
}
.header-items {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  p {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 0.8rem;
    line-height: 1rem;
    color: #FFFFFF;
  }
}
.place {
  float: left;
  margin-top: 0.7rem;
}
.time {
  margin-top: 0.9rem;
  margin-right: 3.5rem;
  float: right;
}
.whatsapp {
  float: right;
}
.contact {
  background: none;
  border: none;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 0.8rem;
  line-height: 1rem;
  text-decoration: underline;
  color: #FFFFFF;
}
</style>