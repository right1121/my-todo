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
  <div
    v-for="todo in todos"
    :key="todo.id"
  >
    {{ todo.id }}
    {{ todo.title }}
    分割
    ▼
  </div>
  <div>
    <input
      v-model="title"
      type="text"
    >
    <button @click="addTodo">
      登録
    </button>
  </div>
</template>
