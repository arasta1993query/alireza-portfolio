<script setup lang="ts">
import type { Diagram } from '../content/portfolio'
import AppIcon from './AppIcon.vue'

defineProps<{ variant: Diagram }>()
</script>

<template>
  <div v-if="variant === 'architecture'" class="project-visual architecture" aria-hidden="true">
    <div class="diagram-caption"><span>ROUTING STRATEGY</span><span>↗</span></div>
    <div class="diagram-flow"><span>Next.js 11</span><i></i><span>Next.js 15</span></div>
    <span class="diagram-foot">PHASED CUTOVER</span>
  </div>

  <div v-else-if="variant === 'merchant'" class="project-visual merchant" aria-hidden="true">
    <div class="diagram-caption"><span>ORDER EVENTS</span><span class="signal-dot"></span></div>
    <div class="order-ticket">
      <span class="order-icon">↳</span>
      <div><strong>New order</strong><small>Merchant notification</small></div>
      <span class="order-check">✓</span>
    </div>
    <span class="diagram-foot">REAL-TIME WORKSPACE</span>
  </div>

  <div v-else class="project-visual invoice" aria-hidden="true">
    <div class="diagram-caption"><span>DOCUMENT WORKFLOW</span><span>↗</span></div>
    <div class="document-flow">
      <span>Capture</span><AppIcon name="right" /><span>Extract</span><AppIcon name="right" /><span>Review</span>
    </div>
    <span class="diagram-foot">REVIEW BEFORE CONFIRMATION</span>
  </div>
</template>
