<template>
  <section class="about">
    <div class="text">
      <p>PB Hotel Consulting ist ein international agierendes Hotelmanagement-Beratungsunternehmen unter der Leitung von
        Pierre Berthier, Absolvent der renommierten Lausanne Hotel School.
      </p>
      <p> Mit über 30 Jahren Erfahrung – von der ersten
        Position als Bell Boy bis hin zur Führung internationaler Hotelketten – setzen wir Maßstäbe in der Hospitality-
        und Tourismusbranche.
      </p>
      <p>
        Unser umfassendes lokales Know-how und unsere innovativen Lösungsansätze garantieren Ihnen
        erstklassige Beratung und individuelle Strategien für Ihren Erfolg.
      </p>
    </div>
    <div class="image">
      <img :src="getImage('img_about.png')" alt="">
    </div>
  </section>
</template>

<script setup lang="ts">

import {getImage} from "@/utils/ImageUtils.ts";
</script>

<style scoped>

.about {
  width: calc(100% - 54px);
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
      height: auto;
    }
  }
}

@media (min-width: 740px) {
  .about {
    width: 700px;
    flex-direction: row;
    gap: 32px;

    .text {
      width: 50%;
    }

    .image {
      width: 50%;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
}

@media (min-width: 1200px) {
  .about {
    width: 1050px;
    flex-direction: row;
    align-items: center;
    gap: 60px;

    .text {
      gap: 16px;
    }
  }
}

@media (min-width: 1440px) {
  .about {
    width: 1240px;

    .text {
      gap: 16px;
    }
  }
}

</style>