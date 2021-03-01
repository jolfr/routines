<template>
  <div class="task">
    <BasicBlock :label="task.name" class="bg-teal-800 text-white" />
  </div>
</template>

<script>
import BasicBlock from '../BasicBlock/index'

export default {
  name: 'TaskBlock',
  components: [BasicBlock],
  props: {
    task: {
      type: Object,
      required: true,
      default: () => ({ name: '', ref: '' }),
      validator: (task) => ['name', 'ref'].every((key) => key in task),
    },
  },
}
</script>

<style scoped></style>
