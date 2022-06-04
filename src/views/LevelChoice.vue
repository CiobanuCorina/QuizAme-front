<template>
  <div>
    <NavBar
      :is-dashboard-page="false"
      class="pb-10"
    />
    <div
      class="pt-5"
      style="text-align: center"
    >
      <h1>Choose the Level</h1>
      <v-img
        src="../assets/sgg-quiz-text.gif"
        alt="quiz gif"
        contain
        max-height="24rem"
      />
    </div>
    <div
      style="text-align: center"
    >
      <v-btn
        color="deep-purple accent-4"
        class="white--text mr-3"
        @click="startQuiz('beginner', quizId)"
      >
        Beginner
      </v-btn>
      <v-btn
        color="deep-purple accent-4"
        class="white--text mr-3"
        @click="startQuiz('intermediate', quizId)"
      >
        Intermediate
      </v-btn>
      <v-btn
        color="deep-purple accent-4"
        class="white--text"
        @click="startQuiz('expert', quizId)"
      >
        Expert
      </v-btn>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
export default {
  name: "LevelChoice",
  components: {NavBar},
  props: {
    quizId: {
      type: Number,
      required: true
    }
  },
  methods: {
    startQuiz(level, quizId) {
      this.$router.push({name: 'quiz', params: {level: level, quizId: quizId}})
    }
  }
}
</script>

<style scoped>

</style>