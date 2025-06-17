import { defineStore } from "pinia";
import { ref } from "vue";

export const useCurrentSectionStore = defineStore("current-section", () => {
  const currentSection = ref("");

  function changeCurrentSection(data: string) {
    currentSection.value = data;
  }

  return { currentSection, changeCurrentSection };
});
