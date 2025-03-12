<template>
  <section class="section about">
    <h2>About Us</h2>
    <div class="content-wrapper">
      <div class="text">
        <p>PB Hotel Consulting is a globally operating hotel management consulting firm led by Pierre Berthier, a
          graduate of the prestigious Lausanne Hotel School.
        </p>
        <p>With over 30 years of experience – from the first position as a bellboy to leading international hotel chains
          – we set new standards in the hospitality and tourism industry
        </p>
        <p>
          Our extensive local expertise and innovative solutions ensure top-tier consulting and tailored strategies for your success.
        </p>
      </div>
      <div class="image">
        <img :src="getImage('img_about.png')" alt="">
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

import {getImage} from "@/utils/ImageUtils.ts";
</script>

<style scoped>

.about {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  .content-wrapper {
    display: flex;
    flex-direction: column;
    gap: 32px;

    .text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 8px;
    }

    .image {
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      border-radius: 8px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
}

@media (min-width: 740px) {
  .about {
    gap: 60px;

    .content-wrapper {
      display: flex;
      flex-direction: row;
      align-items: stretch;
      gap: 32px;

      .text {
        width: 50%;
      }

      .image {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
      }
    }
  }
}


</style>