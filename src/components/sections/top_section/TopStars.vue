<template>
  <div class="stars">
    <div class="star-group">
      <div class="star">
        <img src="/images/icons/Star.svg" alt="star" />
      </div>
      <div class="number">01</div>
      <div class="text">Регулируемые кушетки и стулья</div>
    </div>

    <div class="star-group">
      <div class="star">
        <img src="/images/icons/Star.svg" alt="star" />
      </div>
      <div class="number">01</div>
      <div class="text">Регулируемые кушетки и стулья</div>
    </div>

    <div class="star-group">
      <div class="star">
        <img src="/images/icons/Star.svg" alt="star" />
      </div>
      <div class="number">01</div>
      <div class="text">Регулируемые кушетки и стулья</div>
    </div>

    <div class="star-group">
      <div class="star">
        <img src="/images/icons/Star.svg" alt="star" />
      </div>
      <div class="number">01</div>
      <div class="text">Регулируемые кушетки и стулья</div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@use "/src/assets/style/variable.scss" as *;
.stars {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  &__decoration {
    width: 100%;
    position: absolute;
    display: flex;
    justify-content: space-around;
  }
}
.star {
  display: flex;
  position: absolute;
  z-index: 3;
  top: 0;
  left: 0;
  width: 84px;
  height: 84px;

  &-group {
   
    text-align: center;
    position: relative;
    width: 196px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    &:nth-child(odd) {
      &::after {
        content: "";
        width: 206px;
        height: 206px;
        border-radius: 50%;

        border-top: 1px solid $theme-color;
        position: absolute;
        top: 0;
        right: 0;
        transform: translateX(80%);
      }
    }
    &:nth-child(2) {
      &::after {
        content: "";
        width: 216px;
        height: 216px;
        border-radius: 50%;

        border-bottom: 1px solid $theme-color;
        position: absolute;
        top: 0;
        right: 0;
        transform: translateX(80%);
      }
    }
    &:nth-child(even) {
      transform: translateY(50%);
    }
  }

  & img {
    width: 100%;
  }
  &::after {
    content: url("/public/images/icons/star_armchair.svg");
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
.text {
  font-size: 18px;
  position: relative;
  z-index:2;
}
.number {
  color: #696975;
  font-size: 80px;
  position: relative;
  z-index: 2;
}
.semicircle {
  width: 215px;
  height: 215px;
  border-top: 1px solid #e13838;
  border-radius: 50%;
}
</style>
