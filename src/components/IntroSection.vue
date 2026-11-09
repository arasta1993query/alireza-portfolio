<script setup lang="ts">
import { metrics, profile } from '../content/portfolio'
import AppIcon from './AppIcon.vue'

const portrait = './media/alireza-portrait.webp'
</script>

<template>
  <section class="shell introduction" aria-labelledby="name">
    <div class="hero-grid">
      <div class="hero-copy">
        <p class="availability"><span class="signal-dot"></span> Available for remote &amp; B2B work</p>
        <h1 id="name">Alireza Asghari<br class="name-break" /> Tabrizi<span>.</span></h1>
        <p class="hero-role">{{ profile.title }}</p>
        <p class="hero-summary">{{ profile.summary }}</p>
        <div class="hero-actions">
          <a class="button button-primary" href="#work">Explore my work <AppIcon name="down" /></a>
          <a class="button button-outline" href="#resume">Get my résumé <AppIcon name="download" /></a>
        </div>
      </div>

      <figure class="portrait">
        <div class="portrait-image">
          <img :src="portrait" width="850" height="850" :alt="`Portrait of ${profile.name}`" fetchpriority="high" />
          <span class="portrait-index" aria-hidden="true">AAT / 01</span>
        </div>
        <figcaption>
          <span><AppIcon name="pin" /> {{ profile.location }}</span>
          <span class="portrait-zone">{{ profile.timezone }}</span>
        </figcaption>
      </figure>
    </div>

    <dl class="metrics">
      <div v-for="metric in metrics" :key="metric.label">
        <dt>{{ metric.label }}</dt>
        <dd>{{ metric.value }}<span v-if="metric.suffix">{{ metric.suffix }}</span></dd>
      </div>
    </dl>
  </section>
</template>
