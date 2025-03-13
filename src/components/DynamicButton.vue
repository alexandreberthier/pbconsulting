<template>
  <component
      :is="isLink ? 'router-link' : 'div'"
      v-bind="isLink ? { to: { name: link?.name, hash: link?.hash || '' } } : {}"
      role="button"
      :class="['button', {'forbidden' : isLoading}]"
  >
    <div v-if="isLoading" class="loader"></div>
    <p v-else>Send</p>
  </component>
</template>

<script setup lang="ts">
import type {ModelRef} from "vue";

export interface Link {
  name: string,
  hash?: string
}

const {isLink} = defineProps<{
  isLink?: boolean
  link?: Link
}>()

const isLoading: ModelRef<boolean> = defineModel('isLoading', {default: false})

</script>

<style scoped>

.button {
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 320px;
  height: 60px;
  background: var(--dark-green);
  border-radius: 4px;
  cursor: pointer;
  transition: all 250ms ease-in-out;
  box-sizing: border-box;
  gap: 32px;

  &.forbidden {
    pointer-events: none;
  }

  .loader {
    height: 24px;
    width: 24px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-top: 3px solid var(--white);
    border-right: 3px solid var(--white);
    animation: rotate 1s linear infinite;
  }

  &:hover, &:active {
    background: var(--dark-blue);
  }

  p {
    color: var(--white);
  }
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>