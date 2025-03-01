<template>
  <div class="">
    <div v-if="title" class="text-size-default font-bold">{{ title }}</div>
    <div v-if="content" class="text-size-small">{{ content }}</div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  content: String,
});
</script>
