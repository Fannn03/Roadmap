<script setup lang="ts">
  import { type Ref, ref } from 'vue';
  import DashboardSidebar from '@/components/DashboardSidebar.vue';
  import DashboardNavbar from '@/components/DashboardNavbar.vue';

  interface Card {
    title: string
  }
  const cards: Ref<Card[]> = ref([
    { title: "Customers" }
  ])

</script>

<template>
  <div class="sm:flex sm:flex-row">
    <div class="w-64">
      <DashboardSidebar />
    </div>
    <div class="sm:flex-grow bg-slate-200">
      <DashboardNavbar />
      <!-- Dashboard Content -->
      <div></div>
    </div>
  </div>
</template>