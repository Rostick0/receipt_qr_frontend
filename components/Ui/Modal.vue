<template>
  <CuiBaseModal :="props">
    <template #default="{ close, isActive, open }">
      <template v-if="typeShow">
        <div v-show="isActive" class="modal" @click.self="close">
          <slot :="{ open }" />
        </div>
      </template>
      <template v-else>
        <div v-if="isActive" class="modal" @click.self="close">
          <slot :="{ open }" />
        </div>
      </template>
    </template>
  </CuiBaseModal>
</template>

<script setup>
const { typeShow, ...props } = defineProps({
  typeShow: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped>
.modal {
  background-color: rgba(0, 0, 0, 0.33);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
