<script setup lang="ts">
  useHead({
    title: 'Boilerplate Vue3 | Pages not found',
    meta: [{ name: 'description', content: 'Boilerplate vue3 template, pages not found' }],
  });
  const router = useRouter();
</script>
<template>
  <div class="grid h-screen place-items-center">
    <div class="flex flex-col gap-4">
      <div class="text-primary flex flex-col items-center gap-4 dark:text-white">
        <h2 class="text-4xl font-bold">Page not found</h2>
        <p>Está pagina não existe. Volte para a home</p>
      </div>
      <button
        class="bg-primary flex items-center justify-center gap-4 rounded py-2 px-4 text-white"
        @click="router.back()"
      >
        <div class="i-carbon-home text-xl" />
        Home
      </button>
    </div>
  </div>
</template>
<route lang="yaml">
meta:
  layout: 404
</route>
