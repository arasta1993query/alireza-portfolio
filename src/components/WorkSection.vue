<script setup lang="ts">
import { featuredProject, projects } from '../content/portfolio'
import AppIcon from './AppIcon.vue'
import ProjectDiagram from './ProjectDiagram.vue'
import SectionLabel from './SectionLabel.vue'
import TagList from './TagList.vue'
</script>

<template>
  <section id="work" class="section shell" aria-labelledby="work-title">
    <SectionLabel number="01">PORTFOLIO</SectionLabel>
    <div class="section-heading">
      <h2 id="work-title">Selected work<span>.</span></h2>
      <p>Client work at Athra Studio, platform engineering at Okala, and a product in development.</p>
    </div>

    <article class="featured">
      <div class="featured-copy">
        <p class="project-context"><span class="signal-dot"></span> {{ featuredProject.context }}</p>
        <h3>{{ featuredProject.name }}</h3>
        <p>{{ featuredProject.description }}</p>
        <TagList :items="featuredProject.technologies" />
        <a class="text-link" :href="featuredProject.url">Visit {{ featuredProject.name }} <AppIcon name="out" /></a>
      </div>

      <figure class="feature-visual">
        <div class="browser-card">
          <div class="browser-chrome" aria-hidden="true">
            <span class="browser-dots"><i></i><i></i><i></i></span>
            <span>{{ featuredProject.domain }}</span>
          </div>
          <img
            :src="featuredProject.image"
            width="1140"
            height="642"
            loading="lazy"
            alt="SeaJoy homepage with an ocean backdrop and tour search"
          />
        </div>
      </figure>
    </article>

    <div class="project-grid">
      <article v-for="project in projects" :key="project.name" class="project-card">
        <ProjectDiagram :variant="project.diagram" />
        <div class="project-copy">
          <p class="project-context">{{ project.context }}</p>
          <h3>{{ project.name }}</h3>
          <p>{{ project.description }}</p>
          <TagList :items="project.technologies" />
          <a v-if="project.url" class="text-link" :href="project.url">
            Read the case study <AppIcon name="out" />
          </a>
        </div>
      </article>
    </div>
  </section>
</template>
