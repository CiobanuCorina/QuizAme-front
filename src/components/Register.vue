<template>
  <div>
    <v-card
      dark
      color="deep-purple accent-4"
      elevation-24
      style="border: 1px; border-radius: 50px; text-align: center;"
    >
      <v-card-text>
        <h4 class="display-2 font-weight-bold">
          Register
        </h4>
        <hr>
        <br>
        <v-form>
          <v-text-field
            v-model="username"
            clearable
            label="Username"
            prepend-icon="mdi-account-circle"
            type="text"
            color="white"
            :rules="usernameRules"
          />
          <v-text-field
            v-model="email"
            clearable
            label="Email"
            prepend-icon="mdi-email"
            type="text"
            color="white"
            :rules="emailRules"
          />
          <v-text-field
            v-model="password"
            clearable
            label="Password"
            prepend-icon="mdi-lock"
            type="password"
            color="white"
            :rules="passwordRules"
          />
          <v-text-field
            v-model="passwordConfirm"
            clearable
            label="Repeat password"
            prepend-icon="mdi-lock"
            type="password"
            color="white"
          />
        </v-form>
        <br>
        <v-btn
          color="grey darken-2"
          large
          @click="registerUser"
        >
          Enter
        </v-btn>
        <p class="mt-3">
          Already have an account?
          <router-link
            :to="{name: 'login'}"
            style="text-decoration: none"
          >
            <span
              class="orange--text"
              style="cursor:pointer"
            >
              Login
            </span>
          </router-link>
        </p>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
import {register} from "@/api/quizame";
import {mapActions} from "vuex";
export default {
  name: "Register",
  beforeRouteLeave (to, from, next) {
    if(this.firstName || this.lastName || this.username ||
        this.email || this.password) {
      this.pop().then((answer) => next(answer));
    }
    else next()
  },
  data() {
    return {
      user: null,
      username: '',
      email: '',
      password: '',
      passwordConfirm: '',
      active: false,
      resolve: null,
      usernameRules: [
        v => !!v || 'This field is required',
        v => v.length > 2 || 'Username should have at least 3 characters'
      ],
      emailRules: [
        v => !!v || 'This field is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      passwordRules: [
        v => !!v || 'This field is required',
        v => (v.length > 8) || 'Password should have at least 8 characters',
        v => /[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/.test(v) ||
            'Password should contain at least one special character',
        v => /[0123456789]/.test(v) || 'Password should contains at least one digit'
      ],
    }
  },
  methods: {
    pop() {
      this.active = true;
      return new Promise((resolve) =>
          this.resolve = resolve
      );
    },
    async registerUser() {
      this.user = (await register(this.username, this.email,this.password)).data
      this.loginUser({username: this.username, email: this.email, password: this.password})
      await this.$router.go()
    },
    ...mapActions({
      loginUser: 'auth/login'
    })
  }
}
</script>

<style scoped>
</style>