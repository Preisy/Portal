<script setup lang="ts">
</script>

<template>
  <div class="guarantee-block">
    <div class="guarantee-text-block">
      <p class="guarantee-text">
        Устанавливаем натяжные <br> потолки с 2015 года. <br> <span class="fat">Честность и качество</span> <br> — залог
        успеха нашей работы!
      </p>
    </div>
    <div class="guarante-tape-block">
      <img src="../../assets/images/homepage/red_tape.png" alt="zxc" class="tape">
      <p class="tape-text"></p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.guarantee-block {
  position: relative;
}

.guarantee-text-block {
  width: 11.5rem;
  border-radius: 6px;
  background-color: #FFFFFF;
  padding: 12px 8px 34px 8px;
  margin-left: 28px;

  p {
    color: #FFFFFF;
    text-align: center;
    font-style: normal;
    font-weight: 500;
    font-size: 11.1166px;
    line-height: 130%;
    color: #373737;
  }

  .fat {
    font-weight: 900;
  }
}

.guarante-tape-block {
  position: absolute;
  top: 70%;

  span {
    display: inline-block;
    font-style: normal;
    font-weight: 600;
    font-size: 15.2344px;
    line-height: 19px;
    color: #FFDCDC;
  }
}

.tape {
  width: 15rem;
  height: 4.5rem;
}</style>
