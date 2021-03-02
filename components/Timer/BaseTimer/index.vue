<template>
  <a class="cursor-pointer" @click="$emit('toggle')">
    <div class="base-timer rounded-full hover:shadow-2xl active:shadow-inner">
      <svg
        class="base-timer__svg"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g class="base-timer__circle">
          <circle class="base-timer__path-elapsed" cx="50" cy="50" r="46.5" />
        </g>
      </svg>
      <span class="base-timer__label">
        {{ formattedTimeLeft }}
      </span>
    </div>
  </a>
</template>

<script>
export default {
  name: 'BaseTimer',
  props: {
    timeLeft: {
      type: Number,
      required: true,
    },
  },
  computed: {
    formattedTimeLeft() {
      const timeLeft = this.timeLeft
      // The largest round integer less than or equal to the result of time divided being by 60.
      const minutes = Math.floor(timeLeft / 60)
      // Seconds are the remainder of the time divided by 60 (modulus operator)
      let seconds = timeLeft % 60
      // If the value of seconds is less than 10, then display seconds with a leading zero
      if (seconds < 10) {
        seconds = `0${seconds}`
      }
      // The output in MM:SS format
      return `${minutes}:${seconds}`
    },
  },
}
</script>

<style scoped>
/* Sets the containers height and width */
.base-timer {
  position: relative;
  width: 300px;
  height: 300px;
}

.base-timer__path-elapsed {
  stroke-width: 7px;
  stroke: grey;
}

.base-timer__circle {
  fill: none;
  stroke: none;
}

.base-timer__label {
  position: absolute;

  /* Size should match the parent container */
  width: 300px;
  height: 300px;
  /* Keep the label aligned to the top */
  top: 0;
  /* Create a flexible box that centers content vertically and horizontally */
  display: flex;
  align-items: center;
  justify-content: center;
  /* Sort of an arbitrary number; adjust to your liking */
  font-size: 48px;
}
</style>
