<template>
  <drag-verify
    class="border-2 border-dashed border-opacity-50"
    :width="width"
    :text="text"
    background="transparent"
    progress-bar-bg="transparent"
    completed-bg="transparent"
    @passcallback="$emit('confirm')"
  ></drag-verify>
</template>

<script>
import dragVerify from 'vue-drag-verify'

export default {
  name: 'Slider',
  components: {
    dragVerify,
  },
  props: {
    text: {
      type: String,
      required: true,
    },
    width: {
      type: Number,
      default: 600,
    },
  },
}
</script>
