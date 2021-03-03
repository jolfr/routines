<template>
  <div class="NextTask text-white">
    <Slider
      :width="width"
      text="-> -> Next Task -> ->"
      @confirm="$emit('next')"
    ></Slider>
  </div>
</template>

<script>
import Slider from './Slider/index'

export default {
  name: 'NextTask',
  components: {
    Slider,
  },
  props: {
    width: {
      type: Number,
      default: 300,
    },
  },
}
</script>
