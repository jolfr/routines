<template>
  <div>
    <Timer time-limit="300" />
    <NextTask />
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
