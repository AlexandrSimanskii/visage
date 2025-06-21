<template>
  <section data-section-nav="VibeSection">
    <div class="content"><vibe-top-navigation /> <vibe-video />
    <vibe-bottom/>
    </div>

    <img class="flower" src="/images/image/flower.png" alt="" />
    <svg
      class="wave wave-top"
      viewBox="0 0 349 11"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M174.5 0C248.674 0 349 11 349 11H0C0 11 100.326 0 174.5 0Z" />
    </svg>

    <svg
      class="wave wave-bottom"
      viewBox="0 0 949 116"
      preserveAspectRatio="none"
      fill="#D9D9D9"
      stroke-width="3"
      stroke="#D9D9D9"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M948 1.00001V114.5C948 114.5 671.819 2.65633 485.268 1.00001L476.999 1.00001C290.461 2.69761 1 114.5 1 114.5V1.00001L476.999 1.00001C477 1.00001 477 1.00001 477 1.00001C479.735 0.975115 482.492 0.975361 485.268 1.00001L948 1.00001Z"
      />
      <path
        d="M948 1.00001V114.5C948 114.5 663.538 -0.697374 477 1.00001C290.462 2.69738 1 114.5 1 114.5V1.00001L948 1.00001Z"
      />
    </svg>
  </section>
</template>

<script setup lang="ts">
import VibeTopNavigation from "./VibeTopNavigation.vue";
import VibeVideo from "./VibeVideo.vue";
import VibeBottom from "./VibeBottom.vue";
</script>

<style scoped lang="scss">
section {
  position: relative;
}
.flower {
  position: absolute;
  left: 0;
  top: 100px;
  
}
</style>
