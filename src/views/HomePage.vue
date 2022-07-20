<script lang="ts" setup>
  useHead({
    title: 'Boilerplate Vue3 | Labs',
    meta: [{ name: 'description', content: 'Boilerplate vue3 template' }],
  });
</script>
<template>
  <div class="grid h-[calc(100vh-66px)] place-items-center">
    <h1 class="dark:text-gradient text-4xl font-bold text-[#294A3C]">Hello World</h1>
  </div>
</template>
<route lang="yaml">
path: '/'
name: 'HomePage'
</route>
