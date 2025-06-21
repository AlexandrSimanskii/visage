<template>
  <div class="carusel">
    <div class="wrapper">
      <div class="slider-block">
        <div class="photo">
          <div class="frame">
            <img class="top-wave" src="/images/icons/top_wave.svg" alt="" />

            <img
              class="bottom-wave"
              src="/images/icons/photo-wave.svg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="content">
        <h3 class="content__title">Рабочее место для бровиста</h3>
        <p class="content__text">
          Нам обидно слышать истории, где талантливая фея сферы красоты отдает
          салону примерно 60% выручки.
        </p>
        <div class="buttons">
          <button-app tap>ЗАБРОНИРОВАТЬ </button-app>
          <button>УЗНАТЬ БОЛЬШЕ</button>
        </div>
      </div>
    </div>

    <div class="navigation">
      <div class="navigation__group">
        <button class="nav__btn">
          <img
            class="arrow arrow_prev"
            src="/images/icons/arrow-prev.svg"
            alt=""
          />
        </button>
        <p><span>01</span>/07</p>
        <button class="nav__btn">
          <img class="arrow" src="/images/icons/arrow-prev.svg" alt="" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ButtonApp from "@/components/common/ButtonApp.vue";
</script>

<style scoped lang="scss">
@use "/src/assets/style/variable.scss" as *;
.wrapper {
  display: flex;
  justify-content: space-between;
  gap: 64px;
  max-width: 1200px;
  margin: 0 auto;
}
.carusel {
  padding: 30px;
}
.photo {
  width: 519px;
  height: 381px;
  padding: 12px;

  border-top: 0px;
  box-shadow: 0px 2px 3px 0px rgba(34, 60, 80, 0.2);
}
.frame {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: calc(100% - 20px);
  background-image: url("/images/image/Bitmap.png");
  margin: 0 auto;
}

.top-wave {
  position: absolute;
  top: -1px;
  left: -2px;
  width: calc(100% + 4px);
  height: 12px;
}
.bottom-wave {
  position: absolute;
  bottom: -1px;
  width: 100%;
  height: 12px;
}
.content {
  &__title {
    font-size: 40px;
    line-height: 32px;
    margin-bottom: 20px;
  }
  &__text {
    line-height: 26px;
    color: #34343f;
    margin-bottom: 42px;
  }
}
.buttons {
  display: flex;
  align-items: center;
  gap: 48px;

  & button {
    font-size: 14px;
    font-weight: 700;
    color: $theme-color;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
}

.navigation {
  &__group {
    display: flex;
    align-items: center;
    gap: 50px;
  }
}
.nav__btn {
  height: 27px;
  width: 27px;
  border-radius: 50%;
  border: 1px solid #dedee5;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
}
.arrow {
  position: relative;
  left: 1px;
  height: 13px;
  &_prev {
    transform: rotate(180deg);
  }
}
</style>
