<template>
  <div class="reward">
    <BasicBlock :label="reward.name" class="bg-green-300 text-green-800" />
  </div>
</template>

<script>
import BasicBlock from '../BasicBlock/index'

export default {
  name: 'RewardBlock',
  components: [BasicBlock],
  props: {
    reward: {
      type: Object,
      required: true,
      default: () => ({ name: '', ref: '' }),
      validator: (task) => ['name', 'ref'].every((key) => key in task),
    },
  },
}
</script>

<style scoped></style>
