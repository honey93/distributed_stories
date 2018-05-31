<template>
  <div>
    <div class="row" v-if="$store.state.favourite_data.length">
      <div class="col-md-3" v-for="(data,index) in $store.state.favourite_data" :key="index">
        <b-card :header="data.title">
          <blockquote class="blockquote mb-0">
            <span v-for="(line,index) in data.lines" :key="index">{{line.line}} </span>
            <footer class="blockquote-footer">
              <b-button  @click="showModal(data.title,data.hash)" size="sm" variant="warning">
                Write Line
                </b-button>

                <b-button  @click="vote(data.hash)" size="sm" variant="success">
                Upvote {{data.votes.length}}
                </b-button>
            </footer>
          </blockquote>
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
export default {
  mounted() {
    this.$store.dispatch("favourite_call");
  },
  methods: {
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
        //alert(JSON.stringify(this.line_data));
        var temp_data = this.line_data;

        this.$store.dispatch("add_line", temp_data);

        this.$refs.myModalRef.hide();
      }
    }
  },
  computed: {
    nameState() {
      return this.line_data.name.length > 2 && this.line_data.name.length < 50
        ? true
        : false;
    }
  },
  data() {
    return {
      line_data: {
        name: "",
        title: "",
        hash: ""
      }
    };
  }
};
</script>
