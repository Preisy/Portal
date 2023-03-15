<script setup lang="ts">
import { ref } from "vue";

import Clouds from "../general/cloud/Clouds.vue";
import BgAttachImg from "../general/BgAttachImg/BgAttachImg.vue";

import tapee from "@/assets/images/general/bg_img/tapee.png";
import drill from "@/assets/images/general/bg_img/drill.png";
import screw from "@/assets/images/general/bg_img/screw.png";

const bgPivot = ref<HTMLElement>();
</script>

<template>
    <div class="white-bg">
        <div class="content">
            <slot></slot>
        </div>
        <Clouds class="clouds"></Clouds>
        <Clouds class="clouds upside"></Clouds>
        <div ref="bgPivot" class="bg-attachments">
            <BgAttachImg
                class="tapee"
                :img_src="tapee"
                :ref_element="bgPivot"></BgAttachImg>
            <BgAttachImg
                class="drill"
                :img_src="drill"
                :ref_element="bgPivot"></BgAttachImg>
            <BgAttachImg
                class="screw"
                :img_src="screw"
                :ref_element="bgPivot"></BgAttachImg>
        </div>
    </div>
</template>

<style scoped lang="scss">
$screen-sm: 400px;
$screen-lg: 1440px;
$screen-xl: 1920px;

.content{
    position: relative;
    z-index: 1;
}
.white-bg {
    background: linear-gradient(180deg, #ffffff 0%, #e8e8e8 98.96%);
    position: relative;
}
.clouds {
    position: absolute;
    left: 0;
    right: 0;
    top: -16rem;
    bottom: unset;
}

.clouds.upside {
    top: unset;
    bottom: -15.5rem;
    transform: rotateZ(180deg);
    filter: contrast(0.83);
}

.bg-attachments {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;

    .screw {
        position: absolute;
        top: 10rem;
        height: 20rem;
        @media (max-width: $screen-sm) {
            left: -5rem;
            top: 2rem;
        }
    }

    .tapee {
        position: absolute;
        top: 30rem;
        right: 0.7rem;
        height: 29rem;
        @media (max-width: $screen-sm) {
            top: 50rem;
            right: -8rem;
        }
    }
    .drill {
        position: absolute;
        height: 20rem;
        top: 62rem;
        @media (max-width: $screen-sm) {
            display: none;
        }
    }
}

@media (max-width: 400px) {
    .clouds {
        display: none;
    }
}
</style>
