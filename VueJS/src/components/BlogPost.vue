<script setup lang="ts">
  // There is many option to declare component props : https://vuejs.org/guide/typescript/composition-api.html#typing-component-props

  // const props = defineProps({
  //   title: {
  //     type: String,
  //     required: true
  //   }
  // })

  // defineProps<{
  //   title: string
  // }>();

  // interface Props {
  //   title: string
  // };

  // defineProps<Props>();

  // with default value

  interface Author {
    name: string,
    gender: string
  }

  interface Props {
    title?: string,
    content?: string | string[],
    author?: Author,
    likes: number
  }

  withDefaults(defineProps<Props>(), {
    title: "Default title",
    content: () => ['lorem', 'ipsum']
  })

  const emit = defineEmits<{
    (e: 'text-enlarge'): void
  }>()
</script>

<template>
  <div class="border bg-blue-500 rounded-lg p-4">
    <p>Blog title : {{ title }}</p>
    <p>Content : {{ content }}</p>
    <p>Likes : {{ likes }}</p>
    <button @click="emit('text-enlarge')" >Enlarge Text</button>
  </div>
</template>