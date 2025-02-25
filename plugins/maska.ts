import { vMaska } from "maska/vue";

export default defineNuxtPlugin(async (nuxtApp) => {
  nuxtApp.vueApp.directive("maska", vMaska);
});
