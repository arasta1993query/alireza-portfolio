<script setup lang="ts">
defineProps<{ number: string }>()
</script>

<template>
  <p class="section-label"><span>{{ number }} /</span> <slot /></p>
</template>
