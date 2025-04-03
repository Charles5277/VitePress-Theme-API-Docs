<script setup lang="ts">
  import { useData } from '../composables/data.ts';
  import { useBaseURL } from '../composables/useBaseURL.ts';

  const { isDark } = useData();
  const { showBaseURL } = useBaseURL();
</script>

<template>
  <div class="container">
    <span class="label">顯示 Base URL</span>
    <label class="toggle" :class="{ 'dark-mode': isDark }">
      <input type="checkbox" v-model="showBaseURL" />
      <span class="slider"></span>
    </label>
  </div>
</template>

<style scoped>
  .container {
    display: flex;
    align-items: center;
    padding: 0 12px;
    line-height: var(--vp-nav-height);
    font-size: 14px;
    font-weight: 500;
    color: var(--vp-c-text-1);
    transition: color 0.25s;
    gap: 8px;
  }

  /* 添加分隔線樣式 */
  .container::before {
    margin-right: 8px;
    margin-left: 8px;
    width: 1px;
    height: 24px;
    background-color: var(--vp-c-divider);
    content: '';
  }

  .label {
    margin-right: 8px;
  }

  .toggle {
    position: relative;
    display: inline-block;
    width: 40px;
    height: 20px;
  }

  .toggle input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: 0.4s;
    border-radius: 34px;
  }

  .slider:before {
    position: absolute;
    content: '';
    height: 16px;
    width: 16px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }

  input:checked + .slider {
    background-color: #4caf50;
  }

  input:checked + .slider:before {
    transform: translateX(20px);
  }

  /* 深色模式樣式 */
  .toggle.dark-mode .slider {
    background-color: #555;
  }

  .toggle.dark-mode input:checked + .slider {
    background-color: #6fcf97;
  }
</style>
