<script setup lang="ts">
import HeaderApp from "./components/HeaderApp.vue";
import TopSection from "./components/sections/top_section/TopSection.vue";
import MainScroll from "@/components/MainScroll.vue";
import MainPaginator from "./components/MainPaginator.vue";
import VibeCoworcingSection from "./components/sections/VibeCoworcingSection.vue";
import KnowSelfSection from "./components/sections/KnowSelfSection.vue";
import LastSection from "@/components/sections/LastSection.vue";
import MapSection from "@/components/sections/MapSection.vue";
import SimpleDoSection from "@/components/sections/SimpleDoSection.vue";
import VibeSection from "./components/sections/vibe_section/VibeSection.vue";
import FooterApp from "./components/FooterApp.vue";
import { onMounted, useTemplateRef } from "vue";

const main = useTemplateRef("main");
</script>

<template>
  <header-app />
  <main ref="main">
    <main-scroll />
    <main-paginator />
    <top-section />
    <vibe-section />

    <map-section />
    <know-self-section />
    <simple-do-section />
    <vibe-coworcing-section />

    <last-section />
    <footer-app />
  </main>
</template>

<style scoped lang="scss"></style>
