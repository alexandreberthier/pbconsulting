<template>
  <div class="section-wrapper">
    <HeroSection/>
    <AboutSection id="about"/>
    <ServicesSection id="services"/>
    <CustomerSection id="customers"/>
    <TeamSection id="team"/>
  </div>
</template>

<script setup lang="ts">
import HeroSection from "@/components/sections/HeroSection.vue";
import AboutSection from "@/components/sections/AboutSection.vue";
import ServicesSection from "@/components/sections/ServicesSection.vue";
import CustomerSection from "@/components/sections/CustomerSection.vue";
import TeamSection from "@/components/sections/TeamSection.vue";

</script>

<style scoped>
.section-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  margin-bottom: 100px;
}

@media (min-width: 740px) {
  .section-wrapper {
    gap: 80px;
  }
}

@media (min-width: 1200px) {
  .section-wrapper {
    gap: 120px;
  }
}


</style>
