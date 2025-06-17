<template>
  <ul class="pagination">
    <li
      :key="data"
      @click="liHandler(data)"
      class="pagination__li"
      :class="data === store.currentSection ? 'pagination__li_active' : ''"
      :data-section-nav="data"
      v-for="data in dataSets"
    ></li>
  </ul>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useCurrentSectionStore } from "@/stores/currentSection";
const store = useCurrentSectionStore();

const dataSets = ref<string[]>([]);
function liHandler(data: string) {
  const section = document.querySelector(`section[data-section-nav="${data}"]`);
  section?.scrollIntoView({ behavior: "smooth" });

  store.changeCurrentSection(data);
}

onMounted(() => {
  const main = document.querySelector("main");
  if (!main) return;

  const mainChildren = main.children;

  for (let child of mainChildren) {
    if (child.tagName === "SECTION" && child instanceof HTMLElement) {
      if (child.dataset.sectionNav)
        dataSets.value.push(child.dataset.sectionNav);
    }
  }
});
</script>

<style scoped lang="scss">
@use "/src/assets/style/variable" as *;
.pagination {
  position: fixed;
  top: 50vh;
  transform: translateY(-50%);
  right: 100px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  z-index: 1000;

  &__li {
    cursor: pointer;
    border-radius: 50%;
    width: 8px;
    height: 8px;
    background-color: #b1b1b3;
    &_active {
      position: relative;
      background-color: $theme-color;
      &::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 10px;
        height: 10px;
        border-radius: 50%;
        border: 1px solid $theme-color;
      }
    }
  }
}
</style>
