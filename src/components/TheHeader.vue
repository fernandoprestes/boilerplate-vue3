<script setup lang="ts"></script>

<template>
  <header class="border-b-2 border-[#60917C] dark:border-[#294A3C]">
    <div class="container-center flex justify-between py-4">
      <h1 class="font-hand text-2xl dark:text-white">
        <router-link :to="{ name: 'HomePage' }"> fffp </router-link>
      </h1>
      <div class="flex items-center justify-center">
        <button @click="toggleDark()">
          <div class="i-carbon-sun dark:i-carbon-moon text-2xl dark:text-white" />
        </button>
      </div>
    </div>
  </header>
</template>
