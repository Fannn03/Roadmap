<script setup lang="ts">
  import { ref, type Ref } from 'vue';
  import ButtonCounter from '@/components/ButtonCounter.vue';
  import BlogPost from '@/components/BlogPost.vue';

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
  </div>
  <div>
    Blog Post
    <BlogPost title="Kucing liar" content="kucing liar" />
    <BlogPost title="nasi goreng rice cooker" />
  </div>
</template>
