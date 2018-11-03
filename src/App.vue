<template>
  <div id="app" class="pb-0">
    <header class="header-global">
      <nav id="navbar-main" class="navbar navbar-main navbar-expand-lg navbar-transparent navbar-light headroom bg-gradient-warning">
        <div class="container">
          <a class="navbar-brand mr-lg-5" href="https://trackzon.io">
            <img src="@/assets/images/logo.png"> TRACK
            <b>ZON</b>
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar_global" aria-controls="navbar_global" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                    </button>



          <ul class="navbar-nav align-items-lg-center ml-lg-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Features</router-link>
            </li>

            <li class="nav-item">
              <router-link class="nav-link" to="/">Pricing</router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="javascript:netlifyIdentity.open('login')">Login</a>

            </li>
          </ul>

        </div>



      </nav>

      <main>
        <div class="position-relative">
          <router-view/>
        </div>
      </main>


  </header>
  </div>
</template>
<script>
  import netlifyIdentity from "netlify-identity-widget"
  export default {
    name: "app",
    created() {
      window.netlifyIdentity = netlifyIdentity;
      netlifyIdentity.init();
    }

  }
</script>
<style lang="scss">
#app {
  position: relative;
  color: #fff;
  background-color: #fff;
}

.color1 {
  background-color: #ff9900;
}

.color1b {
  background-color: #ffa033;
}

.color2 {
  background-color: #131a22;
}

.color3 {
  background-color: #232f3e;
}

.hidden {
  display: none;
}
</style>
