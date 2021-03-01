<template>
  <div class="task-label cursor-pointer">
    <div>{{ title }} - {{ description }}</div>
  </div>
</template>

<script>
export default {
  name: 'TaskLabel',
  props: {
    title: {
      type: String,
      required: true,
      default: '',
    },
    description: {
      type: String,
      required: true,
      default: '',
    },
  },
}
</script>
