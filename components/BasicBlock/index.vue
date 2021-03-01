<template><div></div></template>

<script>
export default {
  name: 'BasicBlock',
  props: {
    block: {
      type: Object,
      required: true,
      default: () => ({ label: '', type: '' }),
      validator: (block) => ['label', 'type'].every((key) => key in block),
    },
  },
}
</script>
