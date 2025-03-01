<template>
  <NuxtLink class="logo" to="/">
    <IconLogo class="logo__svg" />
    <span>Proverka-cheka.ru</span>
  </NuxtLink>
</template>

<style lang="scss" scoped>
.logo {
  font-family: "Titan One", serif;
  display: flex;
  align-items: center;
  column-gap: 24px;
  font-size: 64px;
  line-height: 1;
  letter-spacing: -0.03em;

  @media (max-width: 1280px) {
    column-gap: 12px;
    font-size: 40px;
  }

  @media (max-width: 1024px) {
    font-size: 24px;
    column-gap: 6px;
  }
}

.logo__svg {
  @media (max-width: 1280px) {
    width: 36px;
    height: 36px;
  }

  @media (max-width: 1024px) {
    width: 20px;
    height: 20px;
  }
}
</style>
