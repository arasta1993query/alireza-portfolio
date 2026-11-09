<script setup lang="ts">
import { background, skills } from '../content/portfolio'
import SectionLabel from './SectionLabel.vue'
import TagList from './TagList.vue'
</script>

<template>
  <section class="section shell toolkit" aria-labelledby="toolkit-title">
    <SectionLabel number="03">CAPABILITIES</SectionLabel>
    <div class="section-heading">
      <h2 id="toolkit-title">Technical toolkit<span>.</span></h2>
      <p>Frontend engineering, backend development, and the infrastructure to bring them into production.</p>
    </div>

    <div class="skills-grid">
      <div v-for="(group, index) in skills" :key="group.name" class="skill-group">
        <span class="skill-index">{{ String(index + 1).padStart(2, '0') }}</span>
        <h3>{{ group.name }}</h3>
        <TagList :items="group.items" />
      </div>
    </div>

    <dl class="background">
      <div v-for="group in background" :key="group.name">
        <dt>{{ group.name }}</dt>
        <dd v-for="item in group.items" :key="item">{{ item }}</dd>
      </div>
    </dl>
  </section>
</template>
