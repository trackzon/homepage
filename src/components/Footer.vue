<template>
  <footer class="footer py-7">
    <div class="container">
      <div class="row gap-y">
        <div class="col-12 col-md-6 order-md-last">
          <h6 class="mb-4">
            <strong>Get Onboard</strong>
          </h6>
          <p>Trackzon is currently in private beta and while we do onboard new user on daily basis, we need to ask for waiting list.</p>
          <div class="text-right">
            <a class="btn btn-primary btn-warning mr-2" href="#" v-b-modal.modal-center>Get Started</a>
          </div>
          <!-- <a class="btn btn-secondary" href="#">Contact</a> -->
        </div>

        <!-- <div class="col-6 col-md-4 col-xl-2">
              <h6 class="mb-4"><strong>Product</strong></h6>
              <div class="nav flex-column">
                <a class="nav-link" href="#">Features</a>
                <a class="nav-link" href="#">Pricing</a>
                <a class="nav-link" href="#">Security</a>
                <a class="nav-link" href="#">Help</a>
                <a class="nav-link" href="#">Success Story</a>
              </div>
            </div>

            <div class="col-6 col-md-4 col-xl-2">
              <h6 class="mb-4"><strong>Company</strong></h6>
              <div class="nav flex-column">
                <a class="nav-link" href="#">About</a>
                <a class="nav-link" href="#">Blog</a>
                <a class="nav-link" href="#">Press</a>
                <a class="nav-link" href="#">Policy</a>
                <a class="nav-link" href="#">Contact</a>
              </div>
        </div>-->

        <div class="col-12 col-md-6 order-md-first">
          <h6 class="mb-4">
            <strong>We Are Awesome</strong>
          </h6>
          <p>We’re a team of experienced affliates and developers. We can combine powerful tools with beautiful and modern designs with clean, functional and high-performance platform helping your to increase your websites value.</p>
          <small class="opacity-70">© 2020 Trackzon.io. All rights reserved.</small>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "hfooter"
};
</script>

<style scoped>
.footer {
  padding: 1.25rem 0;
  border-top: 1px solid #f5f6f7;

  -webkit-box-shadow: 0 0 15px rgba(0, 0, 0, 0.05);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.05);
  color: #3c3c42;
  background-color: #fefefe;
}

h1 strong,
h1 b,
h2 strong,
h2 b,
h3 strong,
h3 b,
h4 strong,
h4 b,
h5 strong,
h5 b,
h6 strong,
h6 b,
.h1 strong,
.h1 b,
.h2 strong,
.h2 b,
.h3 strong,
.h3 b,
.h4 strong,
.h4 b,
.h5 strong,
.h5 b,
.h6 strong,
.h6 b {
  font-weight: 500;
}
</style>