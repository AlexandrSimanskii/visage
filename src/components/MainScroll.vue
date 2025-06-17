<template>
  <div class="scroll">
    <svg
      v-if="!isLastSection"
      @click="scrollToNextSection()"
      class="mouse"
      ref="mouse"
      width="40"
      height="27"
      viewBox="0 0 40 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="13" y="6" width="26" height="18" rx="9" stroke="white" />

      <path
        class="arrow arrowShow"
        d="M30 15 h5  M8 9 L1 15 M8 21 L1 15 "
        stroke="white"
        stroke-width="2"
      />
    </svg>

    <p class="scroll__text">{{ isLastSection ? "" : "листайте в низ" }}</p>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, useTemplateRef, computed } from "vue";
import { useCurrentSectionStore } from "@/stores/currentSection";

const store = useCurrentSectionStore();

const isLastSection = computed(() => {
  return store.currentSection === "LastSection" ? true : false;
});

const scrollToNextSection = () => {
  const htmlEl = document.querySelector(
    `section[data-section-nav="${store.currentSection}"]`
  );
  const nextSection = htmlEl?.nextElementSibling as HTMLElement;

  if (nextSection && nextSection.tagName === "SECTION") {
    nextSection.scrollIntoView({ behavior: "smooth" });
  }
};

let observer: IntersectionObserver | null = null;

onMounted(() => {
  const main = document.querySelector("main");

  if (!main) return;

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const HTMLElem = entry.target as HTMLElement;
          store.changeCurrentSection(HTMLElem.dataset.sectionNav || "");
        }
      });
    },
    {
      root: null,
      rootMargin: "-50% 0px -60% 0px",
      threshold: 0,
    }
  );
  const sections = Array.from(main.children).filter(
    (el) => el.tagName === "SECTION"
  );
  sections.forEach((section) => observer?.observe(section as HTMLElement));
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>

<style scoped lang="scss">
.scroll {
  color: #edd5d0;
  transform: translateY(-50%) rotate(-90deg);
  position: fixed;
  top: 50vh;
  display: flex;
  align-items: center;
  gap: 6px;
z-index: 100;
  & .mouse {
    cursor: pointer;
  }
}

.arrow {
  stroke-dasharray: 322;
  stroke-dashoffset: 322;
  fill: none;
}

.arrowShow {
  animation: draw 5s ease-in-out forwards;
}

@keyframes draw {
  to {
    stroke-dashoffset: 0;
  }
}
</style>
