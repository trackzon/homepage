<template>
  <div id="app">
        <b-navbar  class="navbar navbar-expand-lg navbar-transparent navbar-light navbar-stick-dark" >
        <div class="container">
          <a class="navbar-brand mr-lg-5" href="https://trackzon.io">
            <img src="@/assets/images/logo.png"><span>TRACK<b>ZON</b></span>
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
        </b-navbar>


                  <router-view/>

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

.navbar-transparent {
  position: absolute;
}

#app {

    font-family: "Open Sans",sans-serif;
    font-size: .9375rem;
    font-weight: 300;
    line-height: 1.9;
    color: #757575;
    background-color: #fff;
}
.navbar-brand span {
  font-size: 1rem;
  padding-left: 10px;
  font-weight: 400;
}

.navbar-brand img {
  margin-top: -5px;
}
</style>
