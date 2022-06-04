<template>
  <div style="text-align: center">
    <v-img
      src="../assets/epsteinj-mardi-gras.gif"
      alt="congrats gif"
      contain
      max-height="24rem"
    />
    <h1> Congratulations! You won {{ score }} points. </h1>
  </div>
</template>

<script>
export default {
  name: "ScorePage",
  props: {
    score: {
      type: Number,
      required: true
    }
  },
  mounted() {
    setTimeout(() => {
      this.$router.push({path: '/'})
    }, 5000)
  }
}
</script>

<style scoped>

</style>