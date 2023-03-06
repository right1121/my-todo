<script setup lang="ts">
import Item from '~~/components/task/Item.vue'
import { TodosType } from '~~/components/task/types'

const todos = ref<TodosType>([])

const title = ref('')
const titleReset = () => { title.value = '' }

const id = ref(0)

const addTodo = () => {
  todos.value.push({
    id: id.value,
    title: title.value,
    status: '未着手'
  })
  id.value = id.value + 1
  titleReset()
}

const taskDone = (id: number) => {
  const todo = todos.value.find((todo) => todo.id === id)
  if (todo?.status === undefined) return
  todo.status = '完了'
}
const beginTask = (id: number) => {
  const todo = todos.value.find((todo) => todo.id === id)
  if (todo?.status === undefined) return
  todo.status = '進行中'
}
</script>

<template>
  <div class="space-y-4">
    <h2>タスク一覧</h2>
    <div class="flex space-x-2">
      <input v-model="title" type="text" class="w-full input input-bordered">
      <button @click="addTodo" class="btn btn-primary px-5">
        登録
      </button>
    </div>
    <div>
      <Item
        v-for="todo in todos"
        :todo="todo"
        :key="todo.id"
        @click:done="taskDone"
        @click:begin-task="beginTask"
      />
    </div>
    <div>
      <NuxtLink :to="{ name: 'index' }">
        TOPへ
      </NuxtLink>
      <NuxtLink :to="{ name: 'projects-projectid' }">
        要件一覧
      </NuxtLink>
    </div>
  </div>
</template>
