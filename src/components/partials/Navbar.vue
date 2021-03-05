/* eslint-disable prettier/prettier */
<template>
  <div class="navigation-bar">
    <b-navbar toggleable="md" type="dark" class="bg-dark" sticky>
      <b-navbar-brand to="/">
        <img src="favicon.ico" alt="bottom's up logo" srcset="" />
        Bottom's Up!
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/about">
            <i class="fa fa-info-circle" aria-hidden="true"></i> About
          </b-nav-item>
          <b-nav-item to="/drinks/coffee">
            <i class="fas fa-mug-hot"></i> Coffee
          </b-nav-item>
          <b-nav-item to="/drinks/tea">
            <i class="fas fa-leaf"></i> Tea
          </b-nav-item>
          <b-nav-item to="/drinks/shakes">
            <i class="fas fa-blender"></i> Shakes
          </b-nav-item>
          <b-nav-item to="/order">
            <i class="fas fa-scroll"></i> Order
          </b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-button variant="outline-secondary" v-b-modal.loginForm
            >Login</b-button
          >
          <b-button variant="secondary" v-b-modal.registerForm
            >Register</b-button
          >
        </b-navbar-nav>

        <div class="hardcoded-modals">
          <b-modal
            id="loginForm"
            header-bg-variant="dark"
            body-bg-variant="dark"
            footer-bg-variant="dark"
            title="Login"
          >
            <b-form @submit="onSubmitLogin">
              <b-form-group id="username">
                <b-form-input
                  id="usernameInput"
                  type="text"
                  placeholder="Username"
                  required
                />
              </b-form-group>
              <b-form-group id="password">
                <b-form-input
                  id="passwordInput"
                  type="password"
                  placeholder="Password"
                  required
                />
              </b-form-group>
              <b-button type="submit">Login</b-button>
            </b-form>
            <template #modal-footer>
              <b-button
                type="button"
                @click="closeModalLogin"
                variant="outline-secondary"
                >Cancel</b-button
              >
            </template>
          </b-modal>
          <b-modal
            id="registerForm"
            header-bg-variant="dark"
            body-bg-variant="dark"
            footer-bg-variant="dark"
            title="Register"
          >
            <b-form @submit="onSubmitRegister">
              <b-form-group id="name">
                <b-form-input
                  id="nameInput"
                  type="text"
                  placeholder="Name"
                  required
                />
              </b-form-group>
              <b-form-group id="email">
                <b-form-input
                  id="emailInput"
                  type="email"
                  placeholder="Email"
                  required
                />
              </b-form-group>
              <b-form-group id="username">
                <b-form-input
                  id="usernameInput"
                  type="text"
                  placeholder="Username"
                  required
                />
              </b-form-group>
              <b-form-group id="password">
                <b-form-input
                  id="passwordInput"
                  type="password"
                  placeholder="Password"
                  required
                />
              </b-form-group>
              <b-button type="submit">Register</b-button>
            </b-form>
            <template #modal-footer>
              <b-button
                type="button"
                @click="closeModalRegister"
                variant="outline-secondary"
                >Cancel</b-button
              >
            </template>
          </b-modal>
        </div>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  methods: {
    onSubmitLogin() {
      alert("Submitted!");
      this.$bvModal.hide("loginForm");
    },
    onSubmitRegister() {
      alert("Signed Up!");
      this.$bvModal.hide("registerForm");
    },
    closeModalLogin() {
      this.$bvModal.hide("loginForm");
    },
    closeModalRegister() {
      this.$bvModal.hide("registerForm");
    }
  }
};
</script>

<style lang="scss" scoped>
.btn {
  margin: auto 5px;
}
</style>
