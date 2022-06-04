<template>
  <div>
    <v-card
      elevation="2"
    >
      <v-card-title>{{ questionData.questionText }}</v-card-title>
      <v-card-text
        v-for="(answer, index) in questionData.answers"
        :key="index"
      >
        <v-btn @click="checkAnswer(getAnswerKey(answer))">
          {{ getAnswerKey(answer) }}
        </v-btn>
      </v-card-text>
      <v-card-actions>
        <v-btn
          v-if="questionNumber !== (counter + 1)"
          color="deep-purple accent-4"
          @click="$emit('click')"
        >
          Next
        </v-btn>
        <v-btn
          v-else
          @click="submit"
        >
          Finish
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import {postQuizScore} from "@/api/quizame";

export default {
  name: "Question",
  props: {
    questionData: {
      type: Object,
      required: true
    },
    questionNumber: {
      type: Number,
      required: true
    },
    counter: {
      type: Number,
      required: true
    },
    quizId: {
      type: Number,
      required: true
    },
  },
  data: () => ({
    score: 0
  }),
  methods: {
    getAnswerKey(answer) {
      return Object.keys(answer)[0]
    },
    checkAnswer(submitedAnswer) {
      if((this.questionData.answers.find((answer) => this.getAnswerKey(answer) === submitedAnswer))[submitedAnswer])
        this.score += 10
      console.log(this.score)
    },
    async submit() {
      await postQuizScore(this.quizId, this.score)
      await this.$router.push({name: 'congrats', params: {score: this.score}})
    }
  }
}
</script>

<style scoped>

</style>