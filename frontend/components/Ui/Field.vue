<template>
  <div class="flex flex-col gap-y-1">
    <div class="field">
      <Field v-if="$slots.default" class="input" :name="name" :="$attrs">
        <slot />
      </Field>
      <Field v-else class="input" :name="name" :="$attrs"></Field>
      <slot name="icon" />
    </div>
    <ErrorMessage class="error text-size-small" :name="name" />
  </div>
</template>

<script setup>
import { Field, ErrorMessage } from "vee-validate";

const props = defineProps({
  name: String,
});
</script>
