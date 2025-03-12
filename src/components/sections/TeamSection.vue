<template>
  <section class="section team">
    <h2>Meet Our Team</h2>
    <div class="team-container">
      <div class="team-card" v-for="member in members" :key="member.name">
        <div class="team-card-inner">
          <div class="team-card-front">
            <img :src="getImage(member.image)" alt="Foto von {{ member.name }}" class="team-image">
            <p>{{ member.name }}</p>
            <p class="team-position">{{ member.position }}</p>
          </div>
          <div class="team-card-back">
            <p class="team-description">{{ member.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script setup lang="ts">

import {type Ref, ref} from "vue";
import {getImage} from "@/utils/ImageUtils.ts";

interface Member {
  image: string,
  name: string,
  position: string,
  desc: string
}

const members: Ref<Member[]> = ref([
  {
    image: 'img_team_1.jpg',
    name: 'Arq. Manuel Davilla',
    position: 'Interior Designing',
    desc: 'Architect and owner of Creata SAC with 25+ years of experience in hotel development, interior design, and hospital infrastructure. Has developed over 200,000 m² of projects in Lima and surrounding areas, including boutique hotels and resorts. Specializes in comprehensive project management from concept design to final execution'
  },
  {
    image: 'img_team_2.jpg',
    name: 'Dr. Jorge Zúñiga',
    position: 'Legal Advisor ',
    desc: 'Attorney specializing in tourism, corporate, and administrative law. Studied in Peru, Spain, and Japan. Trusted legal consultant for leading hotel companies in Peru. Fluent in Spanish & Englis'
  },
  {
    image: 'img_team_3.jpg',
    name: 'Renzo de Almeida',
    position: 'Marketing',
    desc: 'Marketing expert with 20+ years of experience in sales, business planning, and digital transformation across multiple industries. Led the marketing team at Aranwa Hotels Resorts & Spas. Holds a Business Administration degree from Universidad de Lima and an MBA from Hult International Business School (Boston, USA'
  },
  {
    image: 'img_team_4.jpg',
    name: 'Julio Cobar',
    position: 'Finance',
    desc: 'Certified Public Accountant with 25+ years of experience in finance, accounting, and administration across various industries, including banks, insurance, and manufacturing. Expertise in SAP implementation and university-level training. Holds Master’s degrees in Business Administration and Economics. Consulted for companies across Central America, Europe, the USA, and Asia.'
  },
  {
    image: 'img_team_5.png',
    name: 'Pierre Berthier',
    position: 'CEO',
    desc: 'Founder and leader of PB Hotel Consulting, an international hotel management consulting firm. A graduate of the prestigious Lausanne Hotel School, Pierre Berthier has 30 years of experience in the industry, working his way up from Bell Boy to General Manager of major hotel chains. Recognized both nationally and internationally as a leading expert in hospitality and tourism.'
  },
  {
    image: 'img_team_6.jpg',
    name: 'Sra. Vanessa Azcarate',
    position: 'Human Resources',
    desc: 'Former hotel manager, graduated from Montemar Hotel School in Lima. Worked in top hotels for over 10 years before founding her own headhunting company. Known for her personalized recruitment approach, achieving a 99%+ success rate in matching candidates to roles.'
  }
])

</script>

<style scoped>
.team {
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;

  .team-container {
    display: flex;
    flex-wrap: wrap;
    gap: 32px;
    justify-content: center;
    margin-top: 20px;

    .team-card {
      width: 300px;
      height: 380px;
      cursor: pointer;

      .team-card-inner {
        position: relative;
        width: 100%;
        height: 100%;
        transform-style: preserve-3d;
        transition: transform 0.6s;

        .team-card-front,
        .team-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 12px;
          box-shadow: 0 6px 15px rgba(0, 110, 62, 0.25);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          padding: 20px;
          box-sizing: border-box;
          background: white;
          text-align: center;
        }

        .team-card-back {
          transform: rotateY(180deg);
          background: var(--light-gray);
          color: var(--text-color);
          justify-content: center;

          p {
            font-size: 16px;
          }
        }

        .team-card-front {
          p {
            &:first-of-type {
              color: var(--dark-blue);
              font-size: 26px;
            }

            &:last-of-type {
              font-size: 16px;
            }
          }

          .team-image {
            width: 140px;
            height: 140px;
            border-radius: 50%;
            object-fit: cover;
          }
        }


      }

      &:hover {
        .team-card-inner {
          transform: rotateY(180deg);
        }
      }
    }
  }
}

</style>