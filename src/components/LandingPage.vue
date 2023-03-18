<script setup lang="ts">
import AdvantagesPage from "./advantagesAndPluses/AdvantagesPage.vue";
import HomePage from "./homepage/HomePage.vue";
import HeaderComp from "./headerComp/HeaderComp.vue";
import HowWeWorkPage from "./howWeWork/HowWeWorkPage.vue";
import PlusesPage from "./advantagesAndPluses/PlusesPage.vue";
import ReviewsPage from "./reviews/ReviewsPage.vue";
import WhiteWrapper from "./whitePagesWrapper/WhiteWrapper.vue";
import DoneWorks from "./doneWorks/DoneWorks.vue";
import Results from "./results/Results.vue";
import FinalBlock from "./final-block/FinalBlock.vue";
import Footer from "./footer/Footer.vue";


import SharedQuasar from "./advantagesAndPluses/SharedQuasar.vue";
import { QCarouselSlide } from "quasar";
</script>

<template>
    <HeaderComp></HeaderComp>
    <HomePage></HomePage>
    <AdvantagesPage></AdvantagesPage>
    <WhiteWrapper>
        <DoneWorks></DoneWorks>
        <HowWeWorkPage></HowWeWorkPage>
        <PlusesPage></PlusesPage>
    </WhiteWrapper>
    <ReviewsPage></ReviewsPage>
    <Results></Results>
    <FinalBlock></FinalBlock>
    <Footer></Footer>
</template>

<style scoped lang="scss">

.slide{
    width: 100%;
    height: 10rem;
    text-align: center;
    font-weight: 600;
    font-size: 2rem;
}

.rebeccapurple{
    background: rebeccapurple;
}
.crimson{
    background: crimson;
}
.amber{
    background: #d4b62c;
}

</style>
