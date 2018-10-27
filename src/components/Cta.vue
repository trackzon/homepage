<template>


      <!-- shape Hero -->
      <section class="section section-lg section-shaped pb-150 bg-gradient-warning">
        <div class="shape shape-style-1 shape-default">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="container py-lg-md d-flex">
          <div class="col px-0">
            <div class="row">
              <div class="col-lg-6">
                <h1 class="display-3  text-white">
                    <split-test>
                      <template slot="A" chance="2">
                        Get More Commission
                      </template>
                      <template slot="B" chance="2">
                        Increase Your Webiste Value
                      </template>
                    </split-test>


                  <span>with the same traffic</span>
                </h1>
                <p class="lead  text-white">By tracking your best links ypu can optimize your links, alerting you when a product you link is out of stock.</p>
                <div class="btn-wrapper">
                  <a href="https://www.creative-tim.com/product/argon-design-system" class="btn btn-white btn-icon mb-3 mb-sm-0">
                    <span class="btn-inner--icon"><i class="ni ni-cloud-download-95"></i></span>
                    <span class="btn-inner--text">Get Started</span>
                  </a>
                </div>
              </div>
              <div class="col-lg-6">
                <img class="screenshot" src="@/assets/images/screenshot.png" alt="Trackzon Dashboard">
              </div>
            </div>
          </div>
        </div>
        <!-- SVG separator -->
        <div class="separator separator-bottom separator-skew">
          <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <polygon class="fill-white" points="2560 0 2560 100 0 100"></polygon>
          </svg>
        </div>
      </section>

</template>

<script>
  export default {
    name: "cta"
  }
</script>

<style scoped>
.screenshot {
    border-radius: 8px;
    -webkit-filter: grayscale(20%);
    filter: grayscale(20%);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
}
</style>