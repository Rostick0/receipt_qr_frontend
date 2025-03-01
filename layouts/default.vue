<template>
  <div class="wrapper">
    <header class="header">
      <div class="container">
        <div class="header__container">
          <Logo />
          <button class="hidden max-lg:block" title="Меню">
            <IconBurger class="" @click="isShowMenu = true" />
          </button>
          <div class="header__menu" :class="{ active: isShowMenu }">
            <button class="hidden max-lg:block" title="Закрыть">
              <IconCross class="header__cross" @click="isShowMenu = false" />
            </button>
            <nav class="header__nav">
              <NuxtLink class="header__nav_link text-size-default" to="/"
                >Главная</NuxtLink
              >
              <NuxtLink class="header__nav_link text-size-default none" to=""
                >О сервисе</NuxtLink
              >
              <NuxtLink class="header__nav_link text-size-default none" to=""
                >Личный кабинет</NuxtLink
              >
            </nav>
          </div>
        </div>
      </div>
    </header>
    <main class="main">
      <slot />
    </main>
    <footer class="footer">
      <div class="container">
        <div class="footer__container">
          <div class="">
            <div class="footer__title text-size-default">
              Способы связаться с нами
            </div>
            <div class="footer__list">
              <div class="footer__item">
                <span>Email</span>
                <a class="footer__link" :href="`mailto:${SITE_INFO.mail}`">{{
                  SITE_INFO.mail
                }}</a>
              </div>
              <div class="footer__item">
                <span>Telegram</span>
                <a
                  class="footer__link"
                  :href="`https://t.me/${SITE_INFO.telegram}`"
                  >{{ SITE_INFO.telegram }}</a
                >
              </div>
            </div>
          </div>
          <div class="">
            <div class="footer__title text-size-default">
              ООО «…» ИНН … © 2025
            </div>
            <div class="footer__item">
              <NuxtLink class="footer__link" to="/policy"
                >Политика конфиденциальности и обработки данных</NuxtLink
              >
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
const isShowMenu = ref();
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.header {
  background: var(--background-layout);
  color: var(--color-white);
  padding: 24px 0;

  a {
    color: var(--color-white);
  }

  @media (max-width: 1024px) {
    padding: 12px 0;
  }
}

.header__menu {
  @media (max-width: 1024px) {
    background: var(--background-layout);
    padding: 20px;
    position: fixed;
    transform: translateX(150%);
    transition: transform 0.75s ease;
    top: 0;
    right: 0;
    height: 100%;

    &.active {
      transform: translateX(0);
    }
  }
}

.header__container {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  @media (max-width: 1024px) {
    align-items: center;
  }
}

.header__cross {
  position: absolute;
  top: 6px;
  right: 6px;
}

.header__nav {
  display: flex;
  gap: 12px 25px;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
}

.header__nav_link {
  font-weight: 700;
  letter-spacing: var(--letter-spacing);

  &.none {
    cursor: no-drop;
    text-decoration: line-through;
    opacity: 0.5;
  }
}

.main {
  flex-grow: 1;
  padding: 48px 0;

  @media (max-width: 1024px) {
    padding: 12px 0;
  }
}

.footer {
  background: var(--background-layout);
  color: var(--color-white);
  padding: 24px 0;

  a {
    color: var(--color-white);
  }

  @media (max-width: 1024px) {
    padding: 6px 0;
  }
}

.footer__container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px 96px;

  @media (max-width: 1024px) {
    justify-content: space-between;
    column-gap: 48px;
  }
}

.footer__title {
  font-weight: 700;
  margin-bottom: 12px;

  @media (max-width: 1024px) {
    margin-bottom: 6px;
  }
}

.footer__item {
  display: flex;
  column-gap: 24px;

  @media (max-width: 1024px) {
    font-size: 12px;
  }
}

.footer__link {
  text-decoration: underline;
}
</style>
