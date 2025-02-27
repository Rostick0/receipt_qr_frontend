<template>
  <div>
    <div class="border-bottom-gray color-gray flex gap-x-3 pb-1.5 mb-3">
      <div class="mr-auto">Предмет расчета</div>
      <div>Цена за ед., ₽</div>
      <div>Количество</div>
      <div>Сумма</div>
    </div>
    <div
      class="flex items-center gap-x-3"
      v-for="(product, index) in products"
      :key="product?.id"
    >
      <div class="mr-auto">
        Предмет №{{ index + 1 }} <br />
        {{ product?.name }} <br />
      </div>
      <div>{{ priceFormat(product?.price / 100) }}</div>
      <div>{{ product?.quantity }} шт.</div>
      <div>{{ priceFormat(product?.price / 100) }}</div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  products: Array,
});
</script>
