<template>
  <div>
    <div class="col-md-12">
      <p> 
        
        <span v-if="$store.state.language.english">All Stories made or having line added by you will be here </span> <span v-if="$store.state.language.chinese">所有添加或添加了行的故事都会在这里 </span>
         </p>
    </div>
  
    <div class="col-md-12" v-if="$store.state.nodata_flag_my">
      <h2> No Story created or added line by you. Go to
        <nuxt-link to="/create"> Create Story </nuxt-link> section to create a new story or
        <nuxt-link to="/"> All Stories </nuxt-link> to add some lines to the existing stories.</h2>
    </div>
    <div class="loader" v-if="!$store.state.mystory_data.length && !$store.state.nodata_flag_my"> <img src="~/assets/loading.gif"> </div>
    <div class="row" v-if="$store.state.mystory_data.length">
      <div class="col-md-4" v-for="(data,index) in $store.state.mystory_data" :key="index">
        <b-card :header="data.title">
          <div class="buttons_comment">
            <b-button v-if="data.lines.length <= 5" @click="showModal(data.title,data.hash,data.address)" size="sm" variant="warning">
              <span v-if="$store.state.language.english">Write Line </span> <span v-if="$store.state.language.chinese">写一行 </span>
            </b-button>

           <social-sharing v-if="data.lines && data.lines.length" url="http://distributedstoriesupdated.s3-website-eu-west-1.amazonaws.com" :title="data.title + ': ' +  line(data.lines)" description="Intuitive, Fast and Composable MVVM for building interactive interfaces." 
                hashtags="DApp" twitter-user="DistributedSt13 @Nebulasio @HoneyThakuria" inline-template>
                <network network="twitter">
  
                  <b-button size="sm" variant="primary" class="text-center tweet">
                    <i class="fab fa-twitter"></i>  <span v-if="$store.state.language.english">Tweet </span> <span v-if="$store.state.language.chinese">推特</span>
                  </b-button>
                </network>
  
  
              </social-sharing>
  
            <b-button class="like_button" @click="vote(data.hash,data.address)" size="sm" variant="success"> <i class="fas fa-heart"></i> {{data.votes.length}}
            </b-button>
            <hr v-if="data.lines.length <= 5">
          </div>
  
          <div v-if="data.image_url" class="pcursive">
            <img :src="data.image_url" width="100%">
          </div>
  
          <div class="cursive">
            <p :class="{para1:index == 0,para2:index ==1,para3:index ==2,para4:index ==3,para5:index ==4,para6:index ==5}" v-for="(line,index) in data.lines" :key="index">{{line.line}} </p>
            <footer v-if="data.lines.length">
  
              <hr>
              <p class="contributors"> Contributors - </p>
              <span :class="{para1:index == 0,para2:index ==1,para3:index ==2,para4:index ==3,para5:index ==4,para6:index ==5}" v-for="(line,index) in data.lines" :key="index" class="from"> {{index+1}}) {{line.from}},   </span>
  
  
            </footer>
          </div>
  
  
  
  
  
  
        </b-card>
      </div>
  
    </div>
  
  
    <b-modal ref="myModalRef" hide-footer :title="line_data.title">
      <div class="d-block text-center">
        <div role="group">
          <label for="inputLive">New Line:</label>
          <b-form-input id="inputLive" v-model.trim="line_data.name" type="text" :state="nameState" aria-describedby="inputLiveHelp inputLiveFeedback" placeholder="Add New Line"></b-form-input>
          <b-form-invalid-feedback id="inputLiveFeedback">
            <!-- This will only be shown if the preceeding input has an invalid state -->
            More than 5 and less than 50 letters
          </b-form-invalid-feedback>
        </div>
      </div>
      <b-btn class="mt-3" variant="outline-danger" block @click="hideModal">Submit</b-btn>
    </b-modal>
  
  
  
  </div>
</template>


<script>
  import * as NebPay from "nebpay.js";
  
  export default {
    updated() {
      //alert(this.count);
      // if(this.count == 1){
      //   // alert("called");
      //   // this.$store.dispatch("call");
      //   // this.count = 0;
      // }
    },
    mounted() {
      this.$store.state.nodata_flag_my = false;
      this.$store.dispatch("mystory_call");
    },
    methods: {
      line(lines) {
  
        var line_array = lines.map((data) => {
          return data.line;
        });
  
        return line_array.toString();
      },
      get() {
        alert(this.count);
        // var pq = this;
        // //setTimeout(function(){
        //   pq.$store.dispatch("get_call",pq.count);
        // //},5000);
      },
      vote(hash, address) {
        this.$store.dispatch("vote", {
          hash: hash,
          address: address
        });
      },
      showModal(title, hash, address) {
        // alert(hash);
        this.line_data.title = title;
        this.line_data.hash = hash;
        this.line_data.name = "";
        this.line_data.address = address;
        this.$refs.myModalRef.show();
      },
      hideModal() {
        if (this.nameState) {
          //alert("resolved");
          //alert(JSON.stringify(this.line_data));
          var temp_data = this.line_data;
          var vm = this;
          this.$store.dispatch("add_line", temp_data);
          this.$refs.myModalRef.hide();
        }
      }
    },
    computed: {
      nameState() {
        return this.line_data.name.length > 5 && this.line_data.name.length < 50 ?
          true :
          false;
      }
    },
    data() {
      return {
        line_data: {
          name: "",
          title: "",
          hash: "",
          address: ""
        },
        count: 0
      };
    }
  };
</script>

<style>
  h2 {
    color: green;
  }
</style>
