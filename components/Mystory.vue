<template>
  <div>
    <div class="col-md-12">
      <p> All Stories made or having line added by you will be here </p>
      </div>
    <div class="loader" v-if="!$store.state.mystory_data.length"> <img src="~/assets/loading.gif"> </div>
    <div class="row" v-if="$store.state.mystory_data.length">
      <div class="col-md-4" v-for="(data,index) in $store.state.mystory_data" :key="index">
        <b-card :header="data.title">
          <div class="buttons_comment">
            <b-button v-if="data.lines.length <= 5" @click="showModal(data.title,data.hash)" size="sm" variant="warning">
              Write Line
            </b-button>
  
            <b-button class="like_button" @click="vote(data.hash)" size="sm" variant="success"> <i class="fas fa-heart"></i> {{data.votes.length}}
            </b-button>
            <!-- <hr v-if="data.lines.length <= 5"> -->
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
      this.$store.dispatch("mystory_call");
    },
    methods: {
      get() {
        alert(this.count);
        // var pq = this;
        // //setTimeout(function(){
        //   pq.$store.dispatch("get_call",pq.count);
        // //},5000);
      },
      vote(hash) {
        this.$store.dispatch("vote", hash);
      },
      showModal(title, hash) {
        // alert(hash);
        this.line_data.title = title;
        this.line_data.hash = hash;
        this.line_data.name = "";
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
          hash: ""
        },
        count: 0
      };
    }
  };
</script>
