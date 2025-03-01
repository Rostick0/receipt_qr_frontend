<template>
  <UiModal :name="nameModal">
    <UiModalContent>
      <div class="modal-hint">
        <div class="modal-hint__top">
          <div class="modal-hint__title">Подсказка 💡</div>
          <button class="modal-hint__btn btn" @click="close">Закрыть</button>
        </div>
        <div class="modal-hint__content">
          <slot />
        </div>
      </div>
    </UiModalContent>
  </UiModal>
</template>

<script setup>
const props = defineProps({
  nameModal: String,
  close: Function,
});
</script>

<style lang="scss" scoped>
.modal-hint {
  max-width: 386px;
}

.modal-hint__top {
  display: flex;
  justify-content: space-between;
  margin-bottom: 6px;
}

.modal-hint__title {
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.modal-hint__btn {
  font-size: 12px;
  padding: 6px 12px;
}
</style>

<style lang="scss">
.modal-hint__text {
  font-weight: 500;
  // margin: 6px 0 12px;
}

.modal-hint__text_other {
  color: var(--color-gray);
  font-weight: 500;
  margin-top: 6px;
}

.modal-hint__img {
  border-radius: 6px;
  margin-top: 12px;
  width: 100%;
}
</style>
