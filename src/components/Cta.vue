<template>


      <!-- shape Hero -->
      <!-- header text-white h-fullscreen overflow-hidden -->
 <div class="container position-static">
        <div class="row align-items-center h-100">

        <!-- <div class="container py-lg-md d-flex"> -->
          <!-- <div class="col px-0">
            <div class="row"> -->
              <div class="col-lg-7">
                <h1 class="display-4 fw-500 text-white">
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
                <p class="lead  text-white">By tracking your key metrics we can optimize your traffic and alert you when a product get out of stock.</p>
                <div class="btn-wrapper">
                  <a href="https://www.creative-tim.com/product/argon-design-system" class="btn btn-white btn-icon mb-3 mb-sm-0">
                    <span class="btn-inner--icon"><i class="ni ni-cloud-download-95"></i></span>
                    <span class="btn-inner--text">Get Started</span>
                  </a>
                </div>
              </div>
              <div class="col-lg-5">
                <img class="screenshot" src="@/assets/images/screenshot.png" alt="Trackzon Dashboard">
              </div>
            </div>
          <!-- </div>
        </div> -->
        <!-- SVG separator -->
        <!-- <div class="separator separator-bottom separator-skew">
          <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <polygon class="fill-white" points="2560 0 2560 100 0 100"></polygon>
          </svg>
        </div> -->
      </div>

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
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.h-100 {
    height: 100% !important;
}

.text-white h1, .text-white h2, .text-white h3, .text-white h4, .text-white h5, .text-white h6, .text-white .h1, .text-white .h2, .text-white .h3, .text-white .h4, .text-white .h5, .text-white .h6 {
    color: #fff;
}
.fw-500, .font-weight-500 {
    font-weight: 500 !important;
}
.display-4 {
    font-size: 3rem;
    font-weight: 200;
    line-height: 1.5;
}

h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {
    color: #323d47;

}

h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {
    margin-bottom: .5rem;

    font-weight: 400;
    line-height: 1.5;
    color: #323d47;
}
</style>