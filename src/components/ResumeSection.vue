<script setup lang="ts">
import { resumes } from '../content/portfolio'
import AppIcon from './AppIcon.vue'
import SectionLabel from './SectionLabel.vue'
</script>

<template>
  <section id="resume" class="resume-band" aria-labelledby="resume-title">
    <div class="shell resume-layout">
      <div>
        <SectionLabel number="04">DOWNLOADS</SectionLabel>
        <h2 id="resume-title">Résumé<span>.</span></h2>
        <p class="section-intro">Choose the version that fits the role.</p>
      </div>
      <div class="resume-links">
        <a v-for="resume in resumes" :key="resume.file" class="resume-card" :href="`./resumes/${resume.file}`" download>
          <span class="file-icon">PDF</span>
          <span class="resume-text"><strong>{{ resume.title }}</strong><small>{{ resume.description }}</small></span>
          <AppIcon name="download" />
        </a>
      </div>
    </div>
  </section>
</template>
