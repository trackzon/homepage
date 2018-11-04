<template>



      <section class="section bg-theme-gray">
        <div class="container">
          <header class="section-header">
            <small>Pricing</small>
            <h2>Choose License Type</h2>
            <hr>
            <p class="lead">Give Your Site The Tracking It Deserves, And Get Instant Profit Aith Your Webistes Health and Optimations.</p>
          </header>


          <div class="row gap-y">

            <div class="col-lg-3">
              <div class="pricing-3">
                <h6 class="plan-name">Free</h6>
                <h2 class="price">Free</h2>
                <ul>
                  <li>Single Website</li>
                  <li>Manual Import</li>
                  <li>No Support</li>
                </ul>
                <br>
                <a class="btn btn-block btn-lg btn-outline-warning btn-round w-200" href="#">Get started</a>
              </div>
            </div>

            <div class="col-lg-3">
              <div class="pricing-3">
                <h6 class="plan-name">Lite</h6>
                <h2 class="price">$19</h2>
                <ul>
                  <li>5 Websites</li>
                  <li>Manual Import</li>
                  <li>Email support</li>
                </ul>
                <br>
                <a class="btn btn-block btn-lg btn-outline-warning btn-round w-200" href="#">Get started</a>
              </div>
            </div>


            <div class="col-lg-3">
              <div class="pricing-3">
                <h6 class="plan-name text-primary">Pro</h6>
                <h2 class="price">$59</h2>
                <ul>
                  <li>30 Websites</li>
                  <li>Auto Import</li>
                  <li>Email support</li>
                </ul>
                <br>
                <a class="btn btn-block btn-lg btn-warning btn-round w-200" href="#">Get started</a>
              </div>
            </div>


            <div class="col-lg-3">
              <div class="pricing-3">
                <h6 class="plan-name">Agency</h6>
                <h2 class="price">$149</h2>
                <ul>
                  <li>100 Websites</li>
                  <li>Auto Import</li>
                  <li>Email support</li>
                </ul>
                <br>
                <a class="btn btn-lg btn-block btn-outline-warning btn-round w-200" href="#">Get started</a>
              </div>
            </div>

          </div>
          <header class="section-header">
            <p class="lead">We also have a FREE plan for 1 website. if you want to start using </p>
          </header>
        </div>
      </section>
</template>

<script>
  export default {
    name: "pricing"
  }
</script>

<style scoped>
  section {
    color: #131a22;
  }
  .card {
    border-top: 2px solid #ffa033;
    background-color: #ffffff;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.075);

    padding: 10px;

  }
  .pricing-3 {
  text-align: center;
      border-top: 2px solid #ffa033;
    background-color: #ffffff;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.075);
  padding: 2rem;
  border-radius: 10px; }
  .pricing-3.popular {
    background-color: #fafbfb;
    position: relative; }
  .pricing-3 .popular-tag {
    position: absolute;
    top: 0;
    left: 40px;
    background-color: #3cd458;
    color: #fff;
    padding: 1px 0.75rem;
    padding-right: 1.5rem;
    text-transform: uppercase;
    font-size: 0.75rem;
    letter-spacing: 1.5px;
    font-weight: 400;
    border-top-right-radius: 5rem;
    border-bottom-right-radius: 5rem;
    -webkit-transform: rotate(90deg);
            transform: rotate(90deg);
    -webkit-transform-origin: top left;
            transform-origin: top left; }
  .pricing-3 .price {
    font-size: 3.75rem;
    font-weight: 500;
    margin-top: 1rem;
    margin-bottom: 1.5rem; }
  .pricing-3 .plan-name {
    text-transform: uppercase;
    font-weight: 600;
    font-size: 0.8325rem;
    letter-spacing: 1px;
    opacity: .9; }
  .pricing-3 ul {
    list-style: none;
    padding-left: 0; }
</style>