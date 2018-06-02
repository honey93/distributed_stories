<template>
  <div class="top_top">
  
    <div class="container-fluid header_top">
  
      <h3 class="text-center"> <img src="~/assets/nebulas.png" width="50px"> Distributed Stories </h3>
  
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <nuxt-link to="/">All Stories </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/favourite">Favourite </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/mystory">My Story </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/create">Create Story </nuxt-link>
        </li>
  
        <li class="nav-item">
          <nuxt-link to="/about" class="about">About App </nuxt-link>
        </li>

        <li>
            <nuxt-link to="/contact" class="about">Contact us </nuxt-link>
          </li>
      </ul>
  
      <div class="alert alert-danger alert-dismissible" v-if="!$store.state.extension">
        <button type="button" class="close" data-dismiss="alert">&times;</button>
        <strong>!</strong> You don't have Web Extension installed, which is required to use this DApp. Please refer <span style="color:green"> <nuxt-link to="/about" class="about">About App </nuxt-link> </span>Section
      </div>
    </div>
  
  
  </div>
</template>


<style>
  ul a,
  ul a:hover {
    margin-right: 25px;
    color: white;
  }
  
  ul {
    padding-bottom: 15px;
    padding-top: 10px;
  }
  
  .header_top {
    background-color: #00BCD4;
    margin-bottom: 40px;
    position: fixed;
    z-index: 5;
  }
  
  .top_top {
    padding-bottom: 140px;
  }
  
  .about {
    color: green!important;
  }
</style>

<script>
  // import * as NebPay from 'nebpay.js';
  export default {
    mounted() {
      

       if (typeof(webExtensionWallet) === "undefined") {
  
        this.$store.state.extension = false;

       
       
  
      } else {
        
        this.$store.state.extension = true;
      }
  
  
  
    }
  }
</script>
