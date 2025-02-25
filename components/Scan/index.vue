<template>
  <form class="form" @submit="onSubmit">
    <div class="form__flex">
      <Field class="input" name="Fn" placeholder="ФН" />
      <Field class="input" name="Date" type="date" />
    </div>
    <div class="form__flex">
      <Field class="input" name="FiscalDocumentId" placeholder="ФД" />
      <Field class="input" name="Time" type="time" />
    </div>
    <div class="form__flex">
      <Field class="input" label="ФН" name="FiscalSign" placeholder="ФП" />
      <Field class="input" name="Sum" placeholder="Сумма" />
    </div>
    <div class="form__flex">
      <Field class="input" name="TypeOperation" as="select">
        <option value="" hidden>Тип операции</option>
        <option
          v-for="option in OPTIONS_OPERATION_TYPE"
          :key="option.value"
          :value="option.value"
        >
          {{ option.name }}
        </option>
      </Field>
      <button class="btn">Проверить</button>
    </div>
  </form>
</template>

<script setup>
import { Field } from "vee-validate";

const props = defineProps({
  onSubmit: Function,
});
</script>

<style lang="scss" scoped></style>
