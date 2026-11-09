<script setup lang="ts">
const paths = {
  out: 'M5 15 15 5M6 5h9v9',
  down: 'M10 4v12m-5-5 5 5 5-5',
  download: 'M10 3v10m-4-4 4 4 4-4M4 16v1h12v-1',
  pin: 'M15 8c0 4-5 8-5 8S5 12 5 8a5 5 0 0 1 10 0Z M11.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z',
  up: 'M10 16V4m-5 5 5-5 5 5',
  right: 'M4 10h12m-5-5 5 5-5 5',
}

defineProps<{ name: keyof typeof paths }>()
</script>

<template>
  <svg
    aria-hidden="true"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    stroke-width="1.55"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path :d="paths[name]" />
  </svg>
</template>
