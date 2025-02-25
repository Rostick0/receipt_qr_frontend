<template>
  <div class="modal-content">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.modal-content {
  background-color: var(--color-white);
  border-radius: 6px;
  padding: 24px;
  overflow: auto;
  max-height: calc(100% - 40px);
}
</style>
