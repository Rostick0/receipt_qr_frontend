<template>
  <div class="container">
    <div class="main-page">
      <div class="">
        <h1 class="h2 mb-1.5">Поиск чека</h1>
        <p>
          Введите номер фискального накопителя (ФН), номер фискального документа
          (ФД) и значение фискального признака (ФП), которые указаны на чеке.
          Для корректной проверки чека необходимо заполнить все поля на форме.
        </p>
        <ScanForm :onSubmit="onSubmit" />
        <ScanActions @scan="fetchCheck" />
        <p>
          Загружая фискальный документ (чек) на наш сервис, вы соглашаетесь с
          <NuxtLink to="/policy"
            >политикой конфиденциальности и обработки данных</NuxtLink
          >
        </p>
      </div>
      <div class="">
        <ImportantInfo />
      </div>
    </div>
  </div>
</template>

<script setup>
import moment from "moment";
import { useForm } from "vee-validate";

const { handleSubmit } = useForm();

const fetchCheck = async (values) => {
  try {
    const res = await $fetch("https://proverka-cheka.ru/ticket/send", {
      method: "post",
      body: new URLSearchParams(values),
      // body: new URLSearchParams({
      //   // Date: "20240507T140900",
      //   // Sum: 85.0,
      //   // Fn: 7281440701497843,
      //   // FiscalDocumentId: 111740,
      //   // FiscalSign: 3623054715,
      //   // TypeOperation: 1,
      //   // ...values,
      //   // Date: moment(Date + " " + Time).format("YMMDDTHHmmss"),
      // }).toString(),
    });
  } catch {
    console.log(5);
  }
};

const onSubmit = handleSubmit(async ({ Date, Time, ...values }) => {
  // await fetchCheck()
  // console.log(res);
  // const res = await useFetch({
  //   url: "https://proverka-cheka.ru/ticket/send",
  //   body: values,
  // });
  // console.log(res);
  // const res = await $fetch.create({
  // })
});
</script>

<style lang="scss" scoped>
.main-page {
  display: flex;
  grid-gap: 24px 48px;

  & > div {
    flex-basis: calc(50% - 24px);
  }
}
</style>
