<script setup lang="ts">
interface todoType {
  id: number
  title: string
}
interface Props {
  todo: todoType
}
defineProps<Props>()
</script>

<template>
  <div class="flex p-2 border">
    <div class="w-14 text-right px-2">
      {{ todo.id }}
    </div>
    <div class="grow">
      {{ todo.title }}
    </div>
  </div>
</template>
