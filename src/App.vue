<template>
  <div class="app">
    <nav>
      <Navbar/>
    </nav>
    <main>
      <RouterView></RouterView>
    </main>
    <footer>
      <Footer id="contact"/>
    </footer>
  </div>
</template>

<script setup lang="ts">

import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
</script>

<style scoped>

.app {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
}

nav {
  position: fixed;
  width: 100%;
  z-index: 100;
}

main {
  margin-top: 100px;
  flex-grow: 1;
  width: 100%;
}

footer {
  width: 100%;
}

</style>