<script setup lang="ts">
  import { useData } from 'vitepress';
  import DefaultTheme from 'vitepress/theme';
  import { nextTick, provide } from 'vue';

  const { Layout } = DefaultTheme;

  const { isDark } = useData();

  const enableTransitions = () =>
    'startViewTransition' in document &&
    window.matchMedia('(prefers-reduced-motion: no-preference)').matches;

  const createClipPath = (x: number, y: number) => [
    `circle(0px at ${x}px ${y}px)`,
    `circle(${Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y),
    )}px at ${x}px ${y}px)`,
  ];

  provide('toggle-appearance', async ({ clientX: x, clientY: y }) => {
    if (!enableTransitions()) {
      isDark.value = !isDark.value;
      return;
    }

    const clipPath = createClipPath(x, y);

    await document.startViewTransition(async () => {
      isDark.value = !isDark.value;
      await nextTick();
    }).ready;

    document.documentElement.animate(
      { clipPath: isDark.value ? clipPath.reverse() : clipPath },
      {
        duration: 300,
        easing: 'ease-in',
        pseudoElement: `::view-transition-${isDark.value ? 'old' : 'new'}(root)`,
      },
    );
  });
</script>

<template>
  <Layout />
</template>

<style>
  ::view-transition-old(root),
  ::view-transition-new(root) {
    animation: none;
    mix-blend-mode: normal;
  }

  ::view-transition-old(root),
  .dark::view-transition-new(root) {
    z-index: 1;
  }

  ::view-transition-new(root),
  .dark::view-transition-old(root) {
    z-index: 9999;
  }

  .VPSwitchAppearance {
    width: 22px !important;
  }

  .VPSwitchAppearance .check {
    transform: none !important;
  }

  .layout-container {
    position: relative;
  }

  .base-url-toggle {
    position: fixed;
    top: 70px;
    right: 20px;
    z-index: 100;
    background-color: var(--vp-c-bg);
    padding: 8px 12px;
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  }

  .toggle-switch {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .toggle-slider {
    position: relative;
    display: inline-block;
    width: 40px;
    height: 20px;
    background-color: #ccc;
    border-radius: 10px;
    margin-right: 8px;
    transition: 0.4s;
  }

  .toggle-slider:before {
    position: absolute;
    content: '';
    height: 16px;
    width: 16px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    border-radius: 50%;
    transition: 0.4s;
  }

  input:checked + .toggle-slider {
    background-color: var(--vp-c-brand);
  }

  input:checked + .toggle-slider:before {
    transform: translateX(20px);
  }

  .toggle-label {
    font-size: 14px;
  }

  input[type='checkbox'] {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
  }
</style>
