<script setup lang="ts">
import { profile } from '../content/portfolio'
import AppIcon from './AppIcon.vue'
import BrandMark from './BrandMark.vue'
import SectionLabel from './SectionLabel.vue'
</script>

<template>
  <section id="contact" class="contact" aria-labelledby="contact-title">
    <div class="shell contact-inner">
      <SectionLabel number="04">CONTACT</SectionLabel>
      <h2 id="contact-title">Let’s work together<span>.</span></h2>
      <p>I’m based in Muscat and open to international remote roles and B2B contracts.</p>
      <div class="contact-actions">
        <a class="button button-contact" :href="`mailto:${profile.email}`">{{ profile.email }} <AppIcon name="out" /></a>
        <a class="contact-social" :href="profile.linkedin" target="_blank" rel="noopener noreferrer">
          LinkedIn <AppIcon name="out" />
        </a>
        <a class="contact-social" :href="profile.github" target="_blank" rel="noopener noreferrer">
          GitHub <AppIcon name="out" />
        </a>
      </div>
      <div class="contact-mark" aria-hidden="true"><BrandMark /></div>
    </div>
  </section>
</template>
