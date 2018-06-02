<template>
    <div>
        <h2> Information</h2>
        <div class="col-md-12">
        <li> Start a new story or poem here by creating it's title </li>
        <li> No two story on the Platform can have same title.  </li>  
        <li> Length of story title should be greater than 2 and less than 15 characters. </li>
        <li> After creating a story, go to <nuxt-link to="/">All Stories </nuxt-link> section and write line to it. </li>  
         </div>
         <h2> Create Story </h2>
        <div class="form-group">
            <label for="email">Story Title: </label>
            <!-- <input v-model="story_data.name" type="text" class="form-control" id="email" placeholder="Title" name="email"> -->
            <b-form-input id="inputLive" v-model.trim="story_data.name" type="text" :state="nameState" aria-describedby="inputLiveHelp inputLiveFeedback" placeholder="Story Title"></b-form-input>
            <b-form-invalid-feedback id="inputLiveFeedback">
                <!-- This will only be shown if the preceeding input has an invalid state -->
                More than 2 and less than 15 letters
            </b-form-invalid-feedback>
        </div>
        <!-- <div class="form-group">
                                            <label for="pwd">User Name:</label>
                                            <input type="text" class="form-control" id="pwd" placeholder="Name" name="pswd">
                                        </div> -->
        <!-- <div class="form-group form-check">
                                            <label class="form-check-label">
                                                <input class="form-check-input" type="checkbox" name="remember"> Remember me
                                                                      </label>
                                        </div> -->
        <button v-on:click="submit_story()" type="submit" class="btn btn-primary">Submit</button>
    
    
    </div>
</template>

<script>
    export default {
        mounted() {
            this.$store.dispatch("call");
        },
        methods: {
            submit_story() {
                if (this.story_data.name.trim() != "") {
    
                    var cm = this;
                        cm.submit_flag = true;
                    this.$store.state.all_data.map(function(data) {
                        if (data.title.toLowerCase() == cm.story_data.name.trim().toLowerCase()) {
                            cm.submit_flag = false;
                            
                        }
                    });
    
                    if (cm.submit_flag) {
                        this.$store.dispatch("add_story", this.story_data.name);
                    }else{
                        alert("This Story title already exist");
                    }
    
                    this.story_data.name = "";
                } else {
                    alert("Story Name can't be blank");
                }
            }
        },
        data() {
            return {
                story_data: {
                    name: ""
                },
                submit_flag: true
            };
        },
        computed: {
            nameState() {
                return this.story_data.name.length > 2 && this.story_data.name.length < 15 ?
                    true :
                    false;
            }
        }
    };
</script>






