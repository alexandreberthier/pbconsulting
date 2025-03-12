<template>
  <div
      role="button"
      class="button"
  >
    <p>Send</p>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

.button {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  background: var(--dark-green);
  border-radius: 4px;
  cursor: pointer;

  p {
    color: var(--white)
  }
}

</style>