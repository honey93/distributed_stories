<template>
  <div class="top_top">
  
    <div class="container-fluid header_top">
      <div class="row">
  
        <div class="col-md-2 text-center">
          Language
        </div>
  
        <div class="col-md-8 text-center">
          <h3 class="text-center"> <img src="~/assets/nebulas.png" width="50px"> Distributed Stories </h3>
        </div>
  
        <div class="col-md-2 text-center acount">
          <b-dropdown id="ddown1" text="Account Details" class="m-md-2">
            <nuxt-link to="/">   Address:<span class="address">{{$store.state.account_data.address}}</span>  
            </nuxt-link>
            

            <b-dropdown-divider>

            </b-dropdown-divider>
            <nuxt-link to="/mystory"> My Stories:<span>{{$store.state.account_data.count_stories}}</span> </nuxt-link>
            <b-dropdown-divider></b-dropdown-divider>
            <nuxt-link to="/favourite"> Favourite: <span> {{$store.state.account_data.count_favourite}} </span>
            </nuxt-link>
          </b-dropdown>
  
        </div>
  
      </div>
  
  
  
  
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
  
  #ddown1 .dropdown-menu.show {
    width: 400px;
    max-width: 100vw;
    border: 1px solid grey;
  }
  
  #ddown1 .address {
    font-size: 10px;
  }
  
  #ddown1 a {
    text-decoration: none!important;
    padding: 20px;
  }
  
  #ddown1 span {
    padding-left: 15px;
    color: black;
  }
</style>

<script>
  // import * as NebPay from 'nebpay.js';
  export default {
    mounted() {
  
  
      if (typeof(webExtensionWallet) === "undefined") {
  
        this.$store.state.extension = false;
  
  
  
  
      } else {
  
  
        // alert("detected");
        this.$store.dispatch("account_call");
  
  
  
        this.$store.state.extension = true;
      }
  
  
  
    }
  }
</script>
