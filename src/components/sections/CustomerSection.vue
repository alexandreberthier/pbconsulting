<template>
  <div class="bg">
    <section class="section customers">
      <h2>Our Clients</h2>
      <div class="content">
        <div class="stats" ref="statsRef">
          <div class="stat">
            <p><span>{{ experience }}</span>+</p>
            <p>Years experience</p>
          </div>
          <div class="stat">
            <p><span>{{ clients }}</span>+</p>
            <p>Happy customers</p>
          </div>
          <div class="stat">
            <p><span>{{ successRate }}</span>%</p>
            <p>Success rate</p>
          </div>
        </div>

        <!-- Testimonials mit Swipe-Unterstützung -->
        <div class="testimonials">
          <div class="testimonials-container"
               ref="scrollContainer"
               @touchstart="stopAutoScroll"
               @touchend="startAutoScroll"
               @mousedown="stopAutoScroll"
               @mouseup="startAutoScroll"
               @scroll="handleScroll">
            <div class="testimonial-slide"
                 v-for="(testimonial, index) in testimonials"
                 :key="index">
              <p class="testimonial-text">"{{ testimonial.text }}"</p>
              <h4>{{ testimonial.name }}</h4>
              <p class="testimonial-position">{{ testimonial.position }}</p>
              <p class="testimonial-resort">{{ testimonial.hotel }}</p>
            </div>
          </div>

          <div class="dots">
          <span v-for="(_, index) in testimonials"
                :key="index"
                :class="{ active: index === currentIndex }"
                @click="scrollToIndex(index)">
          </span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import {ref, onMounted, onBeforeUnmount} from "vue";

const statsRef = ref<HTMLElement | null>(null);
const scrollContainer = ref<HTMLElement | null>(null);
const experience = ref(0);
const clients = ref(0);
const successRate = ref(0);
const currentIndex = ref(0);
let autoScrollInterval: number | null = null;

const testimonials = ref([
  {
    name: "Piro Hernandez",
    position: "Regional Director Americas-East",
    hotel: "Hotel Representation Services",
    text: "I worked with Pierre Berthier as a supplier of hospitality services for over 10 years. His professionalism, dedication, and expertise always exceeded expectations."
  },
  {
    name: "Edgar Garin",
    position: "VP Development",
    hotel: "Radisson Hotels & Resorts Latin America",
    text: "Pierre consistently anticipated market trends and adapted hotel strategies for maximum profitability. His leadership helped establish Hotel Libertador as a market leader."
  },
  {
    name: "Roland Fasel",
    position: "General Manager",
    hotel: "InterContinental London Park Lane",
    text: "I've known Pierre for 25 years since our time at Lausanne Hotel School. His dedication and expertise in the South American market make him a valuable consultant."
  },
  {
    name: "Antoine Noens",
    position: "Product Director",
    hotel: "Best Tours Belgium",
    text: "Under Pierre’s management, Hoteles Libertador set a new standard in the industry. His leadership ensured high service quality despite regional challenges."
  },
  {
    name: "Ewald Biemans",
    position: "Owner and Manager",
    hotel: "Bucuti Beach & Tara Beach Suites",
    text: "Pierre is a highly professional hotelier with over 10 years of experience leading Libertador Resorts. His insights and industry knowledge have greatly benefited our collaborations."
  },
  {
    name: "Richard Lewis",
    position: "Managing Director, Europe, Middle East & Africa",
    hotel: "Preferred Hotel Group",
    text: "Pierre understands both hotel owners' and guests' needs, offering a unique perspective in a highly competitive market. His deep industry knowledge is invaluable."
  }
])


// Zahlenanimation für Stats
const animateNumber = (target: number, refVar: any) => {
  let current = 0;
  const step = target / 50;
  const interval = setInterval(() => {
    refVar.value = Math.min(target, Math.floor((current += step)));
    if (current >= target) clearInterval(interval);
  }, 30);
};

// Scrollt den Container zum gewünschten Slide
const scrollToIndex = (index: number) => {
  if (scrollContainer.value) {
    const container = scrollContainer.value;
    container.scrollLeft = index * container.clientWidth;
    currentIndex.value = index;
  }
};

function handleScroll() {
  if (scrollContainer.value) {
    const container = scrollContainer.value;
    const index = Math.round(container.scrollLeft / container.clientWidth);
    currentIndex.value = index;
  }
}

function startAutoScroll() {
  stopAutoScroll();
  autoScrollInterval = window.setInterval(() => {
    let nextIndex = (currentIndex.value + 1) % testimonials.value.length;
    scrollToIndex(nextIndex);
  }, 5000);
}

function stopAutoScroll() {
  if (autoScrollInterval) {
    clearInterval(autoScrollInterval);
    autoScrollInterval = null;
  }
}

onMounted(() => {
  startAutoScroll();

  const observer = new IntersectionObserver((entries, obs) => {
    if (entries[0].isIntersecting) {
      animateNumber(35, experience);
      animateNumber(80, clients);
      animateNumber(95, successRate);
      obs.disconnect();
    }
  }, {threshold: 0.5});
  if (statsRef.value) observer.observe(statsRef.value);
});

onBeforeUnmount(() => {
  stopAutoScroll();
})

</script>

<style scoped>

.bg {
  background: var(--light-gray);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.customers {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  padding: 90px 0;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 90px;
  align-items: center;
  width: 100%;
}

.stats {
  display: flex;
  flex-wrap: wrap;
  gap: 60px;
  justify-content: center;
  width: 100%;
}

.stat {
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
  flex: 1 1 200px;
}

.stat span {
  font-size: 32px;
  font-weight: bold;
}

.testimonials-container {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  width: 100%;
  max-width: 600px;
  gap: 16px;
  scrollbar-width: none;
}

.testimonials-container::-webkit-scrollbar {
  display: none;
}

.testimonials {
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  padding: 5px;
}

.testimonial-slide {
  flex: 0 0 100%;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  text-align: center;
  border-radius: 8px;
  padding: 20px 40px;
  box-sizing: border-box;
  cursor: pointer;
}

h4 {
  font-size: 20px;
  color: var(--dark-green)
}

.testimonial-text {
  font-style: italic;
  color: #555;
  margin-bottom: 10px;
}

.testimonial-position {
  color: #777;
  font-size: 16px;
}

.testimonial-resort {
  font-size: 14px;
}

.dots {
  display: flex;
  gap: 10px;
  margin-top: 15px;
}

.dots span {
  width: 20px;
  height: 20px;
  background: var(--gray);
  border-radius: 50%;
  cursor: pointer;
  transition: background 0.3s;
}

.dots span.active {
  background: var(--dark-green)
}
</style>
