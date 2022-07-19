<script lang="ts" setup></script>
<template>
  <div class="grid h-screen place-items-center">
    <h1 class="text-2xl font-bold dark:text-white">Hello World</h1>
    <button @click="toggleDark()">
      <div class="i-carbon-sun dark:i-carbon-moon text-2xl dark:text-white" />
    </button>
  </div>
</template>
