<template>
  <div class="inp-wrapper">
    <div class="inp">
      <label :for="id">{{ computedConfig.label }}</label>
      <textarea
          v-if="computedConfig.type === 'textarea'"
          :name="computedConfig.label"
          :id="id"
          cols="30"
          rows="10">
      </textarea>
      <input v-else
          v-model="userInput"
          :type="computedConfig.type"
          :name="computedConfig.label"
          :id="id"
      >
    </div>
    <p class="error">{{ userError }}</p>
  </div>
</template>

<script setup lang="ts">

import {type Config, inputConfig, type InputType} from "@/components/InputType.ts";
import {computed, type ComputedRef, type ModelRef, watch} from "vue";

const {inputType} = defineProps<{
  inputType: InputType
}>()


const computedConfig: ComputedRef<Config> = computed(() => {
  return inputConfig.value[inputType]
})

const id = computed(() => `${computedConfig.value.label}-id`)
const dynamicInpHeight = computed(()=> {
  return computedConfig.value.type === 'textarea' ? '150px' : '60px'
})

const userInput: ModelRef<string | undefined> = defineModel('userInput')
const userError: ModelRef<string | undefined> = defineModel('userError')


watch(userInput, (newVal) => {
  const config = computedConfig.value;

  if (!config.validate) return;

  if (!newVal) {
    userError.value = undefined;
    return;
  }

  const input = newVal
  userError.value = config.validate(input) ? undefined : config.error;
})


</script>

<style scoped>

.inp-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  gap: 4px;

  .inp {
    height: v-bind(dynamicInpHeight);
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;

    label {
      font-size: 16px;
      position: absolute;
      top: -13px;
      left: 13px;
      box-sizing: border-box;
      background: var(--light-gray);
      padding: 1px 5px;
      border-radius: 4px;
      color: var(--dark-green)
    }

    input {
      height: inherit;
      width: 100%;
      box-sizing: border-box;
      border: 1px solid var(--dark-blue);
      border-radius: 4px;
      font-size: 16px;
      font-family: Kanit, sans-serif;
      padding: 0 16px;

      &:focus {
        outline: 2px solid var(--dark-blue);
      }
    }

    textarea {
      font-size: 16px;
      font-family: Kanit, sans-serif;
      width: 100%;
      box-sizing: border-box;
      border: 1px solid var(--dark-blue);
      border-radius: 4px;
      min-height: 180px;
      padding: 16px;
      &:focus {
        outline: 2px solid var(--dark-blue);
      }
    }
  }

  .error {
    font-size: 14px;
    color: var(--red)
  }

}

</style>