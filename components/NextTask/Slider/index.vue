<template>
  <drag-verify
    :width="width"
    :text="text"
    :success-text="successText"
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
    successText: {
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
