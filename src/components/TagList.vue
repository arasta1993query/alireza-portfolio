<script setup lang="ts">
defineProps<{ items: string[] }>()
</script>

<template>
  <ul class="tags">
    <li v-for="item in items" :key="item">{{ item }}</li>
  </ul>
</template>
