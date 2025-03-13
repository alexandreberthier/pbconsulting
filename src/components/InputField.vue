<template>
  <div class="inp-wrapper">
    <div v-if="computedConfig.type === 'textarea'" class="area">
      <label :for="id">{{ computedConfig.label }}</label>
      <textarea
          v-model="userInput"
          :name="computedConfig.label"
          :id="id"
          cols="30"
          rows="8">
      </textarea>
    </div>
    <div v-else class="inp">
      <label :for="id">{{ computedConfig.label }}</label>
      <input
          v-model="userInput"
          :type="computedConfig.type"
          :name="computedConfig.label"
          :id="id"
      >
    </div>
    <p v-if="userError" class="error">{{ userError }}</p>
  </div>
</template>

<script setup lang="ts">

import {type Config, inputConfig, type InputType} from "@/components/InputType.ts";
import {computed, type ComputedRef, type ModelRef, watch} from "vue";

const {inputType, required} = defineProps<{
  inputType: InputType,
  required?: boolean
}>()


const computedConfig: ComputedRef<Config> = computed(() => {
  return inputConfig.value[inputType]
})

const id = computed(() => `${computedConfig.value.label}-id`)
const userInput: ModelRef<string | undefined> = defineModel('userInput')
const userError: ModelRef<string | undefined> = defineModel('userError')

watch(userInput, (newValue) => {
  if (!newValue?.trim()) {
    userError.value = undefined;
  } else {
    validateField()
  }
})


function validateField() {
  const config = computedConfig.value;
  if (!config.validate) return;

  const input = userInput.value || '';


  userError.value = config.validate(input) ? undefined : config.error;
}


defineExpose({validateField})


</script>

<style scoped>

.inp-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 4px;

  .inp {
    height: 60px;
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;

    input {
      height: inherit;
      width: 100%;
      box-sizing: border-box;
      border: 1px solid var(--dark-green);
      border-radius: 4px;
      font-size: 16px;
      font-family: Kanit, sans-serif;
      padding: 0 16px;

      &:focus {
        outline: 2px solid var(--dark-green);
      }
    }
  }

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

  .area {
    position: relative;

    textarea {
      font-size: 16px;
      font-family: Kanit, sans-serif;
      width: 100%;
      box-sizing: border-box;
      border: 1px solid var(--dark-green);
      border-radius: 4px;
      padding: 16px;

      &:focus {
        outline: 2px solid var(--dark-green);
      }
    }
  }


  .error {
    font-size: 14px;
    color: var(--red);
    text-align: end;
  }

}

</style>