<template>
  <div><BaseTimer :time-left="timeLeft" /></div>
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
    }
  },
  computed: {
    timeLeft() {
      return this.timeLimit - this.timePassed
    },
  },
  mounted() {
    this.startTimer()
  },
  methods: {
    startTimer() {
      this.timePassed = 0
      this.timerInterval = setInterval(() => (this.timePassed += 1), 1000)
    },
    pauseTimer() {
      this.timerInterval = null
    },
    resumeTimer() {
      this.timerInterval = setInterval(() => (this.timePassed += 1), 1000)
    },
    resetTimer() {
      this.timePassed = 0
    },
  },
}
</script>

<style scoped></style>
