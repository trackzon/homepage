<template>


      <!-- shape Hero -->
      <!-- header text-white h-fullscreen overflow-hidden -->
 <div class="container position-static">
        <div class="row align-items-center h-100">

        <!-- <div class="container py-lg-md d-flex"> -->
          <!-- <div class="col px-0">
            <div class="row"> -->

              <div class="col-lg-9 pr-20 offset-1">
 <b-form
    name="audit"
    method="post"
    data-netlify="true"
    data-netlify-honeypot="bot-field">
              <div id="step1" v-show="step=='step1'">

                 <h1 class="display-4 fw-500 text-white">Get A Free Audit <br/> Of Your Amazon Affiliate Website<span>and gain quick tips to increase your revenue up to 25%</span></h1>


                <div class="row">
                  <div class="col-12 col-md-9">
                        <b-form-input id="website" name="site" class="mb-2 mr-sm-2 mb-sm-2" @focus="flag=true"
  @blur="flag=false" :state="state" type="url" v-model.trim="form.site" placeholder="Enter your amazon affiliate website link..." ></b-form-input>
                  </div>

                  <div class="col-12 col-md-3 text-center">
                  <a href="#" v-b-modal.modal-center-disabled class="btn btn-primary btn-icon" @click="step='step2'">
                    Get Your Free Audit


                  </a>
                  </div>
                </div>
              </div>

<transition name="fade" mode="in-out">
                            <div id="step2" v-show="step=='step2'">

                 <h3 class="display-5 fw-500 text-white"><span>Congratulations! Your website has been submitted and will be reviewed shortly. We will sent you a personalized report, please let us know to which email we can send it back to you:</span></h3>

                  <div class="row">

                    <div class="col">
                        <b-input id="mail"  :state="state" name="email" type="email" v-model.trim="form.email" placeholder="Enter your email to receive the report..."></b-input>
                  </div>
                  <div class="col">

                  <a href="#" v-b-modal.modal-center-disabled class="btn btn-primary btn-icon mb-3 mb-sm-0" @click.prevent="handleSubmit" >
                    Get My Personalized Report


                  </a>
                  </div>
                  </div>


              </div>
</transition>
<transition name="fade" mode="in-out">

                            <div id="step3" v-show="step=='step3'">

                 <h3 class="display-5 fw-500 text-white"><span>Thank you, your webiste is now on process for reviewing and we will get back to you very soon.</span></h3>
             <!-- <div class="btn-wrapper text-center">
                  <p>While you are waiting for the report back, have a look to Actiboost, a new way to increase your commission revenue without more traffic:</p>
                  <a href="https://actiboost.com/partner/" v-b-modal.modal-center-disabled class="btn btn-secondary btn-icon mb-3 mb-sm-0">
                      actiboost.com


                  </a>
                </div> -->
              </div>
</transition>
</b-form>

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
    name: "cta_audit",
    data () {
      return {
        form: {
          site: "",
          email: "",

        },
        step: "step1"
      }
    },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join('&');
    },
    handleSubmit () {
      fetch('/', {
        method: 'POST',
        headers: { "Content-Type": "application/x-www-form-urlencoded",  'Cache-Control': 'no-cache' },
        body: this.encode({
          'form-name': 'audit',
          ...this.form,
          'no-cache': 1
        })
      })
      this.step='step3'
      this.$ma.trackEvent({category: 'submit', action: 'submitAuditForm', value: this.form.email})
    }
  }
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
    font-size: 3em;
    font-weight: 200;
    line-height: 1.5;
}

.display-4 span {
  font-size: 2rem;
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