<template>
  <div class="rounded-full shadow hover:shadow-md cursor-pointer">
    <div class="p-4 font-mono text-center font-bold text-lg">
      {{ label }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'BasicBlock',
  props: {
    label: {
      type: String,
      required: true,
      default: () => '',
    },
  },
}
</script>
