/*
  Плагин toast
  Пример использования: const { $toast } = useNuxtApp();
*/

import Toast, { POSITION, useToast } from "vue-toastification";
export default defineNuxtPlugin(async (nuxtApp) => {
  nuxtApp.vueApp.use(Toast, {
    closeButton: false,
    hideProgressBar: true,
    icon: false,
    position: POSITION.BOTTOM_LEFT,
  });
  await import("vue-toastification/dist/index.css");
  await import("~/assets/scss/components/toast.scss");

  return {
    provide: {
      toast: useToast(),
    },
  };
});
