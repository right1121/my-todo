<script setup lang="ts">
interface todo {
  id: number
  title: string
}
type todosType = todo[]

const todos: todosType = []
</script>
<template>
  <div>
    <div v-for="todo in todos">
      {{ todo }}
    </div>
  </div>
</template>
