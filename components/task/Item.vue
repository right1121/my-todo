<script setup lang="ts">
import { TodoType } from '~~/components/task/types'

interface Props {
  todo: TodoType
}
defineProps<Props>()

interface Emits {
  (e: "click:done", id: number): void;
}
defineEmits<Emits>()
</script>

<template>
  <div class="flex p-2 border items-center space-x-4">
    <div class="w-14 text-right">
      {{ todo.id }}
    </div>
    <div class="grow">
      {{ todo.title }}
    </div>
    <div>
      {{ todo.status }}
    </div>
    <div>
      <button class="btn btn-success" @click="$emit('click:done', todo.id)">
        完了
      </button>
    </div>
  </div>
</template>
