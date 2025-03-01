<template>
  <div class="receipt">
    <div class="receipt__print" ref="receiptPrint">
      <div class="receipt__top border-bottom-gray">
        <div class="h2 text-center">Чек успешно подтвержден ✅</div>
      </div>
      <div class="receipt__center">
        <div class="text-size-default text-center font-bold mb-1.5">
          {{ operationTypes[receipt?.content?.operationType] }}
        </div>
        <div class="text-size-default text-center mb-6">
          {{
            moment(receipt?.content?.dateTime?.replace("Z", "")).format(
              "DD.MM.YYYY HH:mm"
            )
          }}
        </div>

        <div class="mb-1.5">Смена {{ receipt?.content?.shiftNumber }}</div>
        <div class="" v-if="receipt?.content?.operator">
          Кассир {{ receipt?.content?.operator }}
        </div>
        <div class="my-6">
          <ReceiptProducts
            class="border-bottom-gray pb-3 mb-3"
            :products="receipt?.content?.items"
          />
          <div class="border-bottom-gray flex flex-col gap-y-1.5 pb-3">
            <div class="flex justify-between font-bold text-size-default">
              <span>Итого</span>
              <span>{{ priceFormat(receipt?.content?.totalSum / 100) }}</span>
            </div>
            <div class="flex justify-between">
              <span>Наличными</span>
              <span>{{
                priceFormat(receipt?.content?.cashTotalSum / 100)
              }}</span>
            </div>
            <div class="flex justify-between">
              <span>Безналичными</span>
              <span>{{
                priceFormat(
                  ((receipt?.content?.creditSum ?? 0) +
                    (receipt?.content?.ecashTotalSum ?? 0)) /
                    100
                )
              }}</span>
            </div>
            <div v-if="receipt?.content?.ndsNo" class="flex justify-between">
              <span>БЕЗ НДС</span>
              <span>{{ priceFormat(receipt?.content?.ndsNo / 100) }}</span>
            </div>
            <div v-if="receipt?.content?.nds0" class="flex justify-between">
              <span>НДС 0%</span>
              <span>{{ priceFormat(receipt?.content?.nds0 / 100) }}</span>
            </div>
            <div v-if="receipt?.content?.nds10" class="flex justify-between">
              <span>НДС 10%</span>
              <span>{{ priceFormat(receipt?.content?.nds10 / 100) }}</span>
            </div>
            <div v-if="receipt?.content?.nds18" class="flex justify-between">
              <span>НДС 20%</span>
              <span>{{ priceFormat(receipt?.content?.nds18 / 100) }}</span>
            </div>
          </div>
        </div>
        <div class="">
          <div class="font-bold">{{ receipt?.content?.user }}</div>
          <div class="grid grid-cols-2 gap-1.5 mt-6 max-sm:grid-cols-1">
            <div>
              ИНН {{ receipt?.content?.userInn }}
              {{ appliedTaxationTypes[receipt?.content?.appliedTaxationType] }}
            </div>
            <div>РН ККТ {{ receipt?.content?.kktRegId }}</div>

            <div>
              {{
                `${receipt?.content?.retailPlace ?? ""} ${
                  receipt?.content?.retailPlaceAddress ?? ""
                }`.trim()
              }}
            </div>
            <div>ФН № {{ receipt?.content?.fiscalDriveNumber }}</div>

            <div>ФД № {{ receipt?.content?.fiscalDocumentNumber }}</div>

            <span>ФП № {{ receipt?.content?.fiscalSign }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="receipt__bottom border-top-gray">
      <button class="receipt__btn btn" @click="printComponent">
        <IconPrint />
        <span>Рапечатать</span>
      </button>
      <button class="receipt__btn btn">
        <IconDownload />
        <span>Сохранить как</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import moment from "moment";

const props = defineProps({
  // receipt: Object,
});

const receiptPrint = ref();

const receipt = {
  id: 5286185079184489000,
  ofdId: "ofd8",
  receiveDate: "2024-05-07T11:09:34",
  subtype: "receipt",
  address:
    "391434,Россия,Рязанская область,Город Сасово г.о.,,Сасово город,,Пушкина улица,,дом 21,,,,",
  content: {
    messageFiscalSign: 9297328047305270000,
    code: 3,
    fiscalDriveNumber: "7281440701497843",
    kktRegId: "0007686971010105    ",
    userInn: "7716760301  ",
    fiscalDocumentNumber: 111740,
    dateTime: "2024-05-07T14:09:00Z",
    fiscalSign: 3623054715,
    shiftNumber: 143,
    requestNumber: 469,
    operationType: 1,
    totalSum: 8500,
    internetSign: "1",
    operator: null,
    operatorInn: null,
    properties: {
      propertyName: "trust_purchase_token",
      propertyValue:
        "d906bb0a0252018250e54f116fc6d569|hold_663a0bd06f9afb6d35d92e55",
      propertiesData: null,
      region: null,
      numberKkt: null,
      redefine_mask: null,
    },
    items: [
      {
        labelCodeProcesMode: "0",
        paymentAgentByProductType: "64",
        providerInn: "771877731946",
        itemsQuantityMeasure: "0",
        name: "Услуги курьерской доставки",
        price: 8500,
        quantity: 1,
        sum: 8500,
        nds: 6,
        paymentType: 4,
        productType: 1,
      },
    ],
    machineNumber: "whitespirit4h",
    cashTotalSum: 0,
    ecashTotalSum: 8500,
    prepaidSum: 0,
    creditSum: 0,
    provisionSum: 0,
    fnsUrl: "www.nalog.gov.ru",
    retailPlace: "taxi.yandex.ru",
    fiscalDocumentFormatVer: 4,
    nds18: 0,
    nds10: 0,
    nds0: 0,
    ndsNo: 8500,
    nds18118: 0,
    nds10110: 0,
    user: 'ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "ЯНДЕКС.ДОСТАВКА"',
    buyerPhoneOrAddress: "+79503288122",
    sellerAddress: "support@go.yandex.com",
    retailPlaceAddress:
      "391430, Россия, Рязанская обл., г. Сасово, ул. Пушкина, д. 21",
    appliedTaxationType: 1,
    region: "62",
    numberKkt: "00000003810558257925",
    redefine_mask: 0,
  },
};

const printComponent = () => printHtml(receiptPrint.value.innerHTML);
</script>

<style lang="scss" scoped>
.receipt {
  background-color: var(--color-white);
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 716px;
  height: 100%;
}

.receipt__print {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  overflow: auto;
}

.receipt__top {
  padding: 24px 48px;

  @media (max-width: 1024px) {
    padding: 16px 24px;
  }
}

.receipt__center {
  flex: 1 1 auto;
  padding: 24px 48px;
  overflow: auto;

  @media (max-width: 1024px) {
    padding: 16px 24px;
  }
}

.receipt__bottom {
  display: flex;
  justify-content: center;
  gap: 12px 24px;
  padding: 24px 48px;

  @media (max-width: 1024px) {
    padding: 16px 24px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
}

.receipt__btn {
  display: flex;
  align-items: center;
  column-gap: 6px;
  padding: 12px 48px;

  svg {
    flex-shrink: 0;
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
}
</style>
