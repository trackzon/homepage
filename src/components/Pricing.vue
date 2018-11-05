<template>



      <section class="section bg-theme-gray ">
        <div class="container align-items-center ">
          <header class="section-header">
            <a name="pricing"></a>
            <small>Pricing</small>
            <h2>Give Your Sites The Value The Deserve</h2>
            <hr>
            <p class="lead">Choose Your Plan, <br/>And Get Instant Profit With Your Websites Optimisations and Health Check.</p>
          </header>


<toggle-switch
        :options="option4"
        v-model="planDuration"
        class="text-center"/>
      <br>

          <div class="row gap-y">



            <div class="col-lg-3" v-for="plan in plans" :key="plan['Title']">
              <div class="pricing-3">
                <h6 class="plan-name text-warning">{{plan['Title']}}</h6>
                <h2 class="price" >${{plan[planDuration]}}<small>.9/m</small></h2>
                <ul>
                  <li>{{plan['SiteNb']}} Websites</li>
                  <li>Manual Import</li>
                  <li>Email support</li>
                </ul>
                <br>
                <a class="btn btn-block btn-lg  btn-round w-200" :class="plan['selected'] ? 'btn-warning' : 'btn-outline-warning'" href="#">START FREE</a>
              </div>
            </div>




          </div>
          <header class="section-header">
            <p class="lead">We also have a Lite plan for up to 3 websites. start using it <a href="#">here</a>.</p>
            <p class="lead">More than 100 sites network ? <a href="#">Contact us</a> to setup a special account.</p>
          </header>
        </div>
      </section>
</template>

<script>
  export default {
    name: "pricing",
    data () {
      return {
        planDuration: 'Yearly',
        option4: {
        layout: {
          backgroundColor: 'white',
          selectedBackgroundColor: '#fb6340',
          selectedColor: 'white',
          color: '#fb6340',
          borderColor: '#fb6340',
          fontFamily: 'Lucida Grande',
          fontWeightSelected: 'normal'
        },
        size: {
          width: 280,
          height: 42,
          padding: 3.5,
          fontSize: 11
        },
        items: {
          preSelected: 'Yearly',
          labels: [{ name: 'Monthly' }, { name: 'Yearly' }]
        }
      },
      plans: [
        // {
        //   "Title": "Lite",
        //   "Yearly": 19,
        //   "Monthly": 24,
        //   "SiteNb": 3,
        // },
        { "Title": "Starter",
          "Yearly": 49,
          "Monthly": 59,
          "SiteNb": 10,

        },
        { "Title": "Pro",
          "Yearly": 99,
          "Monthly": 124,
          "SiteNb": 25,
          "selected": true
        },
        { "Title": "Business",
          "Yearly": 149,
          "Monthly": 187,
          "SiteNb": 50,
        },
        {
          "Title": "Agency",
          "Yearly": 199,
          "Monthly": 249,
          "SiteNb": 100,
        },

      ]
      }
    },
    computed: {
      maxPlan: function() {
        return this.plans['Agency']['SiteNb']
      }
    }
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
    font-size: 3rem;
    font-weight: 500;
    margin-top: 1rem;
    margin-bottom: 1.5rem; }
  .pricing-3 .plan-name {
    text-transform: uppercase;
    font-weight: 600;
    font-size: 1rem;
    letter-spacing: 1px;
    opacity: .9; }
  .pricing-3 ul {
    list-style: none;
    padding-left: 0; }

  .toggle-switch label {
    font-size: 0.5rem;
  }
  h2 small {
    font-size: 0.9rem;
    color: #3c3c42;
  }
</style>