<script setup lang="ts">
import AppIcon from './components/AppIcon.vue'
import BrandMark from './components/BrandMark.vue'
import ContactSection from './components/ContactSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import IntroSection from './components/IntroSection.vue'
import ResumeSection from './components/ResumeSection.vue'
import ToolkitSection from './components/ToolkitSection.vue'
import WorkSection from './components/WorkSection.vue'
import { profile } from './content/portfolio'
</script>

<template>
  <a class="skip-link" href="#main">Skip to content</a>

  <header class="site-header">
    <div class="shell header-inner">
      <a class="brand" href="#top" :aria-label="`${profile.name}, home`">
        <BrandMark />
        <span>Alireza<span class="brand-period">.</span></span>
      </a>
      <nav class="main-nav" aria-label="Main navigation">
        <a href="#work">Work</a>
        <a href="#experience">Experience</a>
        <a href="#resume">Résumé</a>
      </nav>
      <a class="button button-header" href="#contact">Get in touch <AppIcon name="out" /></a>
    </div>
  </header>

  <main id="main">
    <IntroSection />
    <WorkSection />
    <ExperienceSection />
    <ToolkitSection />
    <ResumeSection />
    <ContactSection />
  </main>

  <footer class="site-footer">
    <div class="shell footer-inner">
      <span class="footer-name"><BrandMark /> {{ profile.name }}</span>
      <a href="#top">Back to top <AppIcon name="up" /></a>
    </div>
  </footer>
</template>
