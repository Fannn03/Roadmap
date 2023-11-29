<script setup lang="ts">
  import { ref, type Ref } from 'vue';
  import ButtonCounter from '@/components/ButtonCounter.vue';
  import BlogPost from '@/components/BlogPost.vue';

  interface Posts {
    title: string,
    content?: string
  }

  const fontSize: Ref<number> = ref(20);
  const posts: Ref<Posts[]> = ref([
    {title: "kucing liar", content: "kucing liar nakal"},
    {title: "Nasi goreng nice cooker"}
  ])
</script>

<template>
  <div>
    <p>This is child component below</p>
    <ButtonCounter />
  </div>
    Blog Post
  <div :style="{ fontSize: fontSize + 'px' }" class="flex gap-4">
    <BlogPost 
    v-for="post in posts"
    @text-enlarge="fontSize++"
    :title="post.title"
    :content="post.content"
    />
  </div>
</template>
