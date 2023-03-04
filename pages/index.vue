<script setup lang="ts">
interface todoType {
  id: number
  title: string
}
type todosType = todoType[]

const todos = ref<todosType>([])

const title = ref('')
const titleReset = () => { title.value = '' }

const addTodo = () => {
  todos.value.push({
    id: 0,
    title: title.value
  })
  titleReset()
}
</script>

<template>
  <div class="">
    <div class="flex space-x-2">
      <input v-model="title" type="text" class="w-full input input-bordered">
      <button @click="addTodo" class="btn btn-primary px-5">
        登録
      </button>
    </div>
    <div v-for="todo in todos" :key="todo.id">
      {{ todo.id }}
      {{ todo.title }}
      分割
      ▼
    </div>
  </div>
</template>
