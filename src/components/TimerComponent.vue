<template>
  <div>
    <p class="text-lg">{{ formattedTime }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      startTime: null,
      currentTime: null,
      countdownDuration: 60, // Set the countdown duration to 60 seconds
    };
  },
  computed: {
    formattedTime() {
      if (!this.startTime) {
        return '00:59';
      }else{
          const remainingSeconds = Math.max(0, this.countdownDuration - this.elapsedSeconds);
          const minutes = String(Math.floor(remainingSeconds / 60)).padStart(2, '0');
          const seconds = String(remainingSeconds % 60).padStart(2, '0');
    
          return `${minutes}:${seconds}`;
      }

    },
    elapsedSeconds() {
      if (!this.startTime) {
        return 0;
      }
      return Math.floor((this.currentTime - this.startTime) / 1000);
    },
  },
  created() {
    this.startTimer();
  },
  beforeUnmount() {
    this.stopTimer();
  },
  methods: {
    startTimer() {
      this.startTime = new Date();
      this.timerInterval = setInterval(() => {
        this.currentTime = new Date();

        if (this.elapsedSeconds >= this.countdownDuration) {
          this.stopTimer();
          this.navigateToRoute(); // Call the method to navigate to a different route
        }
      }, 1000);
    },
    stopTimer() {
      clearInterval(this.timerInterval);
    },
    navigateToRoute() {
      // Replace 'your-route-name' with the actual route name you want to navigate to
      // this.$router.push({ name: 'home' });
    },
  },
};
</script>

<style>
.timer {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
}
</style>
