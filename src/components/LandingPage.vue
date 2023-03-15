<script setup lang="ts">
import AdvantagesPage from "./advantagesAndPluses/AdvantagesPage.vue";
import HomePage from "./homepage/HomePage.vue";
import HeaderComp from "./headerComp/HeaderComp.vue";
import HowWeWorkPage from "./howWeWork/HowWeWorkPage.vue";
import PlusesPage from "./advantagesAndPluses/PlusesPage.vue";
import ReviewsPage from "./reviews/ReviewsPage.vue";
import WhiteWrapper from "./whitePagesWrapper/WhiteWrapper.vue";
import DoneWorks from "./doneWorks/doneWorks.vue";
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
</template>

<style scoped lang="scss">
</style>
