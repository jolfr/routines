<template>
  <div class="nav-button border-2 rounded-full cursor-pointer px-2">
    <div v-if="type === 'NEXT'">NEXT</div>
    <div v-else-if="type === 'PREV'">PREV</div>
    <div v-else>NULL</div>
  </div>
</template>

<script>
export default {
  name: 'TaskNavButton',
  props: {
    type: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped></style>
