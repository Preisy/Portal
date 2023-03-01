<script setup lang="ts">

</script>

<template>
    <div class="homepage">
        <header>
            <div class="wrapper">
                <div class="header-items">
                    <div class="logo">
                        logo
                    </div>

                    <p class="theme">
                        Натяжные потолки <br> в Москве
                    </p>

                    <p class="time">
                        Пн-Вс. 8:00–22:00
                    </p>
                    <div class="whatsapp">
                    <img src="../../assets/images/general/whatsapp.svg" alt="" class="whatsapp-logo">

                    <button class="contact">
                        Написать в WhatsApp
                    </button>
                    </div>
                </div>
            </div>
        </header>
        <main>
            <div class="wrapper">
                <div class="homepage-items">
                    <div class="slogans">
                        <h1 class="main-slogan">
                            Установим лучший натяжной потолок  в Москве
                        </h1>
                        <p class="add-slogan">
                            Используем только качественные, проверенные <br> временем материалы. Сотрудничаем с лучшими <br> производителями натяжных потолков.
                        </p>
                    </div>
                    <div class="calc">

                    </div>
                    <div class="guarantee-block">
                        <div class="guarantee">
                            <div class="guarantee-text-block">
                                <p class="guarantee-text">
                                    Устанавливаем натяжные <br> потолки с 2015 года. <br> Честность и качество <br> — залог успеха нашей работы!
                                </p>
                            </div>

                            <div class="guarantee-tape-block">
                                <img src="../../assets/images/homepage/red_tape.png" alt="" class="tape">
                                <p class="tape-text">

                                </p>
                            </div>
                        </div>
                </div>
                </div>
            </div>
        </main>
    </div>

>>>>>>> Home page first vers
</template>

<style scoped lang="scss">
.homepage{
    background: url(../../assets/images/homepage/background.png);
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
}

header {
    padding-top: 45px;
}
.wrapper {
    max-width: 63.38%;
    margin: 0 auto;
}
.header-items {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding-right: 97px;
    p{
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 15px;
        color: #FFFFFF;
    }
}
.logo {
    padding: 21px 54px;
    background: rgba(217, 217, 217, 0.2);
    border-radius: 26px;
    margin-right: 32px;
}
.theme {
    margin-right: 460px;
}
.time {
    margin-right: 56px;
}
.contact {
    background: none;
    border: none;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    text-decoration-line: underline;
    color: #FFFFFF;
}
.homepage-items {
    display: grid;
    grid-template-columns: 58% 36.15%;
}
.slogans {
    margin-top: 182px;

    h1 {
        font-family: 'Montserrat';
        font-style: italic;
        font-weight: 800;
        font-size: 40px;
        line-height: 49px;
        background: linear-gradient(86.98deg, #FEDA82 22.54%, #FEC338 105.96%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        margin-right: 61px;
        margin-bottom: 28px;
    }

    p {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 500;
        font-size: 22px;
        line-height: 28px;
        color: #FFFFFF;
    }

}
.calc {
    margin-top: 73px;
    width: 440px;
    height: 513px;
    background-color: black;
}
.guarantee-block {
    position: relative;

    .guarantee-text-block{
        border-radius: 6px;
        background-color: #FFFFFF;
        max-width: fit-content;
        margin-left: 28px;
        padding: 12px 8px 34px;
        p{
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 500;
            font-size: 11.1166px;
            line-height: 14px;
            text-align: center;
        }
    }
    .guarantee-tape-block{
        max-width: fit-content;
        position: absolute;
        top: 73.5px;
        .tape{
            width: 242px;
            height: 71px;
        }
    }
}
</style>
