<script setup lang="ts">
import { ref } from 'vue';
import type { Nullable } from '@/types/types';
import PortalLogo from '../icons/PortalLogo.vue';
import WhatsappLogo from '../icons/WhatsappLogo.vue';
import { computed } from '@vue/reactivity';
const root = ref<Nullable<HTMLElement>>();
const currentScroll = ref(window.scrollY);
window.addEventListener("scroll", () => {currentScroll.value = window.scrollY});
const onScroll = computed(
  ()=>{
    let headerHeight = root.value?.getBoundingClientRect().height;
    if (headerHeight)
    return (currentScroll.value > headerHeight)?'prettyHeader':''
  }  
)

</script>

<template>
  <header ref="root" :class="onScroll" class="header">
    <div class="structure">
      <div class="header-items">
        <div class="left-items">
          <PortalLogo class="portal-logo"></PortalLogo>
        </div>
        <div class="right-items">
          <p class="time">
            Пн-Вс. 8:00–22:00
          </p>
          <div class="whatsapp">
            <WhatsappLogo class="whatsapp-logo"></WhatsappLogo>
            <div class="contacts">
              <p class="number">8 (960) <span class="white-text">687-76-87</span></p>
              <a href="https://wa.me/89606877687" target="_blank" class="contact">Написать в WhatsApp</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  position: fixed;
  width: 100%;
  z-index: 5;
  transition: 0.3s ease-in-out;

  .structure {
    padding-top: 2.6rem;
    padding-bottom: 3rem;
    transition: 0.3s 0.1s ease-in-out;
  }
}

.header-items {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  
  .time {
    font-style: normal;
    font-weight: 400;
    font-size: 0.8rem;
    line-height: 1rem;
    color: #FFFFFF;
  }
  .number {
    font-style: normal;
    font-weight: 400;
    font-size: 0.8rem;
    line-height: 1rem;
    color: #FFFFFF;
    color: #BDBDBD;
    text-align: center;
    .white-text {
      color: #FFFFFF;
      font-weight: 700;
    }
  }
  @media (max-width:400px) {
    .number {
      font-size: 1.2rem;
      line-height: 1.4rem;
    }
  }
}

.left-items {
float: left;
}

.right-items {
  display: flex;
  align-items: center;
}
.portal-logo {
  height: 4rem;
}
.whatsapp {
  margin-right: 5.6rem;
  .whatsapp-logo{
    height: 3rem;
  }
}

.time {
  margin-right: 3.5rem;
}
.contacts {
  float: right;
}

.contact {
  background: none;
  border: none;
  font-style: normal;
  font-weight: 500;
  font-size: 0.8rem;
  line-height: 1rem;
  text-decoration: underline;
  color: #FFFFFF;
  margin-left: 1rem;
}
.prettyHeader {
  background-color: rgba(0, 0, 0, 0.5);
  .structure {
    padding-top: 0.8rem;
    padding-bottom: 0.8rem;
  }

}
@media (max-width: 500px) {

    .structure {
        width: 90%;
    }
    .whatsapp {
      margin-right: 0;
    }
    .time {
      display: none;
    }
    .portal-logo {
      transform: scale(0.85);
    }
    .contact {
      font-size: 1rem;
    }
}
</style>