<template>
  <div id="app">
    <header class="header-global">
        <b-navbar id="navbar-main" class="navbar navbar-expand-lg navbar-transparent navbar-light navbar-stick-dark" >
        <div class="container">
          <a class="navbar-brand mr-lg-5" href="https://trackzon.io">
            <img src="@/assets/images/logo.png"><span>TRACK<b>ZON</b></span>
          </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar_global" aria-controls="navbar_global" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="navbar-collapse collapse" id="navbar_global">
          <div class="navbar-collapse-header">
            <div class="row">
              <div class="col-6 collapse-brand">
                <a href="../index.html">
                  <!-- <img src="../assets/img/brand/blue.png"> -->
                </a>
              </div>
              <div class="col-6 collapse-close">
                <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbar_global" aria-controls="navbar_global" aria-expanded="false" aria-label="Toggle navigation">
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
          </div>

          <ul class="navbar-nav align-items-lg-center ml-lg-auto">
            <li class="nav-item">
              <a class="nav-link" href="#features">Features</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#pricing">Pricing</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="javascript:netlifyIdentity.open('login')">Login</a>

            </li>
          </ul>
        </div>
        </div>
        </b-navbar>
        </header>

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
