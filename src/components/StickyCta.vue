<template>
<section class="sticky-cta">
  <!-- <button class="button button--icon button--close" aria-label="dismiss" data-dismiss="">
    <svg width="24" height="24"><use xlink:href="#icon-close"></use></svg>
  </button> -->
  <div class="card">

    <form name="newsletter" method="POST" action="/.netlify/functions/newsletter" class="newsletter floating-labels" data-success="Thanks! You are now subscribed." data-error="Whoops there was an error. Please try again.">
  <p>Enjoying this article? Subscribe to our newsletter for more great JAMstack content.</p>
  <div class="form-group">

    <label>
      <span class="label">
        Email address
      </span>
</label>

      <b-form-input id="mail" :state="state" type="email" v-model.trim="email" required=""></b-form-input>

  </div>
  <p class="form-footer">
    <button type="submit" class="btn btn-warning btn-block">Subscribe</button>
  </p>
</form>

  </div>
</section>
</template>

<script>
  export default {
    name: "StickyCta"
  }
</script>

<style scoped >
.sticky-cta {
     display: none;
    position: fixed;
    right: 1.618em;
    bottom: 1.618em;
    z-index: 9;
    /* max-width: 14.354em; */

}

button--close {
    position: absolute;
    z-index: 1000;
    padding: 0;
    font-size: 1.25rem;
    line-height: 1;
    right: 0;
    top: 0;
    margin: 0;
    padding: .5rem;
}
.button--icon {
    font-size: 1em;
    padding: .618em;
    background: 0 0;
    box-shadow: none;
    color: rgba(14,30,37,.38);
}
.button {
    box-sizing: border-box;
    position: relative;
    z-index: 1;
    display: inline-block;
    vertical-align: middle;
    outline: 0;
    font-family: inherit;
    font-size: .9rem;
    font-weight: 500;
    line-height: 1.618em;
    padding: .382em 1em;
    text-align: center;
    text-decoration: none;
    border: 0;
    border-radius: 4px;
    box-shadow: 0 2px 4px 0 rgba(14,30,37,.12);
    cursor: pointer;
    background: #00b09f;
    color: #fff;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: all .15s ease;
}

.card {
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    border-radius: 8px;
    box-shadow: 0 2px 40px rgba(14,30,37,.16);
    text-shadow: none;
    padding: 1.618em;
    background: #fff;
    color: rgba(14,30,37,.8);
    -webkit-font-smoothing: subpixel-antialiased;
    -moz-osx-font-smoothing: auto;
    text-align: left;
    font-size: .8rem;
    max-width: 23.224em;
}


.card header>:first-child, .card>:first-child {
    margin-top: 0;
}
.card>* {
    margin-left: 0;
    margin-right: 0;
}

form {
    display: block;
    margin-top: 0em;
}

.sticky-cta .newsletter .form-footer {
    margin-top: 1em;
}
.sticky-cta .newsletter .form-field, .sticky-cta .newsletter .form-footer {
    display: block;
    margin: 0;
}

.card p {
    margin-top: .382em;
}
p {
    max-width: 37.577em;
}
blockquote, ol, p, ul {
    margin: 1em auto 0;
    padding: 0;
}


.label {
    font-weight: 500;
    color: rgba(14,30,37,.54);
}
</style>