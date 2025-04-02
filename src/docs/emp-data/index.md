---
layout: doc
aside: right
---

<script setup>
import {DividePage} from 'vitepress-theme-api';
</script>

# Title

<DividePage :top="63">

<template #left>
  <h2> item </h2>
</template>

<template #right>
<div style="margin-top: 50px">

```http
url
```
</div>
</template>

</DividePage>
