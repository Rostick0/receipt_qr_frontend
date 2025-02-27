<template>
  <div class="wrapper">
    <header class="header">
      <div class="container">
        <div class="header__container">
          <Logo />
          <nav class="header__nav">
            <NuxtLink class="header__nav_link" to="/">Главная</NuxtLink>
            <NuxtLink class="header__nav_link none" to="">О сервисе</NuxtLink>
            <NuxtLink class="header__nav_link none" to=""
              >Личный кабинет</NuxtLink
            >
          </nav>
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
            <div class="footer__title">Способы связаться с нами</div>
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
            <div class="footer__title">ООО «…» ИНН … © 2025</div>
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

.header__container {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
}

.header__nav {
  display: flex;
  column-gap: 25px;
}

.header__nav_link {
  font-size: 20px;
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
  column-gap: 96px;
}

.footer__title {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 12px;

  @media (max-width: 1024px) {
    font-size: 16px;
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
