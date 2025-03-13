<template>
  <div class="nav-wrapper">
    <router-link
        :to="{name: 'home'}"
        class="logo">
      <img
          :src="getImage('ic_logo_pb.png')"
          alt="back to home"
      >
    </router-link>
    <div class="right-section">
      <div
          :class="['links-wrapper', {'show': showMenu}]">
        <div
            class="links"
        >
          <router-link
              @click="closeMenu"
              v-for="(link, index) in navLinks"
              :key="index"
              :to="{name: link.href.name, hash: link.href.hash}"
          >
            <span>{{ link.text }}</span>
          </router-link>
        </div>
        <div
            @click="closeMenu"
            class="touch-gray">
        </div>
      </div>
      <div class="language-selection">
        <div @click="toggleLanguageOptions" class="visible">
          <div class="icon-wrapper">
            <img :src="getImage('ic_globe.png')" alt="">
          </div>
          <p>{{ selectedLanguage }}</p>
        </div>
        <div v-if="showLanguageOptions" class="options">
          <p
              v-for="(option, index) in availableLanguages"
              :key="index"
              @click="selectLanguage(option)"
          >
            {{option}}
          </p>
        </div>
      </div>
      <div
          @click="toggleMenu"
          :class="['burger-menu', {'rotate': showMenu}]"
      >
        <span></span>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import {getImage} from "@/utils/ImageUtils.ts";
import {computed, type Ref, ref} from "vue";

interface NavLink {
  text: string,
  href: {
    name: string,
    hash: string
  }
}

const showMenu: Ref<boolean> = ref(false)

function toggleMenu() {
  showMenu.value = !showMenu.value
}

function closeMenu() {
  showMenu.value = false
}

const navLinks: Ref<NavLink[]> = ref([
  {
    text: 'About',
    href: {
      name: 'home',
      hash: '#about'
    }
  },
  {
    text: 'Services',
    href: {
      name: 'home',
      hash: '#services'
    }
  },
  {
    text: 'Team',
    href: {
      name: 'home',
      hash: '#team'
    }
  },
  {
    text: 'Contact',
    href: {
      name: 'home',
      hash: '#contact'
    }
  }
])

const selectedLanguage = ref("EN");
const allLanguages = ["EN", "FR", "ES"];

const availableLanguages = computed(() =>
    allLanguages.filter(lang => lang !== selectedLanguage.value)
);

const showLanguageOptions = ref(false);
function toggleLanguageOptions() {
  showLanguageOptions.value = !showLanguageOptions.value;
}

function selectLanguage(option: string) {
  selectedLanguage.value = option;
  showLanguageOptions.value = false;
}
</script>

<style scoped>
.nav-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 6px 18px;
  width: 100%;
  height: 100px;
  background: var(--white);

  .logo {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 200px;
      height: auto;
    }
  }

  .right-section {
    display: flex;
    align-items: center;
    gap: 16px;

    .links-wrapper {
      display: flex;
      position: fixed;
      top: 100px;
      right: 0;
      width: 100%;
      height: 100%;
      transition: all 250ms ease;
      opacity: 0;
      transform: translateX(100%);

      &.show {
        opacity: 1;
        transform: translateX(0);
      }

      .links {
        display: flex;
        flex-direction: column;
        gap: 32px;
        background: var(--white);
        width: 75%;
        height: inherit;
        box-sizing: border-box;
        padding: 50px;

        a {
          span {
            font-size: 26px;
            position: relative;

            &:after {
              position: absolute;
              content: '';
              bottom: 0;
              left: 0;
              width: 0;
              height: 3px;
              background: var(--dark-blue);
              transition: all 250ms ease;
            }
          }

          &:hover {
            span {
              &:after {
                width: 100%;
              }
            }
          }
        }
      }

      .touch-gray {
        background: var(--light-gray);
        width: 25%;
        box-shadow: inset 10px 0 20px rgba(0, 0, 0, 0.1);
        cursor: pointer;
      }
    }

    .burger-menu {
      display: flex;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      background: var(--light-gray);
      border-radius: 8px;
      width: 45px;
      height: 45px;
      cursor: pointer;
      transition: all 250ms ease-in-out;

      span {
        width: 80%;
        height: 2px;
        background: var(--dark-blue);
        position: relative;

        &:before, &:after {
          position: absolute;
          content: '';
          width: 100%;
          height: 2px;
          background: var(--dark-blue);
          transition: all 250ms ease;
        }

        &:before {
          top: 10px;
          transition: all 250ms ease;
        }

        &:after {
          bottom: 10px;
          transition: all 250ms ease;
        }
      }

      &.rotate {
        transform: rotate(180deg);

        span {
          background: transparent;

          &:before {
            top: 0;
            right: 0;
            transform: rotate(45deg);
          }

          &:after {
            bottom: 0;
            left: 0;
            transform: rotate(-45deg);
          }
        }
      }
    }

    .language-selection {
      display: flex;
      justify-content: center;
      align-items: center;
      background: var(--light-gray);
      border-radius: 8px;
      box-sizing: border-box;
      padding: 5px 8px;
      position: relative;

      .visible {
        display: flex;
        align-items: center;
        gap: 8px;
        cursor: pointer;
        height: 35px;


        .icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;

          img {
            width: 30px;
            height: 30px;
          }
        }
      }

      .options {
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
        top: 105%;
        right: 0;
        box-sizing: border-box;
        padding: 5px;
        background: var(--light-gray);
        width: 70%;
        border-radius: 0 0 8px 8px;
        cursor: pointer;
      }
    }
  }
}

@media (min-width: 740px) {
  .nav-wrapper {
    padding: 10px 22px;

    .logo {
      img {
        width: 240px;
        height: auto;
      }
    }
  }
}

@media (min-width: 1200px) {
  .nav-wrapper {
    padding: 10px 32px;

    .logo {
      img {
        width: 260px;
        height: auto;
      }
    }

    .right-section {
      display: flex;
      align-items: center;
      gap: 90px;

      .links-wrapper {
        display: flex;
        position: static;
        top: unset;
        right: unset;
        width: 100%;
        height: inherit;
        transition: all 250ms ease;
        opacity: 1;
        transform: translateX(0);

        .links {
          flex-direction: row;
          gap: 64px;
          background: var(--white);
          width: 100%;
          height: inherit;
          padding: 0;

          a {
            span {
              font-size: 26px;
              position: relative;

              &:after {
                position: absolute;
                content: '';
                bottom: 0;
                left: 0;
                width: 0;
                height: 3px;
                background: var(--dark-blue);
                transition: all 250ms ease;
              }
            }

            &:hover {
              span {
                &:after {
                  width: 100%;
                }
              }
            }
          }
        }

        .touch-gray {
          display: none;
        }
      }

      .burger-menu {
        display: none;
        transition: all 250ms ease-in-out;
      }
    }
  }
}

</style>