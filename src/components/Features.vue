<template>
<div>


  <section class="section bg-theme-gray">
        <div class="container">
          <header class="section-header">
            <a name="features"></a>
            <small>Features</small>
            <h2>Amazon Affiliate To The Next Level</h2>

            <hr>
            <p class="lead">Trackzon helps your website grow without the need of more traffic, <br/>
            while you gain complete insight into your website positioning and health.</p>
            <br>
          </header>

          <div class="row gap-y text-center">

            <div class="col-12 col-md-6 col-xl-6 feature-1">
              <p class="feature-icon lead-8 text-info"><i class="icon-basket"></i></p>
              <h5>Sales Optimisation</h5>
              <p class="text-muted">By optimizing your commission, you will increase your monthly income but also increase you property value. Here are some way you can get benefit from using Trackzon.</p>
            </div>

            <div class="col-12 col-md-6 col-xl-6 feature-1">
              <p class="feature-icon lead-8 text-danger"><i class="icon-linegraph"></i></p>
              <h5>Revenue Analytics</h5>
              <p class="text-muted">Insight about your best links and better product to remote will leverage more revenue for every single clicks</p>
            </div>
            <div class="col-12 col-md-6 col-xl-6 feature-1">
              <p class="feature-icon lead-8 text-warning"><i class="icon-bargraph"></i></p>
              <h5>Rank Monitoring</h5>
              <p class="text-muted">knowing and keeping track of your best keywords and positioning, the value of your trafic will give you ways to target globaly higher revenue</p>
            </div>
            <div class="col-12 col-md-6 col-xl-6 feature-1">
              <p class="feature-icon lead-8 text-success"><i class="icon-focus"></i></p>
              <h5>Site Scanner</h5>
              <p class="text-muted">A bad link is not only bad for user experience and missed opportunity but it is also a low quality indicator for the serach engines. Keeping an eye on your links will help not losing those clicks and a better position in google</p>
            </div>

          </div>

        </div>
  </section>
     <section class="section bg-whites">
        <div class="container">


        <header class="section-header">
            <h2>Watch Your Website Value Grow</h2>


            <hr>
            <p class="lead">Trackzon Customers Increase Their Monthly Commission Revenue Up To 25%</p>
            <br>
          </header>


      <div class="row gap-y text-center">
        <div class="col-12 col-md-4">
          <h5> MadameParis</h5>
          <span class="number">+15%</span>
        </div>
        <div class="col-12 col-md-4">
          <h5> ChaiseGamer </h5>
          <span class="number">+17%</span>

        </div>
        <div class="col-12 col-md-4">
          <h5> LisseurMagique</h5>
          <span class="number">+25%</span>
        </div>
      </div>

  </div>
      </section>


  <section class="section bg-theme-gray overflow-hidden">
        <div class="container-fluid">
          <div class="row gap-y align-items-center">

            <div class="col-md-4 mx-auto text-center">
              <img class="border shadow-7" src="@/assets/images/preview/dashboard.png" alt="..." data-aos="fade-left">
            </div>


            <div class="col-md-4 mx-auto order-md-first">
              <h3>Sales Optimisation</h3>


        <p>Increase your Commission by optimizing your listing. Know which link and products convert the best and target products with better conversion / commission ratio.</p>

        <!-- <li>AI / ML to improve your ROI - Get Insight about link / traffic</li> -->



            </div>

          </div>
        </div>
      </section>


  <section class="section bg-white overflow-hidden">

        <div class="container-fluid">
          <div class="row gap-y align-items-center">

            <div class="col-md-4 mx-auto text-center">
              <img class="border shadow-7" src="@/assets/images/preview/dashboard.png" alt="..." data-aos="fade-right">
            </div>


            <div class="col-md-4 mx-auto">
              <h3>Revenue Analytics</h3>
              <p>Gain deeper insight about where your income comes from, which links get the more clicks, which site bring you more revenue and follow evaluation of your properties.</p>

            </div>

          </div>
        </div>
  </section>





      <section class="section bg-theme-gray overflow-hidden">
        <div class="container-fluid">
          <div class="row gap-y align-items-center">

            <div class="col-md-4 mx-auto text-center">
              <img class="border shadow-7" src="@/assets/images/preview/dashboard.png" alt="..." data-aos="fade-left">
            </div>


            <div class="col-md-4 mx-auto order-md-first">
              <h3>Rank Monitoring</h3>
              <p>Track your traffic <i>anonymously</i>, with our automatic clicks and visit analytics giving you better network anonymisation and protection against network detection algos. Get analysis of your SERP and site valuation based on your traffic.</p>
            </div>

          </div>
        </div>
      </section>

 <section class="section bg-white overflow-hidden">
        <div class="container-fluid">
          <div class="row gap-y align-items-center">

            <div class="col-md-4 mx-auto text-center">
              <img class="border shadow-7" src="@/assets/images/preview/dashboard.png" alt="..." data-aos="fade-right">
            </div>


            <div class="col-md-4 mx-auto">
              <h3>Site Checking</h3>
              <p>Monitor uptime of your sites and get notified if your site or some links are not reachable by your visitors. Keep control of performances and evaluate the impact on your revenue.</p>
            </div>

          </div>
        </div>
      </section>

  </div>
</template>

<script>
  export default {
    name: "features"
  }
</script>

<style scoped>
section {

    color: #131a22;
}
.shadow-7, .hover-shadow-7:hover {
    -webkit-box-shadow: 0 0 48px rgba(0,0,0,0.06);
    box-shadow: 0 0 48px rgba(0,0,0,0.06);
}

img {
  max-width: 100%;
}

.row.gap-y {
    margin-top: -15px;
    margin-bottom: -15px;
}

.row.gap-y>.col, .row.gap-y>[class*="col-"] {
    padding-top: 15px;
    padding-bottom: 15px;
}



.align-items-center {
    -webkit-box-align: center !important;
    align-items: center !important;
}

.section {
    position: relative;
    border-bottom: none;
    background-position: center center;
    -webkit-background-size: cover;
    background-size: cover;
    background-repeat: no-repeat;
    padding-top: 8rem;
    padding-bottom: 8rem;
}
.section .info .icon {
  background: transparent;
}

.section .icon i {
  color: #aaaaaa;
}

.section h3 {
  margin-top: 10px;
}

.logos {
  width: 100%;
  margin: 0 auto;
  text-align: center;
}

.logos ul {
  display: block;
  width: 100%;
  margin: 0px auto;
  padding-top: 48px;
}

.logos li {
  display: inline-block;
  margin: 0 17px;
}

span.number {
  font-size: 3rem;
  font-weight: 500;
  margin-top: 1rem;
  margin-bottom: 1.5rem; }

</style>