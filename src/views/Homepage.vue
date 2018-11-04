<template>
  <div class="home">
   <header class="header text-white h-fullscreen overflow-hidden bg-gradient-warning">
       <vue-particles
        color="#ffffff"
        :particleOpacity="0.80"
        linesColor="#FFFFFF"
        :particlesNumber="160"
        shapeType="circle"
        :particleSize="2"
        :linesWidth="1"
        :lineLinked="false"
        :lineOpacity="1"
        :linesDistance="150"
        :moveSpeed="2"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="repulse"
        style="width: 100%; height: 100%;"
      >
      </vue-particles>



           <cta/>
</header>

  <div class="main-content bg-white">

    <numbers/>
    <features/>
    <pricing/>
    <customer/>
    <hfooter/>
</div>


  </div>
</template>

<script>

// FadeOUt header
    // $(window).on('scroll', function() {
    //   var st = $(this).scrollTop()-200;
    //   $('.header.fadeout').css('opacity', (1-st/ window.innerHeight ) );
    // });
// @ is an alias to /src
import cta from '@/components/Cta.vue'
import qa from '@/components/QAForm.vue'
import customer from '@/components/Customer.vue'
import features from '@/components/Features.vue'
import pricing from '@/components/Pricing.vue'
import numbers from '@/components/Numbers.vue'
import hfooter from '@/components/Footer.vue'
import AOS from 'aos'

export default {
  name: 'homepage',

  created () {
    var options = {
      offset: 220,
      duration: 1500,
    }
    AOS.init(options)
  },
  components: {
    qa, cta, customer, features, pricing, numbers, hfooter
  }
}
</script>

<style lang="scss">
.header.h-fullscreen {
    padding-top: 0px; // 90 ?
}
.header>.container, .header>.container-fluid {
    position: relative;
    height: 100%;
}
.position-static {
    position: static !important;
}

.h-fullscreen, .h-100vh {
    height: 100vh !important;
}

.align-items-center {
    -webkit-box-align: center !important;
    align-items: center !important;
}

.main-content {
    -webkit-box-flex: 1;
    flex-grow: 1;
}

.feature-1 .feature-icon {
    font-size: 3rem;
    line-height: 1;
    margin-bottom: 1.75rem;
    color: #929daf;
}
.lead-8 {
    font-size: 3.75rem !important;
}
.text-info {
    color: #926dde !important;
}

.section-header {
  text-align: center;
  max-width: 70%;
  margin: 0 auto 70px; }
  .section-header small {
    display: inline-block;
    font-size: 0.6875rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.75px;
    margin-bottom: 1.5rem;
    word-spacing: 2px;
    color: rgba(153, 153, 153, 0.6); }
  .section-header hr {
    width: 50px;
    margin-top: 2.5rem;
    margin-bottom: 1.5rem; }
  .section-header p {
    font-size: 1.0625rem; }
    .section-header p.lead, .section-header .pricing-4 .plan-price p, .pricing-4 .plan-price .section-header p {
      font-size: 1.125rem; }
  @media (max-width: 991.98px) {
    .section-header {
      max-width: 90%; } }


.bg-theme-gray {
    background-color: #fafbfb;
}
</style>
