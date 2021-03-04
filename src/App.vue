<template>
  <div class="neue-dark">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/partials/Navbar";
import Footer from "@/components/partials/Footer";
export default {
  components: {
    Navbar,
    Footer
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Condensed&family=Roboto+Slab&display=swap");

/** Font Manipulation */
p,
label {
  font-family: "Roboto Condensed", sans-serif;
  color: #ffebcd;
}

h1,
h2,
h3,
h4,
h5,
h6,
.nav-link,
.navbar-brand {
  font-family: "Roboto Slab", serif;
  font-weight: 500;
  color: #ffebcd;
}

footer {
  color: #ffebcd;
}

.navbar-brand {
  font-size: 24pt;
}
.nav-link {
  font-size: 18pt;
}

/** All Horizontal Rules */
hr {
  background-color: #ffebcd;
}

/** Navbar */
.sticky {
  z-index: 10;
  position: sticky;
  top: 0;
  width: 100%;
}
.navbar-brand > img {
  width: 50px;
}

/* Body */
.neue-dark {
  background-color: #333 !important;
}
</style>
