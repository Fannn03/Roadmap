<script setup lang="ts">
  interface Props {
    title: string
  }

  const props = defineProps<Props>();
</script>

<template>
  <div class="p-4 rounded-lg bg-blue-500 ">
    <h1 class="text-xl">{{ title }}</h1>
  </div>
</template>