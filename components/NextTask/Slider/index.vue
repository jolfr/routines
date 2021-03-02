<template>
  <drag-verify
    :text="text"
    :success-text="successText"
  ></drag-verify>
</template>

<script>
import dragVerify from 'vue-drag-verify'

export default {
  name: 'NextTask',
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
  },
}
</script>
