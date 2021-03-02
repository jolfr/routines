<template>
  <div class="flex-row justify-self-center h-screen bg-blue-400">
    <div class="flex bg-indigo-900">
      <Timer time-limit="300" />
    </div>
    <div class="flex bg-indigo-900">
      <NextTask />
    </div>
  </div>
</template>

<script>
import Timer from '@/components/Timer/index'
import NextTask from '@/components/NextTask/index'

export default {
  name: 'Minimal',
  components: {
    Timer,
    NextTask,
  },
}
</script>

<style scoped></style>
