<template>
  <div class="login">
    <!-- Header -->
    <div class="header bg-gradient-success py-7 py-lg-8 pt-lg-9">
      <div class="separator separator-bottom separator-skew zindex-100">
        <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1"
             xmlns="http://www.w3.org/2000/svg">
          <polygon class="fill-default" points="2560 0 2560 100 0 100"></polygon>
        </svg>
      </div>
    </div>
    <!-- Page content -->
    <b-container class="mt--8 pb-5">
      <b-row class="justify-content-center">
        <b-col lg="5" md="7">
          <b-card no-body class="bg-secondary border-0 mb-0">
            <b-card-body class="px-lg-5 py-lg-5">
              <div class="text-center text-muted mb-4">
                <small>Sign in with credentials</small>
              </div>
              <validation-observer v-slot="{handleSubmit}" ref="formValidator">
                <b-form role="form" @submit.prevent="handleSubmit(onSubmit)">
                  <base-input
                    alternative
                    class="mb-3"
                    name="Email"
                    :rules="{required: true, email: true}"
                    prepend-icon="ni ni-email-83"
                    placeholder="Email"
                    v-model="form.email"
                  >
                  </base-input>

                  <base-input
                    alternative
                    class="mb-3"
                    name="Password"
                    :rules="{required: true, min: 6}"
                    prepend-icon="ni ni-lock-circle-open"
                    type="password"
                    placeholder="Password"
                    v-model="form.password"
                  >
                  </base-input>
                  <div class="text-center">
                    <base-button type="primary" native-type="submit" class="my-4">Sign in</base-button>
                  </div>
                </b-form>
              </validation-observer>
            </b-card-body>
          </b-card>
          <b-row class="mt-3">
            <b-col cols="6"/>
            <b-col cols="6" class="text-right">
              <router-link :to="vueRoutes.signup" class="text-light"><small>Create new account</small></router-link>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { vueRoutes } from '@/routes/routes'
import { vuexTypes } from '@/vuex'
import { mapActions } from 'vuex'

export default {
  name: 'login',
  data: _ => ({
    form: {
      email: '',
      password: ''
    },
    vueRoutes
  }),
  methods: {
    ...mapActions({
      loginAccount: vuexTypes.LOG_IN,
    }),
    async onSubmit() {
      try {
        await this.loginAccount({
          email: this.form.email,
          password: this.form.password
        })
        await this.$router.push(vueRoutes.companies)
      } catch (error) {
        console.log(error)
      }
    }
  }
};
</script>
