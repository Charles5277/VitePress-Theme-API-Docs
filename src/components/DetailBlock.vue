<script setup lang="ts">
  const props = withDefaults(
    defineProps<{
      margin?: number;
    }>(),
    {
      margin: 60,
    },
  );
</script>

<template>
  <div :style="{ 'margin-top': props.margin + 'px' }">
    <slot />
  </div>
</template>
