<template>
  <NuxtLayout>
    <Transition name="opacity">
      <NuxtPage />
    </Transition>
  </NuxtLayout>
</template>

<script setup>
// import moment from "moment";

// moment.locale("ru");
</script>

<style lang="scss">
.opacity-enter-active,
.opacity-leave-active {
  transition: opacity 0.25s ease;
}
.opacity-enter-from,
.opacity-leave-to {
  opacity: 0;
}

.go-right-enter-active,
.go-right-leave-active {
  transition: transform 0.75s ease;
}
.go-right-enter-from,
.go-right-leave-to {
  transform: translateX(150%);
}
</style>
