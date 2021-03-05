<template>
  <header class="sticky">
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
          <b-button type="button" class="btn-outline-secondary">Login</b-button>
          <b-button type="button" class="btn-secondary">Register</b-button>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>
