<template>
  <div class="trigger">
    <BasicBlock :label="trigger.name" class="bg-red-300 text-red-800" />
  </div>
</template>

<script>
import BasicBlock from '../BasicBlock/index'

export default {
  name: 'TriggerBlock',
  components: [BasicBlock],
  props: {
    trigger: {
      type: Object,
      required: true,
      default: () => ({ name: '', ref: '' }),
      validator: (trigger) => ['name', 'ref'].every((key) => key in trigger),
    },
  },
}
</script>

<style scoped></style>
