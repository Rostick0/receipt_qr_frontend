<template>
  <div class="form__flex">
    <button class="btn" @click="open">
      <span class="btn__top">
        <span>Проверить</span>
        <IconQrCode />
      </span>
      <span class="text-size-small color-gray"
        >Подготовке вашу веб-камеру или заднею камеру телефона</span
      >
    </button>
    <label class="btn">
      <span class="btn__top">
        <span>Загрузить чек</span>
        <IconPicture />
      </span>
      <span class="text-size-small color-gray"
        >Выберите файл в формате bmp, gif, jpeg, png, tiff, pdf</span
      >
      <input @change="onChangeFile" type="file" hidden />
    </label>
  </div>

  <UiModal :name="scanModal" typeShow>
    <UiModalContent class="scan-content">
      <div class="scan-video" :id="tagId"></div>
    </UiModalContent>
  </UiModal>
</template>

<script setup>
const { Html5Qrcode } = await import("html5-qrcode");
import debounce from "lodash/debounce";
import moment from "moment";
const tagId = useId();

const scanModal = "scanModal";
const { open, close, isActive } = useModal({ name: scanModal });

const emits = defineEmits(["scan"]);

const htmlscanner = ref();

const scanSuccess = debounce((decode) => {
  const query = {
    Date: "",
    Sum: "",
    Fn: "",
    FiscalDocumentId: "",
    FiscalSign: "",
    TypeOperation: "",
  };
  const decodedData = getParamsFromQuery(decode);

  query.Date = moment(decodedData?.t).format("YMMDDTHHmmss");
  query.Sum = decodedData?.s;
  query.Fn = decodedData?.fn;
  query.FiscalDocumentId = decodedData?.i;
  query.FiscalSign = decodedData?.fp;
  query.TypeOperation = decodedData?.n;

  emits("scan", query);
  close();
}, 250);

const onChangeFile = async (e) => {
  const imageFile = e.target.files[0];

  htmlscanner.value
    .scanFileV2(imageFile, false)
    .then((scanRes) => scanSuccess(scanRes?.decodedText))
    .catch((err) => {
      // failure, handle it.
      alert(`Ошибка сканирования: чек не найден`);
    });
};

onMounted(() => {
  htmlscanner.value = new Html5Qrcode(tagId, {
    fps: 10,
    qrbos: 250,
  });
});

onUnmounted(() => {
  if (htmlscanner.value?.isScanning) htmlscanner.value?.stop();
});

watch(
  () => isActive.value,
  (cur) => {
    if (cur) {
      htmlscanner.value?.start(
        { facingMode: "environment" },
        {
          fps: 10,
          qrbos: 250,
        },
        scanSuccess
      );
      return;
    }

    htmlscanner.value?.stop();
  }
);
</script>

<style lang="scss" scoped>
.scan-content {
  width: 100%;
  max-width: 800px;
}

.scan-video {
  width: 100%;
}
</style>
