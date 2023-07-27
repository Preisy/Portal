<script setup lang="ts">
defineEmits(['click:left', "click:right"])
</script>

<template>
  <div class="controls">
    <button class="btn left" @click="$emit('click:left')">
      <img src="@/assets/svg/left_arrow.svg" alt=""/>
    </button>
    <button class="btn right" @click="$emit('click:right')">
      <img src="@/assets/svg/left_arrow.svg" alt=""/>
    </button>
  </div>
</template>

<style scoped lang="scss">
.controls {
  --btn-size: 3.75rem;

  display: flex;
  width: 90%;
  margin: 0 auto;
  justify-content: flex-end;

  @media (max-width: 670px) {
    display: none;
  }

  .btn {
    width: var(--btn-size);
    height: var(--btn-size);
    border-radius: 100%;
    user-select: none;

    border: 0;
    background: linear-gradient(180deg, #feda82 0%, #fec338 100%);

    margin-right: 2rem;

    img {
      width: 1.5rem;
    }

    &.right {
      margin-right: 0;
    }

    &.right img {
      transform: rotateZ(180deg);
    }
  }
}

</style>
