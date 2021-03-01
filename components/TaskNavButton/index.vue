<template>
  <a
    class="nav-button cursor-pointer text-4xl"
    @click="$emit('navigate', type)"
  >
    <div v-if="type === 'NEXT'">
      <font-awesome-icon icon="arrow-circle-right" />
    </div>
    <div v-else-if="type === 'PREV'">
      <font-awesome-icon icon="arrow-circle-left" />
    </div>
    <div v-else>NULL</div>
  </a>
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
