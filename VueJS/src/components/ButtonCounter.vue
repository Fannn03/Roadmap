<script setup lang="ts">
  import { ref, type Ref } from 'vue';

  const count: Ref<number> = ref(0);

  const increment = () => {
    return count.value++;
  }
</script>

<template>
  <div>
    <p class="text-red-500">Count : {{ count }}</p>
    <button type="button" @click="increment">Count me</button>
  </div>
</template>