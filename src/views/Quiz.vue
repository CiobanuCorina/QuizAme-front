<template>
  <Question
    :question-data="quiz[counter]"
    :question-number="quiz.length"
    :counter="counter"
    :quiz-id="quizId"
    @click="incrementCounter"
  />
</template>
<script>
import {LevelEnum} from "@/enums/constants";
import {fetchBeginnerQuiz, fetchExpertQuiz, fetchIntermediateQuiz} from "@/api/quizame";
import Question from "@/components/Question";

export default {
  name: "Quiz",
  components: {Question},
  props: {
    quizId: {
      type: Number,
      required: true
    },
    level: {
      type: String,
      required: true
    }
  },
  data: () => ({
    quiz: null,
    timeout: null,
    counter: 0
  }),
  async mounted() {
    await this.fetchQuiz()
  },
  methods: {
    async fetchQuiz() {
      switch (this.level) {
        case LevelEnum.BEGINNER:
          this.quiz = (await fetchBeginnerQuiz(this.quizId)).data
          break;
        case LevelEnum.INTERMEDIATE:
          this.quiz = (await fetchIntermediateQuiz(this.quizId)).data
          break;
        case LevelEnum.EXPERT:
          this.quiz = (await fetchIntermediateQuiz(this.quizId)).data
          this.timeout = (await fetchExpertQuiz(this.quizId)).data
          break;
      }
      if(this.timeout === 'TIMEOUT') this.$router.push({name: 'timeout'})
    },
    incrementCounter() {
      this.counter++
    }
  }
}
</script>

<style scoped>

</style>