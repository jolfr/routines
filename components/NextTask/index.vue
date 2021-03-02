<template>
  <drag-verify
    :width="width"
    :height="height"
    :text="text"
    :success-text="successText"
    :background="background"
    :progress-bar-bg="progressBarBg"
    :completed-bg="completedBg"
    :handler-bg="handlerBg"
    :handler-icon="handlerIcon"
    :text-size="textSize"
    :success-icon="successIcon"
    :circle="getShape"
  ></drag-verify>
</template>

<script>
import dragVerify from 'vue-drag-verify'

export default {
  name: 'NextTask',
  components: {
    dragVerify,
  },
}
</script>

<style scoped></style>
