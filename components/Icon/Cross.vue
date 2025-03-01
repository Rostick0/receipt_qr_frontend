<template>
  <div class="cross">
    <div class="cross-line"></div>
    <div class="cross-line"></div>
  </div>
</template>

<style lang="scss" scoped>
.cross {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 20px;
  height: 20px;
}

.cross-line {
  background-color: var(--color-white);
  border-radius: 6px;
  position: absolute;
  width: 100%;
  height: 3px;

  &:first-child {
    transform: rotate(45deg);
  }

  &:last-child {
    transform: rotate(-45deg);
  }
}
</style>
