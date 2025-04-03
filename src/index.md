---
layout: doc
aside: right
---

<script setup>
  import { DividePage } from 'vitepress-theme-api';
  import DetailBlock from '@components/DetailBlock.vue';
</script>

# 說明

<DividePage :top="63">

  <template #left>

  ## Base URL
  </template>

<template #right>
<div style="margin-top: 50px">

```http
https://example.com/api/v1/
```
</div>
</template>

</DividePage>

<DividePage :top="63">

  <template #left>

  ## Headers
  </template>

<template #right>
<div style="margin-top: 50px">

```http
Content-Type: application/json
Authorization: Bearer {authToken}
```
</div>
</template>

</DividePage>

<DividePage :top="63">

  <template #left>

  ## HTTP response status code
  </template>

<template #right>
<div style="margin-top: 50px">

<div style="padding-top:30px">

- 200 : 成功
- 401 : 未授權
- 400 : 請求錯誤
- 500 : 伺服器錯誤
</div>
</div>
</template>

</DividePage>

<DividePage :top="63">

  <template #left>

  ## Response structure

  </template>

<template #right>
  <div style="margin-top: 60px">


<DetailBlock>

- 成功

```json
{
  status: true,
  data: [] || {},
}
```
</DetailBlock>

<DetailBlock margin="0">

- 失敗

```json
{
  status: false,
  msg: 'error message',
}
```
</DetailBlock>
  
  </div>
</template>

</DividePage>

