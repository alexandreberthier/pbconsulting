<template>
  <section class="hero">
    <div
        class="image"
        :style="{
        transform: `translate3d(0, ${computedY}px, 0)`,
        backgroundImage: backgroundImage
      }"
    ></div>
    <div class="content">
      <h1>35 years of experience in the hospitality industry – at your service.</h1>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, computed } from 'vue';
import { getImage } from '@/utils/ImageUtils.ts';

const backgroundImage = ref(`url('${getImage('img_hero.jpg')}')`);
const scrollY = ref(window.scrollY);
const smoothScrollY = ref(window.scrollY);
let animationFrameId: number;

function update() {
  const diff = scrollY.value - smoothScrollY.value;
  if (Math.abs(diff) > 100) {
    smoothScrollY.value = scrollY.value;
  } else {
    smoothScrollY.value += diff * 0.1;
  }
  animationFrameId = requestAnimationFrame(update);
}

function handleScroll() {
  scrollY.value = window.scrollY;
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true });
  animationFrameId = requestAnimationFrame(update);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  cancelAnimationFrame(animationFrameId);
})

const computedY = computed(() => smoothScrollY.value * 0.3);
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
  padding: 50px;
  box-sizing: border-box;
}

.image {
  position: absolute;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  z-index: -1;
  will-change: transform;

  &:after {
    content: '';
    position: absolute;
    background: rgba(0,0,0, 0.5);
    height: 100%;
    width: 100%;
  }
}

.content {
  position: relative;
  z-index: 1;
  text-align: center;
  color: var(--white);

  h1 {
    color: var(--white)
  }
}
</style>
