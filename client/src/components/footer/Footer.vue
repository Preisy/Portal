<script setup lang="ts">
import PortalLogo from "../icons/PortalLogo.vue";
import WhatsappLogo from "../icons/WhatsappLogo.vue";
import PDFpolitika from "@/assets/politika_v.pdf";
</script>

<template>
  <div class="bg-footer-wrapper">
    <div class="structure">
      <div class="footer-block">
        <PortalLogo class="logo"></PortalLogo>
        <div class="whatsapp">
          <WhatsappLogo class="whatsapp-logo"></WhatsappLogo>
          <div class="contacts">
            <a href="https://wa.me/+79381516149" target="_blank"
              ><p class="number">
                +7 (938) <span class="white-text">151-61-49</span>
              </p></a
            >
          </div>
        </div>

        <div class="footer-text">
          <p class="text">Copyright © Портал 2023</p>
        </div>

        <a class="terms_of_use" :href="PDFpolitika">
          Политика конфиденциальности
        </a>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
a {
  text-decoration: none;
}

.bg-footer-wrapper {
  background-color: #1c1c1c;

  .structure {
    padding-top: 0.6rem;
    padding-bottom: 0.6rem;
  }
}

.footer-block {
  width: auto;
  gap: 1rem 5rem;
  @media screen and (max-width: 600px) {
    gap: 1rem 2rem;
  }

  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.whatsapp {
  display: flex;
  align-items: center;

  .whatsapp-logo {
    height: 2rem;
    margin-right: 0.6rem;
  }
}

.number {
  color: #bdbdbd;
  font-weight: 400;
  font-size: 0.7rem;

  .white-text {
    color: #ffffff;
    font-weight: 600;
  }
}

a.terms_of_use {
  color: black;
  border-radius: 1rem;
  font-weight: 500;
  padding: 0.75rem;
  background-color: #ffffff88;
  transition: background-color 200ms;

  &:hover {
    background-color: #ffffffcc;
  }
}

.text {
  color: #a1a1a1;
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
