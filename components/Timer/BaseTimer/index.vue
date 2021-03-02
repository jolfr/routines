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
          <path
            :stroke-dasharray="circleDasharray"
            class="base-timer__path-remaining"
            d="
            M 50, 50
            m -45, 0
            a 45,45 0 1,0 90,0
            a 45,45 0 1,0 -90,0
          "
          ></path>
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
    timeStat: {
      type: Array,
      required: true,
    },
  },
  computed: {
    formattedTimeLeft() {
      const timeLeft = this.timeStat[0]
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
    // Update the dasharray value as time passes, starting with 283
    circleDasharray() {
      return `${(this.timeStat[1] * 283).toFixed(0)} 283`
    },
    // Divides time left by the defined time limit.
    timeFraction() {
      return this.timeLeft / this.timeLimit
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
  stroke: none;
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

.base-timer__path-remaining {
  /* Just as thick as the original ring */
  stroke-width: 7px;
  /* Rounds the line endings to create a seamless circle */
  stroke-linecap: round;
  /* Makes sure the animation starts at the top of the circle */
  transform: rotate(90deg);
  transform-origin: center;
  /* One second aligns with the speed of the countdown timer */
  transition: 1s linear all;
  /* Allows the ring to change color when the color value updates */
  stroke: rgb(65, 184, 131);
}

.base-timer__svg {
  transform: scaleX(-1);
}
</style>
