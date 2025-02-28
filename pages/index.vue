<template>
  <div class="container">
    <div class="main-page">
      <div class="">
        <h1 class="h2 mb-1.5">Поиск чека</h1>
        <p class="mb-6">
          Введите номер фискального накопителя (ФН), номер фискального документа
          (ФД) и значение фискального признака (ФП), которые указаны на чеке.
          Для корректной проверки чека необходимо заполнить все поля на форме.
        </p>
        <ScanForm
          :onSubmit="onSubmit"
          :fnOpen="fnOpen"
          :fdOpen="fdOpen"
          :fpOpen="fpOpen"
        />
        <ScanActions @scan="fetchCheck" />
        <p class="color-gray mt-6">
          Загружая фискальный документ (чек) на наш сервис, вы соглашаетесь с
          <NuxtLink class="color-gray underline" to="/policy"
            >политикой конфиденциальности и обработки данных</NuxtLink
          >
        </p>
      </div>
      <div class="">
        <ImportantInfo />
      </div>
    </div>
  </div>
  <UiModalHint :nameModal="fdModal" :close="fdClose">
    <div class="modal-hint__text">
      Ниже показано где расположен на чеке номер фискального накопителя (ФД)
    </div>
    <NuxtImg
      class="modal-hint__img"
      src="/images/fd.png"
      alt="ФН"
      decoding="async"
      loading="lazy"
      width="338"
      height="706"
    />
  </UiModalHint>
  <UiModalHint :nameModal="fnModal" :close="fnClose">
    <div class="modal-hint__text">
      Ниже показано где расположен на чеке номер фискального накопителя (ФН)
    </div>
    <NuxtImg
      class="modal-hint__img"
      src="/images/fn.png"
      alt="ФН"
      decoding="async"
      loading="lazy"
      width="338"
      height="706"
    />
  </UiModalHint>
  <UiModalHint :nameModal="fpModal" :close="fpClose">
    <div class="modal-hint__text">
      Ниже показано где расположен на чеке номер фискального накопителя (ФП)
    </div>
    <div class="modal-hint__text_other">Иногда может быть ФПД вместо ФП</div>
    <NuxtImg
      class="modal-hint__img"
      src="/images/fp.png"
      alt="ФН"
      decoding="async"
      loading="lazy"
      width="338"
      height="706"
    />
  </UiModalHint>
  <Transition name="go-right">
    <div v-if="true || isShowReceipt" class="receipt-modal">
      <button @click="isShowReceipt = false" class="receipt-modal__close">
        <IconArrow />
      </button>
      <LazyReceipt :receipt="receipt" />
    </div>
  </Transition>
</template>

<script setup>
import moment from "moment";
import { useForm } from "vee-validate";

const receipt = ref();
const { handleSubmit } = useForm();

const isShowReceipt = ref();

const fetchCheck = async (values) => {
  try {
    const res = await $fetch("https://proverka-cheka.ru/ticket/send", {
      method: "post",
      // body: new URLSearchParams(values),
      body: new URLSearchParams({
        Date: "20240507T140900",
        Sum: 85.0,
        Fn: 7281440701497843,
        FiscalDocumentId: 111740,
        FiscalSign: 3623054715,
        TypeOperation: 1,
      }).toString(),
    });

    receipt.value = res?.fiscalDocument;
  } catch {
    console.log(5);
  }
};

const onSubmit = handleSubmit(async ({ Date, Time, ...values }) => {
  await fetchCheck({
    ...values,
    Date: moment(Date + " " + Time).format("YMMDDTHHmmss"),
  });
  // console.log(res);
  // const res = await useFetch({
  //   url: "https://proverka-cheka.ru/ticket/send",
  //   body: values,
  // });
  // console.log(res);
  // const res = await $fetch.create({
  // })
});

const fnModal = "fnModal";
const { open: fnOpen, close: fnClose } = useModal({
  name: fnModal,
});

const fdModal = "fdModal";
const { open: fdOpen, close: fdClose } = useModal({
  name: fdModal,
});

const fpModal = "fpModal";
const { open: fpOpen, close: fpClose } = useModal({
  name: fpModal,
});

watch(
  () => receipt.value,
  (cur) => {
    console.log(5);
    isShowReceipt.value = true;
  }
  // {
  //   deep: true,
  // }
);
</script>

<style lang="scss" scoped>
.main-page {
  display: flex;
  grid-gap: 24px 48px;

  & > div {
    flex-basis: calc(50% - 24px);
  }

  @media (max-width: 1024px) {
    column-gap: 24px;

    & > div {
      flex-basis: calc(50% - 12px);
    }
  }
}

.receipt-modal {
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  // transform: translateX(150%);
  max-width: 100vw;
  height: 100%;
}

.receipt-modal__close {
  background: rgba(51, 51, 51, 1);
  border-radius: 50%;
  display: flex;
  padding: 12px 13px;
  position: absolute;
  left: 0;
  transform: translateX(-50%);
  z-index: 1;
}
</style>
