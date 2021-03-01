<template>
  <div class="rounded-full shadow hover:shadow-md cursor-pointer">
    <div class="p-4 font-mono text-center font-bold text-lg">
      {{ block.label }}
    </div>
  </div>
</template>

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
