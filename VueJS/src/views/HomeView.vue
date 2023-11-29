<script setup lang="ts">
  import { ref, type Ref } from 'vue';
  import ButtonCounter from '@/components/ButtonCounter.vue';

  const count: Ref<number> = ref(0);

  const increment = () => {
    return count.value++;
  }
</script>

<template>
  <div>
    <p>This is child component below</p>
    <ButtonCounter />
    <ButtonCounter />
    <ButtonCounter />
    <ButtonCounter />
  </div>
</template>
