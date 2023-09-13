<script setup lang="ts">
import GuaranteeBlock from "@/components/homepage/GuaranteeBlock.vue";
import Discount from "./Discount.vue";
import Calculator from "../general/calculator/Calculator.vue";
import { ref, computed } from "vue";

const root = ref<HTMLElement>();
const currentScroll = ref(window.scrollY);
window.addEventListener("scroll", () => {
    currentScroll.value = window.scrollY;
});
</script>

<template>
    <div ref="root" class="homepage-wrapper" id="homepage">
        <div class="shadow"></div>
        <div class="structure">
            <div class="homepage-items">
                <div class="slogans">
                    <h1 class="main-slogan">
                        Установим лучший натяжной потолок
                        <span class="another-color">в Москве и МО</span>
                    </h1>
                    <p class="add-slogan">
                        Используем только качественные, проверенные
                        временем материалы. Сотрудничаем с лучшими
                        производителями натяжных потолков.
                    </p>
                    <Discount></Discount>
                </div>
                <Calculator class="calc"></Calculator>
            </div>
            <GuaranteeBlock class="guarantee" />
        </div>
    </div>
</template>

<style scoped lang="scss">
.homepage-wrapper {
    position: relative;
    background: url(../../assets/images/homepage/background.png);
    background-repeat: no-repeat;
    background-size: cover;

    .structure {
        padding-top: 10rem;
        position: relative;

        .structure {
            padding-top: 10rem;
            position: relative;
        }
    }

    .shadow {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 8rem;
        background: linear-gradient(180deg,
                rgba(27, 27, 27, 0) 27%,
                #151515 57%);
    }

    .homepage-items {
        display: flex;
        align-items: center;
        @media (max-width: 900px) {
            align-items: flex-start;
        }

        .main-slogan {
            font-style: italic;
            line-height: 2.9rem;
            background: linear-gradient(86.98deg,
                    #feda82 22.54%,
                    #fec338 105.96%);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 1.75rem;
            

            .another-color {
                font-style: normal;
                -webkit-background-clip: text;
                background-clip: text;
                background-color: #ffffff;

                &::selection {
                    -webkit-text-fill-color: #fff;
                }
            }

            &::selection {
                -webkit-text-fill-color: #fff;
            }
        }

        .add-slogan {
            font-style: normal;
            font-weight: 500;
            font-size: 1.35rem;
            line-height: 1.75rem;
            color: #ffffff;

            width: 80%;
        }
    }

    .slogans {
        flex: 1 0;
    }

    .calc {
        width: 27rem;

    }
}
// @media (max-width: $screen-md) {
//     .homepage-items {
//         flex-direction: column;
//         row-gap: 5rem;
        
//     }
// }

@media (max-width: $screen-md) {
    .homepage-items {
        flex-direction: column;
        row-gap: 5rem;
        
    }

    .main-slogan {
        text-align: center;
    }
    

    .add-slogan {
        text-align: center;
        margin: 0 auto;
    }

    .guarantee {
        display: none;
    }
    .calc {
        margin: 0 auto;
    }

}

</style>
