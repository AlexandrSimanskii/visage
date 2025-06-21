<template>
  <div class="swiper-box">
    <div class="navigation">
      <button class="prev">
        <svg
          width="12"
          height="22"
          viewBox="0 0 12 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            class="prev-arrow"
            d="M11.7071 2.20718L10.2929 0.792969L0.0857716 11.0001L10.2929 21.2072L11.7071 19.793L2.91499 11.0001L11.7071 2.20718Z"
            fill="none"
          />
        </svg>
      </button>
      <button class="next">
        <svg
          width="12"
          height="22"
          viewBox="0 0 12 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path class="next-arrow" d="M1 1.5L10.5 11L1 20.5" stroke-width="2" />
        </svg>
      </button>
    </div>
    <swiper-container
      class="mySwiper"
      navigation-next-El=".next"
      navigation-prev-El=".prev"
      slides-per-view="auto"
      centered-slides="true"
      space-between="30"
    >
      <swiper-slide>
        <div class="slide">
          <h1>
            <span> VIBE COWORKING НА НОВОМ АРБАТЕ:</span> СВЕТЛЫЕ ТОНА И
            ДЕЛИКАТНЫЕ АКЦЕНТЫ
          </h1>
          <p>
            Благородные белые оттенки доставят эстетическое удовольствие и вам,
            и клиентам. Тем более, что поддержание чистоты — зона
            ответственности клининговой службы, мастера следят лишь за своим
            рабочим местом.
          </p>
          <span>01</span>
        </div>
      </swiper-slide>
      <swiper-slide
        ><div class="slide">
          <h1>
            <span>ФИЛИАЛ НА ТРЕТЬЯКОВСКОЙ</span> С ИНТЕРЬЕРОМ В СТИЛЕ МОДЕРН
          </h1>
          <p>
            Благородные белые оттенки доставят эстетическое удовольствие и вам,
            и клиентам. Тем более, что поддержание чистоты — зона
            ответственности клининговой службы, мастера следят лишь за своим
            рабочим местом.
          </p>
          <span>03</span>
        </div></swiper-slide
      >
      <swiper-slide
        ><div class="slide">
          <h1>
            <span>32 VIBE COWORKING НА НОВОМ АРБАТЕ:</span> СВЕТЛЫЕ ТОНА И
            ДЕЛИКАТНЫЕ АКЦЕНТЫ
          </h1>
          <p>
            Благородные белые оттенки доставят эстетическое удовольствие и вам,
            и клиентам. Тем более, что поддержание чистоты — зона
            ответственности клининговой службы, мастера следят лишь за своим
            рабочим местом.
          </p>
          <span>02</span>
        </div></swiper-slide
      >
    </swiper-container>
  </div>
</template>

<script setup lang="ts">
import { register } from "swiper/element/bundle";

register();
</script>

<style scoped lang="scss">
@use "/src/assets/style/variable" as *;
section {
  padding-top: 145px;
}
h1 {
  height: 176px;
  overflow-y: hidden;
  margin-bottom: 24px;
}
.swiper-box {
  position: relative;
}
swiper-container {
  width: 100%;
  height: 100%;
}

swiper-slide {
  position: relative;
  text-align: center;
  font-size: 18px;
  width: 900px;
  padding: 0 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & h1 {
    position: relative;
    z-index: 10;
  }
}
.slide {
  position: relative;
  padding-top: 100px;
  & > span {
    position: absolute;
    left: -30px;
    top: -20px;
    font-size: 300px;
    color: #f4f4f4;
  }
}
.navigation {
  width: 900px;
  display: flex;
  justify-content: space-between;
  position: absolute;
  z-index: 100;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
}

.prev,
.next {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 77px;
  height: 77px;
  border: 1px solid $theme-color;
  font-size: 20px;
  background-color: white;
  border-radius: 50%;
  transition: 900ms;
}
.next-arrow {
  stroke: $theme-color;
}
.prev-arrow {
  fill: $theme-color;
}

.swiper-button-disabled {
  transition: 900ms;
  transform: scale(0.5);

  & .prev-arrow {
    fill: $slider-nav-color;
  }
  & .next-arrow {
    stroke: $slider-nav-color;
  }
  &.next {
    border-color: $slider-nav-color;
  }
  &.prev {
    border-color: $slider-nav-color;
  }
}
</style>
