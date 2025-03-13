<template>
  <section class="section services">
    <h2>Our Services</h2>
    <div class="services-flex">
      <div
          v-for="(service, index) in services"
          :key="service.id"
          @click="toggleDesc(index)"
          class="service-card"
      >
        <div class="visible">
          <div class="icon-wrapper">
            <img :src="getImage(service.icon)" alt="">
          </div>
          <h3>{{ service.heading }}</h3>
          <p>{{ service.subHeading }}</p>
        </div>
        <div v-if="currentIndex === index" class="hidden">
          <div class="divider"></div>
          <p>{{ service.hiddenText }}</p>
        </div>
        <div class="chevron-wrapper">
          <img
              :class="{'rotate': currentIndex === index}"
              :src="getImage('ic_chevron_bottom.png')"
              alt="chevron bottom"
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

import {type Ref, ref} from "vue";
import {getImage} from "@/utils/ImageUtils.ts";

interface Service {
  id: number,
  icon: string,
  heading: string,
  subHeading: string,
  hiddenText: string
}

const services: Ref<Service[]> = ref([
  {
    id: 1,
    icon: 'ic_invest.png',
    heading: 'Investment Consulting',
    subHeading: 'Strategic planning for sustainable hotel investments',
    hiddenText: 'We assist you in making the right investment decisions to ensure long-term profitability. Our experts analyze market trends, competition, and economic factors to develop tailored investment strategies for your hotel.'
  },
  {
    id: 2,
    icon: 'ic_project.png',
    heading: 'Project Development & Asset Management',
    subHeading: 'Planning, implementing, and managing hotel projects',
    hiddenText: 'From the initial concept to successful operation, we support your hotel development. We optimize operational costs, increase the market value of your property, and ensure smooth project execution.'
  },
  {
    id: 3,
    icon: 'ic_marketing.png',
    heading: 'Marketing & Sales',
    subHeading: 'Targeted strategies for market positioning',
    hiddenText: 'Our team develops customized marketing and sales strategies to increase visibility, enhance guest satisfaction, and optimize booking rates. We leverage both digital and traditional channels for maximum reach.'
  },
  {
    id: 4,
    icon: 'ic_certification.png',
    heading: 'Certifications & Quality Management',
    subHeading: 'Optimizing hotel standards for excellence',
    hiddenText: 'High-quality services and certified standards are essential to building guest trust. We assist in implementing and certifying quality management systems to position your hotel at the highest level of excellence.'
  },
  {
    id: 5,
    icon: 'ic_undercover.png',
    heading: 'Undercover Customer & Head Hunting',
    subHeading: 'Guest experience analysis & expert recruitment',
    hiddenText: 'Through mystery guest evaluations, we assess your service quality from the guest’s perspective and provide valuable feedback. Additionally, we support you in recruiting highly qualified hotel professionals.'
  },
  {
    id: 6,
    icon: 'ic_hotel.png',
    heading: 'Hotel Operations Evaluation',
    subHeading: 'Maximizing profitability through in-depth analysis',
    hiddenText: 'Our detailed hotel operations analysis helps identify areas for improvement and cost reduction. We show you how to lower operational expenses while increasing revenue—ensuring maximum profitability and higher EBITDA.'
  }
])

const currentIndex: Ref<number | null> = ref(null)

function toggleDesc(index: number) {
  currentIndex.value = currentIndex.value === index ? null : index;
}

</script>

<style scoped>
.services {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  .services-flex {
    display: flex;
    flex-wrap: wrap;
    gap: 32px;
    justify-content: center;

    .service-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 32px;
      cursor: pointer;
      position: relative;
      background: linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%);
      box-sizing: border-box;
      padding: 20px;
      border-radius: 14px;
      width: unset;
      flex: 1 1 320px;
      box-shadow: 0 6px 15px rgba(0, 110, 62, 0.25);
      transition: all 250ms ease-in-out;

      &:hover {
        transform: scale(1.01) translateY(-5px);
      }

      .chevron-wrapper {
        display: flex;
        justify-content: flex-end;
        width: 100%;
        margin-top: auto;

        img {
          width: 35px;
          height: 35px;
          transition: all 250ms ease-in-out;


          &.rotate {
            transform: rotate(180deg);
          }
        }
      }

      .visible {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;
        text-align: center;

        p {
          font-size: 18px;
        }

        h3 {
          font-size: 24px;
          min-height: 70px;
        }

        .icon-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;

          img {
            width: 70px;
            height: 70px;
          }
        }
      }

      .hidden {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 32px;

        .divider {
          width: 100%;
          height: 1px;
          background: var(--dark-gray);
        }
      }
    }
  }
}

@media (min-width: 740px) {
  .services {
    gap: 60px;
  }
}


</style>