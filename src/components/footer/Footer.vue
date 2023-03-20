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
            <p class="number">8 (960) <span class="white-text">687-76-87</span></p>
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
.bg-footer-wrapper {
  background-color: #1C1C1C;

  .structure {
    padding-top: 0.6rem;
    padding-bottom: 0.6rem;
  }
}

.footer-block {
  width: 60%;
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
@media (max-aspect-ratio: 320 / 937) {
  .footer-block {
    flex-direction: column;
  }
  .whatsapp {
    margin-bottom: 1rem;
  }
}
</style>
