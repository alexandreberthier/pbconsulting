<template>
  <section class="hero">
    <div class="image" :style="{ transform: `translateY(${smoothScrollY * 0.3}px)` }"></div>
    <div class="content">
      <h1 :style="{ transform: `translateY(${-smoothScrollY * 0.3}px)` }">
        35 years of experience in the hospitality industry – at your service.
      </h1>
    </div>
  </section>
</template>

<script setup lang="ts">

import {onMounted, onUnmounted, ref} from "vue";
import {getImage} from "@/utils/ImageUtils.ts";

const backgroundImage = ref(`url('${getImage('img_hero.jpg')}')`);

const scrollY = ref(0);
const smoothScrollY = ref(0);
let isTicking = false;

function updateScroll() {
  if (!isTicking) {
    isTicking = true;
    requestAnimationFrame(() => {
      scrollY.value = window.scrollY;
      smoothScrollY.value += (scrollY.value - smoothScrollY.value) * 0.1;
      isTicking = false;
    })
  }
}

onMounted(() => {
  scrollY.value = window.scrollY;
  window.addEventListener("scroll", updateScroll);
})

onUnmounted(() => {
  window.removeEventListener("scroll", updateScroll);
})

</script>

<style scoped>
.hero {
  width: 100%;
  height: 70vh;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 50px;

  .image {
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: v-bind(backgroundImage);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    z-index: -1;

    &:after {
      content: '';
      background: rgba(0, 0, 0, 0.4);
      position: absolute;
      width: 100%;
      height: 100%;
    }
  }

  .content {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      text-align: center;
      color: var(--white);
    }
  }

}



</style>