<template>
  <div>
    <v-app-bar
      color="deep-purple accent-4"
      dark
      app
    >
      <div
        v-if="isDashboardPage"
      >
        <v-app-bar-nav-icon
          style="display: inline-block"
          @click.stop="drawer = !drawer"
        />
        <v-toolbar-title
          style="display: inline-block; vertical-align: middle"
        >
          QuizAme
        </v-toolbar-title>
      </div>
      <v-btn
        v-else
        color="deep-purple accent-4"
        @click="$router.go(-1)"
      >
        <v-icon class="fa-solid fa-arrow-left" />
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer
      v-if="isDashboardPage"
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <i class="fa-solid fa-user mr-3" />
            <v-list-item-title>{{ username }}</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <i class="fa-solid fa-right-from-bracket mr-3" />
            <v-list-item-title @click.prevent="logout">
              Logout
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "NavBar",
  props: {
    isDashboardPage: {
      type: Boolean,
      required: true
    }
  },
  data: () => ({
    drawer: false
  }),
  computed: {
    ...mapGetters({
      username: 'auth/getUsername'
    })
  },
  watch: {
    group () {
      this.drawer = false
    },
  },
  methods: {
    ...mapActions({
      logoutUser: 'auth/logout'
    }),
    logout() {
      console.log('clicked')
      this.logoutUser()
      this.$router.go()
    }
  }
}
</script>

<style scoped>

</style>