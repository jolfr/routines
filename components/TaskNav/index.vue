<template>
  <div
    class="task-nav inline-flex space-x-0 justify-items-center"
    :class="dark ? ' text-white' : ''"
  >
    <TaskNavButton type="PREV" @navigate="$emit('prev-task', task)" />
    <TaskLabel :title="task.title" :description="task.desc" class="py-2" />
    <TaskNavButton type="NEXT" @navigate="$emit('next-task', task)" />
  </div>
</template>

<script>
import TaskLabel from '../TaskLabel/index'
import TaskNavButton from '../TaskNavButton/index'

export default {
  name: 'TaskNav',
  components: [TaskLabel, TaskNavButton],
  props: {
    task: {
      type: Object,
      required: true,
      default: () => ({ title: '', desc: '' }),
      validator: (task) => ['title', 'desc'].every((key) => key in task),
    },
    dark: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
}
</script>

<style scoped></style>
