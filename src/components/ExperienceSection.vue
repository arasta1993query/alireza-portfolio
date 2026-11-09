<script setup lang="ts">
import { experience } from '../content/portfolio'
import AppIcon from './AppIcon.vue'
import SectionLabel from './SectionLabel.vue'
</script>

<template>
  <section id="experience" class="experience-band" aria-labelledby="experience-title">
    <div class="section shell experience-layout">
      <div>
        <SectionLabel number="02">CAREER</SectionLabel>
        <h2 id="experience-title">Experience<span>.</span></h2>
        <p class="section-intro">From ticketing and video streaming to commerce platforms and client delivery.</p>
      </div>

      <ol class="timeline">
        <li v-for="job in experience" :key="job.company">
          <p class="job-dates">{{ job.dates }}</p>
          <div>
            <h3>{{ job.role }}</h3>
            <a v-if="job.url" class="job-company" :href="job.url">{{ job.company }} <AppIcon name="out" /></a>
            <p v-else class="job-company">{{ job.company }}</p>
            <p class="job-description">{{ job.description }}</p>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>
