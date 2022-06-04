<template>
  <v-app id="inspire">
    <NavBar :is-dashboard-page="true" />
    <v-main>
      <v-container
        class="py-8 px-6"
        fluid
      >
        <v-row>
          <v-card style="width: 100%">
            <v-card-title>Quizzes</v-card-title>
            <v-list two-line>
              <template v-for="questionnaire in questionnaires">
                <v-list-item
                  :key="questionnaire.id"
                >
                  <v-list-item-avatar>
                    <v-icon
                      large
                      color="deep-purple accent-4"
                    >
                      mdi-head-question
                    </v-icon>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title>{{ questionnaire.name }}</v-list-item-title>
                  </v-list-item-content>
                  <v-btn
                    color="deep-purple accent-4"
                    class="white--text"
                    @click="redirectToLevels(questionnaire.id)"
                  >
                    Try now
                  </v-btn>
                </v-list-item>

                <v-divider
                  v-if="questionnaire.id !== questionnaires.length"
                  :key="questionnaire.id"
                  inset
                />
              </template>
            </v-list>
          </v-card>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar";
import {fetchQuestionnaires} from "@/api/quizame";
export default {
  name: 'Dashboard',
  components: {NavBar},
  data: () => ({
    questionnaires: null
  }),
  mounted() {
    this.fetchQuestionnaires()
  },
  methods: {
    async fetchQuestionnaires() {
      this.questionnaires = (await fetchQuestionnaires()).data
    },
    redirectToLevels(quizId) {
        this.$router.push({name: 'level', params: {quizId: quizId}})
    }
  }
}
</script>