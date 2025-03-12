<template>
  <div class="footer-wrapper">
    <div class="section footer-inner">
      <div class="left">
        <h2>Contact Us</h2>
        <div class="socials">
          <a href="mailto:doctor@pbhotelconsulting.com">
            <div class="icon-wrapper">
              <img :src="getImage('ic_email.png')" alt="">
            </div>
          </a>
          <a href="https://x.com/pbhconsulting">
            <div class="icon-wrapper">
              <img :src="getImage('ic_x.png')" alt="">
            </div>
          </a>
          <a href="https://www.linkedin.com/in/pberthier/">
            <div class="icon-wrapper">
              <img :src="getImage('ic_linkedin.png')" alt="">
            </div>
          </a>
        </div>
      </div>
      <div class="right">
        <div class="fields">
          <InputField
              :input-type="InputType.Name"
              v-model:user-input="name"
              v-model:user-error="nameError"
          />
          <InputField
              :input-type="InputType.Email"
              v-model:user-input="email"
              v-model:user-error="emailError"
          />
          <InputField
              :input-type="InputType.Phone"
              v-model:user-input="phone"
              v-model:user-error="phoneError"
          />
          <InputField
              :input-type="InputType.TextArea"
              v-model:user-input="message"
              v-model:user-error="messageError"
          />
        </div>
        <DynamicButton/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import {getImage} from "@/utils/ImageUtils.ts";
import InputField from "@/components/InputField.vue";
import {InputType} from "@/components/InputType.ts";
import {type Ref, ref} from "vue";
import DynamicButton from "@/components/DynamicButton.vue";

const name: Ref<string> = ref('')
const nameError: Ref<string> = ref('')

const email: Ref<string> = ref('')
const emailError: Ref<string> = ref('')

const phone: Ref<string> = ref('')
const phoneError: Ref<string> = ref('')

const message: Ref<string> = ref('')
const messageError: Ref<string> = ref('')
</script>

<style scoped>

.footer-wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
  background: var(--gray);
  box-sizing: border-box;
  padding: 40px;

  .footer-inner {
    display: flex;
    flex-direction: column;
    gap: 60px;

    .left {
      display: flex;
      flex-direction: column;
      gap: 32px;

      .socials {
        display: flex;
        align-items: center;
        gap: 16px;

        .icon-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
          background: var(--white);
          width: 50px;
          height: 50px;

          img {
            width: 32px;
            height: 32px;
          }
        }
      }
    }

    .right {
      display: flex;
      flex-direction: column;
      gap: 32px;

      .fields {
        display: flex;
        flex-direction: column;
        gap: 16px;
      }

      > * {
        width: 100%;
      }
    }
  }
}


</style>