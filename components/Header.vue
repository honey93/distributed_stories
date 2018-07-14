<template>
  <div class="top_top">
  
    <div class="container-fluid header_top">
      <div class="row">
  
        <div class="col-md-3 text-center">
          Language
          <b-button-group size="sm">
            <b-button @click="changeLanguage(1)" :pressed.sync="state_language.english" variant="outline-primary" key="outline-primary">
              English
            </b-button>
            <b-button @click="changeLanguage(0)" :pressed.sync="state_language.chinese" variant="outline-primary" key="outline-primary">
              中文
            </b-button>
          </b-button-group>
        </div>
  
        <div class="col-md-6 text-center">
          <h3 class="text-center"> <img src="~/assets/nebulas.png" width="50px"><span v-if="$store.state.language.english">Distributed Stories </span>
            <span v-if="$store.state.language.chinese">分布式故事</span></h3>
        </div>
  
        <div class="col-md-3 text-center acount">
          <b-dropdown id="ddown1" :text="account" class="m-md-2">
            <nuxt-link to="/"> <span v-if="$store.state.language.english">Address: </span> <span v-if="$store.state.language.chinese">地址: </span><span class="address">{{$store.state.account_data.address}}</span>
            </nuxt-link>
  
  
            <b-dropdown-divider>
  
            </b-dropdown-divider>
            <nuxt-link to="/mystory">
              <span v-if="$store.state.language.english">My Stories: </span> <span v-if="$store.state.language.chinese">我的故事： </span>
              <span>{{$store.state.account_data.count_stories}}</span> </nuxt-link>
            <b-dropdown-divider></b-dropdown-divider>
            <nuxt-link to="/favourite"> <span v-if="$store.state.language.english">Favourite: </span> <span v-if="$store.state.language.chinese">喜爱：</span> <span> {{$store.state.account_data.count_favourite}} </span>
            </nuxt-link>
          </b-dropdown>
  
        </div>
  
      </div>
  
  
  
  
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <nuxt-link to="/"><span v-if="$store.state.language.english">All Stories </span> <span v-if="$store.state.language.chinese">所有故事 </span> </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/favourite"><span v-if="$store.state.language.english">Favourite </span>
            <span v-if="$store.state.language.chinese">喜爱 </span></nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/mystory">
            <span v-if="$store.state.language.english">My Stories </span>
            <span v-if="$store.state.language.chinese">我的故事 </span>
          </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/create"><span v-if="$store.state.language.english">Create Story </span>
            <span v-if="$store.state.language.chinese">创造故事</span> </nuxt-link>
        </li>
  
        <li class="nav-item">
          <nuxt-link to="/about" class="about"><span v-if="$store.state.language.english">About App </span>
            <span v-if="$store.state.language.chinese">关于App </span></nuxt-link>
        </li>
  
        <li>
          <nuxt-link to="/contact" class="about"><span v-if="$store.state.language.english">Contact us  </span>
            <span v-if="$store.state.language.chinese">联系我们</span></nuxt-link>
        </li>
      </ul>
  
      <div class="alert alert-danger alert-dismissible webextension" v-if="!$store.state.extension">
  
        <strong>!!</strong> You don't have Web Extension installed, which is required to use this DApp. Please refer <span style="color:green"> <nuxt-link to="/about" class="about">About App </nuxt-link> </span>Section
      </div>
  
      <div> </div>
  
  
    </div>
  
  
    <b-modal ref="award" hide-footer title="NAS Rewards Program">
      <div class="d-block text-center">
        <h3>Highest Voted Story/Poem will get reward of 10 NAS.
  
          <br>
          <br> More Rewards coming soon !! Stay Tuned !!
        </h3>
      </div>
      <b-btn class="mt-3" variant="outline-danger" block @click="closeaward()">Start Writing</b-btn>
    </b-modal>
  
  
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
    background-color: #00bcd4;
    margin-bottom: 40px;
    position: fixed;
    z-index: 5;
    padding: 20px 0;
  }
  
  .top_top {
    padding-bottom: 180px;
  }
  
  .about {
    color: green !important;
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
    text-decoration: none !important;
    padding: 20px;
  }
  
  #ddown1 span {
    padding-left: 15px;
    color: black;
  }
  
  @media (max-width: 800px) {
    .webextension {
      display: none;
    }
    .top_top {
      padding-bottom: 260px;
    }
  }
</style>

<script>
  // import * as NebPay from 'nebpay.js';
  export default {
    mounted() {
      this.$refs.award.show();
      if (typeof webExtensionWallet === "undefined") {
        this.$store.state.extension = false;
      } else {
        // alert("detected");
        this.$store.dispatch("account_call");
  
        this.$store.state.extension = true;
      }
    },
    data() {
      return {
        state_language: {
          english: true,
          chinese: false
        },
        account: "Account Info"
      };
    },
    methods: {
      changeLanguage(state) {
        if (state) {
          this.state_language.english = true;
          this.state_language.chinese = false;
          this.$store.state.language.english = true;
          this.$store.state.language.chinese = false;
          this.account = "Account Info";
        } else {
          this.state_language.chinese = true;
          this.state_language.english = false;
          this.$store.state.language.english = false;
          this.$store.state.language.chinese = true;
          this.account = "帐户信息";
        }
      },
      closeaward() {
        this.$refs.award.hide();
      }
    }
  };
</script>
