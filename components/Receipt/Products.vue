<template>
  <table>
    <tr>
      <th>Предмет расчета</th>
      <th>Цена за ед., ₽</th>
      <th>Количество</th>
      <th>Сумма</th>
    </tr>
    <tr>
      <td>Предмет №1 Товар. Полный расчет НДС %18 243,00</td>
      <td>150,00</td>
      <td>9 шт.</td>
      <td>1 350,00</td>
    </tr>
  </table>
</template>

<script setup>
const props = defineProps({
  products: Array,
});
</script>
