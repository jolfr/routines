<template>
  <div class="NextTask">
    <Slider text="-> -> Next Task -> ->" @confirm="$emit('next')"></Slider>
  </div>
</template>

<script>
import Slider from './Slider/index'

export default {
  name: 'NextTask',
  components: {
    Slider,
  },
}
</script>
