<script setup lang="ts">
import { ref } from "vue";

import Clouds from "../general/cloud/Clouds.vue";
import BgAttachImg from "../general/BgAttachImg/BgAttachImg.vue";

import tapee from "@/assets/images/general/bg_img/tapee.png";
import drill from "@/assets/images/general/bg_img/drill.png";
import screw from "@/assets/images/general/bg_img/screw1.png";

const bgPivot = ref<HTMLElement>();
</script>

<template>
    <div class="white-bg">
        <div class="content">
            <slot></slot>
        </div>
        <Clouds class="clouds"></Clouds>
        <Clouds class="clouds upside"></Clouds>
        <div class="bg-attach-wrapper">
            <BgAttachImg class="tapee anim" :img_src="tapee" :ref_element="bgPivot"></BgAttachImg>
            <BgAttachImg class="drill" :img_src="drill" :ref_element="bgPivot"></BgAttachImg>
            <BgAttachImg class="screw anim" :img_src="screw" :ref_element="bgPivot"></BgAttachImg>
            <BgAttachImg class="screw anim second" :img_src="screw" :ref_element="bgPivot"></BgAttachImg>
        </div>
    </div>
</template>

<style scoped lang="scss">
.content {
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

    @media (max-width: $screen-md) {
        margin-right: -5rem;
    }
}

.clouds.upside {
    top: unset;
    bottom: -15.5rem;
    transform: rotateZ(180deg);
    filter: contrast(0.83);
}


.bg-attach-wrapper {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
}

.screw {
    position: absolute;
    transform: translate3d(0, 0, 0);
    top: 0;
    top: 85rem;
    height: 20rem;
    z-index: 0;
    filter: none !important;

    &.second {
        height: 18rem;
        top: 92rem;
        // top: -75rem;
        left: 15rem;
        rotate: -15deg;
        z-index: 0;
        animation-delay: -1.56s;
        filter: blur(0.175rem) !important;
    }

    @media (max-width: $screen-sm) {
        left: 0rem;
        top: 10rem;
    }
}

.tapee {
    position: absolute;
    transform: translate3d(0, 0, 0);

    top: 120rem;
    // top: -50rem;
    right: 0.7rem;
    height: 29rem;

    animation-duration: 3.5s;

    @media (max-width: $screen-sm) {
        top: 50rem;
        right: -8rem;
    }
}

.drill {
    position: absolute;
    transform: translate3d(0, 0, 0);

    top: 240rem;
    height: 20rem;
    // top: 62rem;
    // top: -25rem;
    left: -4rem;
    scale: -1 1;

    animation: drill-anim linear infinite 3.5s;

    // @media (max-width: $screen-sm) {
    //     display: none;
    // }

    $dx: 0.5rem;
    $dy: 0.26rem;

    @keyframes drill-anim {
        0% {
            translate: $dx (
                -$dy
            );
    }

    50% {
        translate: -$dx (
            $dy
        );
}

100% {
    translate: $dx (
        -$dy
    );
}
}
}

@media (max-width: $screen-sm) {
    // .clouds {
    //     display: none;
    // }
}

.anim {
    $dx: 0.15rem;
    $dy: 0.3rem;
    $d_angle: 3deg;

    animation: anim ease-in-out infinite 5s;

    @keyframes anim {
        0% {
            translate: $dx 0;
            rotate: 0 0 $d_angle;
        }

        50% {
            translate: 0 $dy;
            rotate: 0 0 0;
        }

        100% {
            translate: $dx 0;
            rotate: 0 0 $d_angle;
        }
    }
}
</style>
