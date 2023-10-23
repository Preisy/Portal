<script setup lang="ts">
import PortalLogo from '../icons/PortalLogo.vue';
import WhatsappLogo from '../icons/WhatsappLogo.vue';




</script>

<template>
  <div class="bg-footer-wrapper">
    <div class="structure">
      <div class="footer-block">
        <PortalLogo class="logo"></PortalLogo>
        <div class="whatsapp">
          <WhatsappLogo class="whatsapp-logo"></WhatsappLogo>
          <div class="contacts">
            <a href="https://wa.me/89381516149" target="_blank"><p class="number">8 (938) <span class="white-text">151-61-49</span></p></a>
          </div>
        </div>
        <div class="footer-text">
          <p class="text">Copyright © Портал 2023</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
a {
  text-decoration: none;
}

.bg-footer-wrapper {
  background-color: #1C1C1C;

  .structure {
    padding-top: 0.6rem;
    padding-bottom: 0.6rem;
  }
}

.footer-block {
  width: auto;
  @media screen and (min-width: 600px) {
    width: 60%;
  }

  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.whatsapp {
  display: flex;
  align-items: center;


  .whatsapp-logo {
    height: 2rem;
    margin-right: .6rem;
  }
}

.number {
  color: #BDBDBD;
  font-weight: 400;
  font-size: 0.7rem;

  .white-text {
    color: #FFFFFF;
    font-weight: 600;
  }
}

.text {
  color: #A1A1A1;
  font-size: 0.7rem;
}

.logo {
  transform: scale(0.5);
}
@media (max-width: $screen-sm) {
  .footer-block {
    flex-direction: column;
  }
  .whatsapp {
    margin-bottom: 1rem;
  }
}
</style>
