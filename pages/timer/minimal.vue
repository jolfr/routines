<template>
  <div class="flex-row h-screen justify-end bg-red-700">
    <div class="flex">
      <Timer time-limit="300" class="mx-auto" />
    </div>
    <div class="flex">
      <NextTask width="300" class="mx-auto" />
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
