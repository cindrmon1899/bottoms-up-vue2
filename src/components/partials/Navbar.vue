<template>
  <header class="sticky">
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand">
          <img src="favicon.ico" alt="" srcset="" />
          Bottom's Up!
        </router-link>

        <!-- Responsive Button -->
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- NavBar Content -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/about">
                <i class="fa fa-info-circle" aria-hidden="true"></i> About
              </router-link>
            </li>

            <li class="nav-item">
              <router-link class="nav-link" to="/drinks/coffee">
                <i class="fas fa-mug-hot"></i> Coffee
              </router-link>
            </li>

            <li class="nav-item">
              <router-link class="nav-link" to="/drinks/tea">
                <i class="fas fa-leaf"></i> Tea
              </router-link>
            </li>

            <li class="nav-item">
              <router-link class="nav-link" to="/drinks/shakes">
                <i class="fas fa-blender"></i> Shakes
              </router-link>
            </li>

            <li class="nav-item">
              <router-link class="nav-link" to="/order">
                <i class="fas fa-scroll"></i> Order
              </router-link>
            </li>
          </ul>

          <div class="my-2 my-lg-0">
            <button
              class="btn btn-outline-secondary"
              data-toggle="modal"
              data-target="#login"
            >
              Login
            </button>
            <button
              class="btn btn-secondary"
              data-toggle="modal"
              data-target="#register"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
