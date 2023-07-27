<template>
    <div class="results-block-item">
        <div class="circle">
            <p class="number">1</p>
        </div>
        <p class="result-text-block">Натяжной потолок — <span class="fat-text">лучшее <br> решение</span> по цене и
            качеству.</p>
    </div>
    <div class="results-block-item">
        <div class="circle">
            <p class="number">2</p>
        </div>
        <p class="result-text-block">Мы <span class="fat-text">знаем все</span> о натяжных <br>потолках.</p>
    </div>
    <div class="results-block-item">
        <div class="circle">
            <p class="number">3</p>
        </div>
        <p class="result-text-block">Не теряйте времени, <span class="fat-text">свяжитесь <br>с нами</span> в
            WhatsApp.</p>
    </div>
</template>

<style lang="scss">
.results-block {
    padding: 3rem 3.4rem;
    background: #FFFFFF;
    box-shadow: 0px 4px 48px -3px rgba(0, 0, 0, 0.12);
    border-radius: 1rem;
}

.results-block-item {
    display: flex;
    align-items: center;
    margin-bottom: 2.3rem;

    &:last-child {
        margin-bottom: 0;
    }
}

.circle {
    height: 4rem;
    width: 4rem;
    border-radius: 50%;
    border: 0.1rem solid #FEC338;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 2.2rem;
}

.number {
    font-weight: 600;
    font-size: 1.8rem;
    line-height: 2rem;
}

.result-text-block {
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 125%;
    color: #515151;

    .fat-text {
        font-weight: 700;
    }
}
</style>