<template>
  <div class="home">

    <cta/>
    <customer/>
    <numbers/>
    <features/>
    <pricing/>
  </div>
</template>

<script>
// @ is an alias to /src
import cta from '@/components/Cta.vue'
import qa from '@/components/QAForm.vue'
import customer from '@/components/Customer.vue'
import features from '@/components/Features.vue'
import pricing from '@/components/Pricing.vue'
import numbers from '@/components/Numbers.vue'

export default {
  name: 'homepage',
  components: {
    qa, cta, customer, features, pricing, numbers
  }
}
</script>