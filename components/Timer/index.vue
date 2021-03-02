<template>
  <div>
    <BaseTimer :time-stat="timeStat" @toggle="toggleTimer" />
  </div>
</template>

<script>
import BaseTimer from './BaseTimer/index'

export default {
  name: 'Timer',
  components: {
    BaseTimer,
  },
  props: {
    timeLimit: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      timerInterval: null,
      timePassed: 0,
      timer: false,
    }
  },
  computed: {
    timeStat() {
      const timeLeft = this.timeLimit - this.timePassed
      const rawTimeFrac = timeLeft / this.timeLimit
      const timeFrac = rawTimeFrac - (1 / this.timeLimit) * (1 - rawTimeFrac)
      return [timeLeft, timeFrac]
    },
  },
  methods: {
    startTimer() {
      this.timer = true
      this.timePassed = 0
      this.timerInterval = setInterval(() => this.tickOrResetTimer(), 1000)
    },
    pauseTimer() {
      this.timer = false
      clearInterval(this.timerInterval)
    },
    resumeTimer() {
      this.timer = true
      this.timerInterval = setInterval(() => this.tickOrResetTimer(), 1000)
    },
    resetTimer() {
      this.timer = false
      clearInterval(this.timerInterval)
      this.timePassed = 0
    },
    tickOrResetTimer() {
      if (this.timePassed === this.timeLimit) {
        this.resetTimer()
      } else {
        this.timePassed += 1
      }
    },
    toggleTimer() {
      if (this.timer) {
        this.pauseTimer()
      } else {
        this.resumeTimer()
      }
    },
  },
}
</script>

<style scoped></style>
