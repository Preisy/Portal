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
root.value?.getBoundingClientRect().height;

</script>

<template>
  <header ref="root" :class="onScroll" class="header">
    <div class="structure">
      <div class="header-items">
        <div class="left-items">
          <PortalLogo></PortalLogo>
        </div>
        <div class="right-items">
          <p class="time">
            Пн-Вс. 8:00–22:00
          </p>
          <div class="whatsapp">
            <WhatsappLogo></WhatsappLogo>
            <div class="contacts">
              <p class="number">8 (960) 687-76-87</p>
              <button class="contact">Написать в WhatsApp</button>
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
  }
}

.header-items {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 0.8rem;
    line-height: 1rem;
    color: #FFFFFF;
  }
}

.left-items {
float: left;
}

.right-items {
  display: flex;
  align-items: center;
}
.whatsapp {
  margin-right: 5.6rem;
}

.time {
  margin-right: 3.5rem;
}
.contacts {
  float: right;
}
.number {
  text-align: center;
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
</style>