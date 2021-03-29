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
  name: "App",
  metaInfo: {
    title: "Bottom's Up",
    titleTemplate: "%s :: Bottom's Up",
    meta: [
      // google metatags
      {
        itemprop: "name",
        template: chunk => `${chunk} :: Bottom's Up`,
        vmid: "name"
      },
      {
        itemprop: "image",
        content:
          "https://bottoms-up-vue2.sandbox.cindrmon.blue/img/cafe1-patrick-tomasso.3bf4d61d.jpg"
      },
      // facebook metatags
      {
        property: "og:title",
        template: chunk => `${chunk} :: Bottom's Up`,
        vmid: "og:title"
      },
      {
        property: "og:image",
        content:
          "https://bottoms-up-vue2.sandbox.cindrmon.blue/img/cafe1-patrick-tomasso.3bf4d61d.jpg"
      },
      // twitter metatags
      {
        name: "twitter:title",
        template: chunk => `${chunk} :: Bottom's Up`,
        vmid: "twitter:title"
      },
      {
        name: "twitter:image",
        content:
          "https://bottoms-up-vue2.sandbox.cindrmon.blue/img/cafe1-patrick-tomasso.3bf4d61d.jpg"
      }
    ]
  },
  components: {
    Navbar,
    Footer
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto+Condensed&family=Roboto+Slab&display=swap");

/** Font Manipulation */
p,
label,
.modal-body {
  font-family: "Roboto Condensed", sans-serif;
  color: #ffebcd;
}

h1,
h2,
h3,
h4,
h5,
h6,
.navbar-brand,
.nav-item,
.nav-link,
.modal-header,
a:hover {
  font-family: "Roboto Slab", serif;
  font-weight: 500;
  color: #ffebcd;
}

.navbar-brand {
  font-size: 24pt;
}
.nav-item {
  font-size: 18pt;
}

footer {
  color: #ffebcd;
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
