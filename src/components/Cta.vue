<template>


      <!-- shape Hero -->
      <!-- header text-white h-fullscreen overflow-hidden -->
 <div class="container position-static">
        <div class="row align-items-center h-100">

        <!-- <div class="container py-lg-md d-flex"> -->
          <!-- <div class="col px-0">
            <div class="row"> -->

              <div class="col-lg-7 pr-20">
                <h1 class="display-4 fw-500 text-white">Increase Your Website Value<span>and propel your ROI</span></h1>
                <p class="lead  text-white">Gain insight about your key traffic and revenues. Track and monitor defects to increase your conversion, optimize your EPC.</p>


                <div class="btn-wrapper text-left">
                  <a href="#" v-b-modal.modal-center class="btn btn-white btn-icon mb-3 mb-sm-0">
                    Start Free


                  </a>
                </div>
              </div>
              <div class="col-lg-5">
                <img class="screenshot" src="@/assets/images/preview/dashboard-cta.png" alt="Trackzon Dashboard">
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
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    width: 500px;
    margin-left: 50px;
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

.display-4 span {
  font-size: 2.5rem;
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