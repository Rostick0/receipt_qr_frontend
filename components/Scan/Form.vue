<template>
  <form class="form" @submit="onSubmit">
    <div class="form__flex">
      <UiField
        name="Fn"
        placeholder="ФН"
        v-maska
        data-maska="S#"
        data-maska-tokens="S:[0-9]:repeated"
        data-maska-reversed
        rules="required|max:25"
      >
        <template #icon>
          <span class="label__question" @click="fnOpen">?</span>
        </template>
      </UiField>
      <UiField
        name="Date"
        type="date"
        rules="required"
        :max="moment().format('YYYY-MM-DD')"
      />
    </div>
    <div class="form__flex">
      <UiField
        name="FiscalDocumentId"
        placeholder="ФД"
        v-maska
        data-maska="S#"
        data-maska-tokens="S:[0-9]:repeated"
        data-maska-reversed
        rules="required|max:25"
      >
        <template #icon>
          <span class="label__question" @click="fdOpen">?</span>
        </template>
      </UiField>
      <UiField name="Time" type="time" rules="required" />
    </div>
    <div class="form__flex">
      <UiField
        label="ФН"
        name="FiscalSign"
        placeholder="ФП"
        v-maska
        data-maska="S#"
        data-maska-tokens="S:[0-9]:repeated"
        data-maska-reversed
        rules="required|max:25"
      >
        <template #icon>
          <span class="label__question" @click="fpOpen">?</span>
        </template>
      </UiField>
      <!-- v-maska
        data-maska="S#.##"
        data-maska-tokens="S:[0-9]:repeated"
        data-maska-reversed -->
      <UiField
        name="Sum"
        placeholder="Сумма"
        v-maska
        @input="sanitizeInput"
        rules="required"
      />
    </div>
    <div class="form__flex">
      <UiField name="TypeOperation" as="select" rules="required">
        <option value="" hidden>Тип операции</option>
        <option
          v-for="option in OPTIONS_OPERATION_TYPE"
          :key="option.value"
          :value="option.value"
        >
          {{ option.name }}
        </option>
      </UiField>
      <button class="btn">Проверить</button>
    </div>
  </form>
</template>

<script setup>
import moment from "moment";

const sanitizeInput = (event) => {
  let value = event.target.value;

  value = value.replace(/[^0-9.]/g, ""); // Удаляем все лишние символы
  value = value.replace(/^0+(\d)/, "$1"); // Убираем ведущие нули

  // Оставляем только одну точку
  const parts = value.split(".");
  if (parts.length > 2) value = parts[0] + "." + parts.slice(1).join("");

  // Ограничиваем до 2 знаков после точки
  if (parts.length === 2) {
    parts[1] = parts[1].substring(0, 2); // Берем только 2 символа после точки
    value = parts.join(".");
  }

  event.target.value = value;
};

const props = defineProps({
  onSubmit: Function,
  fnOpen: Function,
  fdOpen: Function,
  fpOpen: Function,
});
</script>
