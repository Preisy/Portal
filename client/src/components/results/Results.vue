<script setup lang="ts">
import Helmet from "./Helmet.vue";
import Arrow from "../icons/Arrow.vue";
import Button from "../general/button/Button.vue";
import BackgroundImg from "./Background-img.vue";
import ResultTextBlock from "./ResultTextBlock.vue";
import { scroll } from "quasar";
import { onMounted, ref } from "vue";
const { getScrollTarget, setVerticalScrollPosition } = scroll;

function scrollToElement(el: HTMLElement) {
    const target = getScrollTarget(el);
    const offset = el.offsetTop;
    const duration = 500;
    setVerticalScrollPosition(target, offset, duration);
}

const target = ref<HTMLElement | null>();
const onclick = () => {
    if (target.value) scrollToElement(target.value);
};

onMounted(
    () => (target.value = document.querySelector(".final-bg") as HTMLElement)
);
</script>

<template>
    <div class="results-bg">
        <div class="results-img-block">
            <BackgroundImg class="result-img"></BackgroundImg>
        </div>
        <div class="structure">
            <div class="results-main-teg">
                <h2 class="results-teg">
                    Подведем <span class="gold-text">итоги</span>
                </h2>
            </div>
            <div class="results-main-content">
                <div class="results-block">
                    <ResultTextBlock></ResultTextBlock>
                </div>
                <div class="results-button-block">
                    <div class="img-wrapper">
                        <Helmet class="helmet"></Helmet>
                        <Button :redirect="false" class="result-cost" @click="onclick">
                            Рассчитать стоимость
                        </Button>
                    </div>
                    <Arrow class="arrow"></Arrow>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.results-bg {
    position: relative;
    overflow: hidden;
    background: url(../../assets/images/results/results-bg.png) no-repeat;
    background-size: cover;
    animation: main-bg-slide 5s ease-in-out infinite;
}

@keyframes slide {
    0% {
        top: 0;
        left: -3%;
    }

    50% {
        top: 10%;
        left: 0;
    }

    100% {
        top: 0;
        left: -3%;
    }
}

@keyframes main-bg-slide {
    0% {
        background-position: 0% 0%;
    }

    50% {
        background-position: 0% 20%;
    }

    100% {
        background-position: 0% 0%;
    }
}

.results-img-block {
    position: absolute;
    animation: slide 15s ease-in-out infinite;
}

.structure {
    position: relative;
}

.results-main-teg {
    margin-bottom: 2rem;
}

.results-teg {
    text-align: center;

    &::selection {
        -webkit-text-fill-color: #fff;
    }
}

.gold-text {
    font-style: italic;
    background: linear-gradient(86.98deg, #feda82 22.54%, #fec338 105.96%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;

    &::selection {
        -webkit-text-fill-color: #fff;
    }
}

.results-main-content {
    display: flex;
    column-gap: 2rem;
}

.results-main-content > div {
    flex: 1;
}

.results-block {
    padding: 3rem 3.4rem;
    background: #ffffff;
    box-shadow: 0px 4px 48px -3px rgba(0, 0, 0, 0.582);
    border-radius: 1rem;
}

.results-button-block {
    display: flex;
    align-items: flex-end;
}

.img-wrapper {
    position: relative;
    font-size: 0;
    text-align: center;
}

.result-cost {
    margin: -2rem 0 0;
}

.helmet {
    display: inline-block;
    width: 100%;
}

.arrow {
    width: 10.5rem;
    margin-left: -3.5rem;
    @media (max-width: 900px) {
        margin-left: -3rem;
    }
}

@media (max-width: $screen-md) {
    .results-main-content {
        flex-direction: column;
        row-gap: 4.5rem;
    }
    .results-main-teg {
        padding: 1.5rem 0 1.5rem 0;
    }

    .results-block {
        padding: 2rem 2rem;
        align-self: center;
    }

    .arrow {
        display: none;
    }

    .helmet {
        width: 65%;
    }

    .result-cost {
        font-size: 1.1rem;
    }
}
</style>
