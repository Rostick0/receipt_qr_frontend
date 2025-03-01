<template>
  <div class="burger">
    <div class="burger-line"></div>
    <div class="burger-line"></div>
    <div class="burger-line"></div>
  </div>
</template>

<style lang="scss" scoped>
.burger {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  row-gap: 3px;
  width: 32px;
}

.burger-line {
  background-color: var(--color-white);
  border-radius: 6px;
  width: 100%;
  height: 5px;
}
</style>
