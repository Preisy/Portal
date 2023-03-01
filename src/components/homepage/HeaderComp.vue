<script setup lang="ts">

</script>

<template>
  <header>
    <div class="structure">
      <div class="header-items">
        <div class="logo">
          logo
        </div>

        <p class="theme">
          Натяжные потолки <br> в Москве
        </p>

        <p class="time">
          Пн-Вс. 8:00–22:00
        </p>
        <div class="whatsapp">
          <img src="../../assets/images/general/whatsapp.svg" alt="" class="whatsapp-logo">

          <button class="contact">
            Написать в WhatsApp
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
header {
  //padding-top: 45px;
  position: fixed;
  width: 100%;

  .structure {
    padding-top: 45px;
    padding-bottom: 45px;
  }
}

.header-items {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding-right: 97px;

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #FFFFFF;
  }
}

.logo {
  padding: 21px 54px;
  background: rgba(217, 217, 217, 0.2);
  border-radius: 26px;
  margin-right: 32px;
}

.theme {
  margin-right: 460px;
}

.time {
  margin-right: 56px;
}

.contact {
  background: none;
  border: none;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  text-decoration-line: underline;
  color: #FFFFFF;
}
</style>