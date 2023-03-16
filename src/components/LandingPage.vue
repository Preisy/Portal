<script setup lang="ts">
import AdvantagesPage from './advantages_and_pluses/AdvantagesPage.vue';
import HomePage from './homepage/HomePage.vue';
import HeaderComp from './headerComp/HeaderComp.vue'
import HowWeWorkPage from './how_we_work/HowWeWorkPage.vue';
import PlusesPage from './advantages_and_pluses/PlusesPage.vue';
import ReviewsPage from './reviews/ReviewsPage.vue';
import WhiteWrapper from './white_pages_wrapper/WhiteWrapper.vue';
import Results from './results/Results.vue';
import FinalBlock from './finalBlock/FinalBlock.vue';
import Footer from './footer/Footer.vue'
</script>

<template>
<HeaderComp></HeaderComp>
<HomePage></HomePage>
<AdvantagesPage></AdvantagesPage>

<WhiteWrapper>
    <HowWeWorkPage></HowWeWorkPage>
    <PlusesPage></PlusesPage>
</WhiteWrapper>

<ReviewsPage></ReviewsPage>
<Results></Results>
<FinalBlock></FinalBlock>
<Footer></Footer>
</template>

<style scoped lang="scss"></style>
