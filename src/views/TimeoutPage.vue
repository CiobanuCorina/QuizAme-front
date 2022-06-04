<template>
  <div style="text-align: center">
    <v-img
      src="../assets/timeout.gif"
      alt="timeout gif"
      contain
      max-height="24rem"
    />
  </div>
</template>

<script>
export default {
  name: "TimeoutPage",
  mounted() {
    setTimeout(() => {
      this.$router.push({path: '/'})
    }, 5000)
  }
}
</script>

<style scoped>

</style>