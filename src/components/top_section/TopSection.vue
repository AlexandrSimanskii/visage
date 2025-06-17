<template>
  <section data-section-nav="TopSection" class="top-section">
    <div class="woomen">
      <div class="container">
        <div class="woomen__info">
          <h1>БЬЮТИ КОВОРКИНГ ДЛЯ <span>ПРИКЛАДНЫХ ЭСТЕТОВ</span> 4 СФЕР</h1>
          <p class="woomen-text">
            Занимайтесь любимым делом, зарабатывая
            <span>до 1 000 000 руб./год</span>, арендуя локации в одной из 2
            точек сети <span>Vibe Coworking</span>
          </p>
          <form class="form" @submit.prevent="">
            <div class="input-group">
              <div class="circle">
                <img src="/images/icons/phone.svg" alt="" />
              </div>
              <InputMask
                id="basic"
                v-model="phone"
                mask="+7 (999)-999-99-99"
                placeholder="+7(___)___-__-__"
              />
            </div>

            <button-app @click="formHandler">заказать</button-app>
          </form>
        </div>
        <top-stars />
      </div>
    </div>
    <div class="chair">
      <div class="container">
        <h1 class="chair__title">
          ВРЕМЯ ОТКРЫТЬ НОВОЕ ДЕЛО В <span>НОВОМ ПРОСТРАНСТВЕ</span>
        </h1>

        <div class="chair__content">
          <div class="content__image"></div>
          <div class="content__text">
            <p>
              Нам обидно слышать истории, где талантливая фея сферы красоты
              отдает салону примерно 60% выручки. Искренне считаем, что
              бьюти-предприниматели достойны большего. Поэтому создали место,
              помогающее работать и тратить прибыль только на себя.
            </p>
            <p>
              Сдаем кабинеты для косметологов, массажистов, бровистов,
              лэшмейкеров от 500 руб./час. Без переплат, в оборудованном всем
              необходимым помещении.<br />
              Арендуйте на любой срок и уже завтра принимайте клиентов в
              современном коворкинге.
            </p>

            <button-app>забронировать</button-app>
          </div>
        </div>
      </div>
    </div>

    <!-- <top-decor></top-decor> -->
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ButtonApp from "../common/ButtonApp.vue";
import TopStars from "./TopStars.vue";
import InputMask from "primevue/inputmask";
const phone = ref();
const formHandler = () => {
  if (phone.value.length < 1223) return;
};
</script>

<style scoped lang="scss">
@use "/src/assets/style/variable.scss" as *;
section {
  background-color: #363338;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.woomen {
  width: 100%;
  background-image: url("/images/image/main_screen.png");
  background-size: contain;
  background-repeat: no-repeat;
  &__info {
    max-width: 560px;
    margin: 300px 0;
  }
  &-text {
    margin: 26px 0 43px 0;
    font-size: 18px;
    font-weight: 400;
    line-height: 26px;
    & span:first-child {
      color: $theme-color;

      font-weight: 700;
    }
    & :last-child {
      text-transform: uppercase;
    }
  }
}
form {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 14px;
  &-input {
    margin-left: 3px;
    width: 344px;
  }
}
.chair {
  text-align: center;
  background-image: url("/images/image/Fram.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: left;
  position: relative;
  padding-top: 400px;
  width: 100%;
  
  &__title {
    display: block;
    text-align: center;
    max-width: 820px;
  }
  &__content {
    width: 380px;
  }
}
.chair__content {
  width: 100%;

  display: flex;
}
.content {
  &__image {
    height: 100%;

    width: 50%;
    height: 500px;
  }
  &__text {
    width: 50%;
  }
}

.input {
  &-group {
    width: 350px;
    padding: 20px 30px;
    background-color: white;
    border-radius: 7px;
    color: #9d9db0;
    display: flex;
    gap: 10px;
  }
}
.circle {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $theme-color;
  width: 32px;
  height: 32px;
  border-radius: 50%;
}
#basic {
  border-left: 1px solid #f0f0f0;
  background-color: white;
  padding-left: 23px;
  color: #9d9db0;
}
</style>
