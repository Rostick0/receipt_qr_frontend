<template>
  <div class="receipt">
    <div class="receipt__top">Чек успешно подтвержден ✅</div>
    <div class="receipt__center">
      <div class="text-size-default text-center">Тип операции</div>
      <div class="text-size-default">[Дата] и [Время]</div>
      <div class="">Смена […]</div>
      <div class="">Кассир […]</div>
      <ReceiptProducts />
      <div class="">
        <div class="flex justify-betweew font-bold">
          <span>Итого</span>
          <span>1 350,00</span>
        </div>
        <div class="flex justify-betweew">
          <span>Наличными</span>
          <span>1 350,00</span>
        </div>
        <div class="flex justify-betweew">
          <span>Безналичными</span>
          <span>0,00</span>
        </div>
        <div class="flex justify-betweew">
          <span>НДС 18%</span>
          <span>243,00</span>
        </div>
      </div>
      <div class="">
        <div class="font-bold">ООО «Золотой пяточок»</div>
      </div>
    </div>
    <div class="receipt__bottom">
      <button class="btn">
        <IconPrint />
        <span>Рапечатать</span>
      </button>
      <button class="btn">
        <IconDownload />
        <span>Сохранить как</span>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.receipt {
  position: fixed;
  width: 100%;
  max-width: 716px;
}
</style>
