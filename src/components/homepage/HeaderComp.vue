<script setup lang="ts">

</script>

<template>
  <header>
    <div class="structure">
      <div class="header-items">
        <div class="left-items">
          <div class="logo">logo</div>
          <p class="place">Натяжные потолки<br>в Москве</p>
        </div>
        <div class="right-items">
          <p class="time">
            Пн-Вс. 8:00–22:00
          </p>
          <div class="whatsapp">
            <img src="../../assets/images/general/whatsapp.svg" alt="zzz" class="whatsapp-logo">
            <button class="contact">Написать в WhatsApp</button>
          </div>
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
  z-index: 5;

  .structure {
    padding-top: 45px;
    padding-bottom: 45px;
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
    line-height: 15px;
    color: #FFFFFF;
  }
}
.left-items {
  display: flex;
  align-items: center;
}
.right-items {
  display: flex;
  align-items: center;
}
.logo {
  padding: 21px 54px;
  background: rgba(217, 217, 217, 0.2);
  border-radius: 26px;
  margin-right: 32px;
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
  font-size: 0.8rem;
  line-height: 15px;
  text-decoration: underline;
  color: #FFFFFF;
}
</style>