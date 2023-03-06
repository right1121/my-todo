<script setup lang="ts">
</script>

<template>
  <div>
    <h2>要件一覧</h2>
    <div>
      <NuxtLink :to="{ name: 'index' }">
        TOPへ
      </NuxtLink>
      <NuxtLink :to="{ name: 'projects-projectid-tasks' }">
        タスク一覧
      </NuxtLink>
    </div>
  </div>
</template>
