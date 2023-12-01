<script setup lang="ts">
  import { type Ref, ref } from 'vue';
  import DashboardSidebar from '@/components/DashboardSidebar.vue';
  import DashboardNavbar from '@/components/DashboardNavbar.vue';
  import DashboardCard from '@/components/DashboardCard.vue';

  interface Card {
    title: string
  }
  const cards: Ref<Card[]> = ref([
    { title: "Customers" }
  ])
</script>

<template>
  <div class="sm:flex sm:flex-row">
    <div class="w-64 flex-none">
      <DashboardSidebar />
    </div>
    <div class="sm:flex-grow bg-slate-200">
      <DashboardNavbar />
      <!-- Dashboard Content -->
      <div class="p-5">
        <div class="grid grid-cols-4">
          <DashboardCard
          v-for="card in cards"
          :title="card.title"
          />
        </div>
      </div>
      <div></div>
    </div>
  </div>
</template>