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
        <slot></slot>
        <Clouds class="clouds"></Clouds>
        <Clouds class="clouds upside"></Clouds>
        <div ref="bgPivot" class="bg-attachments">
            <BgAttachImg class="tapee" :img_src="tapee" :ref_element="bgPivot"></BgAttachImg>
            <BgAttachImg class="drill" :img_src="drill" :ref_element="bgPivot"></BgAttachImg>
            <BgAttachImg class="screw" :img_src="screw" :ref_element="bgPivot"></BgAttachImg>
        </div>
    </div>
</template>

<style scoped lang="scss">
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
    bottom: -16rem;
    transform: rotateZ(180deg);
    filter: contrast(0.83);
}

.bg-attachments {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    .tapee {
        position: absolute;
        top: 12%;
        right: 0.7rem;
        height: 470px;
    }
    .drill {
        position: absolute;
        height: 400px;
        top: 40%;
    }
    .screw {
        position: absolute;
        height: 400px;
    }
}

@media (max-width: 400px) {
    .clouds {
        display: none;
    }
}
</style>
