<template>
  <div class="video-box">
    <div class="video-wrapper" @click="playVideo">
      <div class="video-preview" v-if="!isPlaying">
        <button class="play-button">
          <img src="/public/images/icons/play.svg" alt="" />
        </button>
      </div>

      <iframe
        v-else
        width="1055"
        height="540"
        :src="videoUrl"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>

    <div class="description">
      <h2>Вот, в каких локациях будут создаваться ваши лучшие работы:</h2>
      <ul>
        <li>
          <div class="list-group">
            <img src="/images/icons/check_mark.png" alt="mark" /> 10 кабинетов и
            4 места в общем зале;
          </div>
          <div class="list-group">
            <img src="/images/icons/check_mark.png" alt="mark" /> стественный
            свет из панорамных окон;
          </div>
        </li>

        <li>
          <div class="list-group">
            <img src="/images/icons/check_mark.png" alt="mark" /> приятный
            искусственный свет;
          </div>
          <div class="list-group">
            <img src="/images/icons/check_mark.png" alt="mark" /> шикарный вид
            на Москву.
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isPlaying = ref(false);
const videoUrl =
  "https://www.youtube.com/embed/UsEBH7EZm4o?autoplay=1&rel=0&modestbranding=1";

function playVideo() {
  isPlaying.value = true;
}
</script>

<style scoped lang="scss">
@use "/src/assets/style/variable.scss" as *;
.video-wrapper {
  position: relative;
  z-index: 1;
  width: 720px;
  height: 395px;
  margin: 0 auto;
  cursor: pointer;
}

.video-preview {
  position: relative;
  z-index: 1;
  background-image: url("/public/images/image/preview_img.png");
  width: 100%;
  height: 100%;

  border-radius: 2px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

.play-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(223, 196, 196, 0.7);
  border: none;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  font-size: 32px;
  cursor: pointer;
  transition: background-color 0.8s;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid $theme-color;
  &:hover {
    background-color: rgb(239, 236, 236);
    transition: 0.8s;
  }
  & img {
    width: 15px;
    position: relative;
    transform: translateX(3px);
  }
}

.video-box {
  margin: 100px;
  padding: 40px;
  position: relative;
  text-align: center;
  margin: 0 auto;
  width: 1055px;

  &::after {
    content: url("/images/icons/pattern_right.png");
    position: absolute;
    right: 0;
    top: 0;
    width: 300px;
    height: 300px;
  }
  &::before {
    content: url("/images/icons/pattern_left.png");
    position: absolute;
    left: 0;
    top: 35%;
    width: 300px;
    height: 300px;
  }
}
iframe {
  position: relative;
  z-index: 1;
  width: 720px;
  height: 395px;
}
.description {
  width: 720px;
  text-align: center;
  margin: 61px auto 0;
}
h2 {
  color: #34343f;
  font-size: 22px;
  font-weight: 400;
  margin-bottom: 23px;
}

ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  & li {
    & .list-group {
      display: flex;
      justify-content: start;
      gap: 5px;
      margin-bottom: 10px;
    }
    & img {
      width: 19px;
      height: 19px;
    }
  }
}
</style>
