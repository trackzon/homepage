<template>
  <div class="home">

    <cta/>
    <customer/>
  </div>
</template>

<script>
// @ is an alias to /src
import cta from '@/components/Cta.vue'
import customer from '@/components/Customer.vue'

export default {
  name: 'homepage',
  components: {
    cta, customer
  }
}
</script>