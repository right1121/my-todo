<script setup lang="ts">
import { StatusType, TodoType } from '~~/components/task/types'

interface Props {
  todo: TodoType
}
const props = defineProps<Props>()

interface Emits {
  (e: "click:done", id: number): void
  (e: "click:beginTask", id: number): void
}
const emits = defineEmits<Emits>()

const actionName = computed<StatusType | false>(() => {
  if (props.todo.status === '未着手') {
    return '進行中'
  } else if (props.todo.status === '進行中') {
    return '完了'
  }
  return false
})

const clickActionButton = () => {
  if (props.todo.status === '未着手') {
    return emits("click:beginTask", props.todo.id)
  } else if (props.todo.status === '進行中') {
    return emits("click:done", props.todo.id)
  } else {
    return ""
  }
}
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
    <div v-if="actionName">
      <button class="btn btn-success" @click="clickActionButton">
        {{ actionName }}
      </button>
    </div>
  </div>
</template>
