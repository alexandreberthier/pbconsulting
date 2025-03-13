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
              ref="nameRef"
              :input-type="InputType.Name"
              v-model:user-input="name"
              v-model:user-error="nameError"
          />
          <InputField
              ref="emailRef"
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
              ref="messageRef"
              :input-type="InputType.TextArea"
              v-model:user-input="message"
              v-model:user-error="messageError"
          />
        </div>
        <DynamicButton
            @click="sendForm"
            :is-loading="isLoading"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import {getImage} from "@/utils/ImageUtils.ts";
import InputField from "@/components/InputField.vue";
import {InputType} from "@/components/InputType.ts";
import {nextTick, type Ref, ref} from "vue";
import DynamicButton from "@/components/DynamicButton.vue";

const name: Ref<string> = ref('')
const nameError: Ref<string> = ref('')

const email: Ref<string> = ref('')
const emailError: Ref<string> = ref('')

const phone: Ref<string> = ref('')
const phoneError: Ref<string> = ref('')

const message: Ref<string> = ref('')
const messageError: Ref<string> = ref('')

const isLoading: Ref<boolean> = ref(false)

interface InputField {
  validateField: () => boolean
}

const nameRef: Ref<InputField | null> = ref(null)
const emailRef: Ref<InputField | null> = ref(null)
const messageRef: Ref<InputField | null> = ref(null)

async function sendForm() {
  const fields = [nameRef, emailRef, messageRef];

  fields.forEach(field => {
    field.value?.validateField();
  })

  await nextTick();
  const errorHTML = document.querySelector('.error');

  if (errorHTML) {
    errorHTML.scrollIntoView({ behavior: 'smooth', block: "center" });
    return;
  }

  isLoading.value = true;
  setTimeout(() => {
    alert('Message sent');
    isLoading.value = false;
  }, 3000);
}



</script>

<style scoped>

.footer-wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
  background: var(--gray);
  box-sizing: border-box;
  padding: 50px 10px;

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
      align-items: center;
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


@media (min-width: 1200px) {
  .footer-wrapper {
    display: flex;
    justify-content: center;
    width: 100%;
    background: var(--gray);
    box-sizing: border-box;
    padding: 80px;

    .footer-inner {
      display: flex;
      flex-direction: row;
      gap: 60px;

      .left {
        display: flex;
        flex-direction: column;
        gap: 32px;
        flex: 1;

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
            width: 70px;
            height: 70px;

            img {
              width: 42px;
              height: 42px;
            }
          }
        }
      }

      .right {
        display: flex;
        flex-direction: column;
        gap: 32px;
        flex: 1;

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
}

</style>