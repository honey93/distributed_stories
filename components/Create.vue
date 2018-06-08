<template>
    <div>
        

         <span v-if="$store.state.language.english"><h2> Information</h2>
        <div class="col-md-12">
        <li> Start a new story or poem here by creating it's title </li>
        <li> No two story on the Platform can have same title.  </li>  
        <li> Length of story title should be greater than 2 and less than 15 characters. </li>
        <li> After creating a story, go to <nuxt-link to="/">All Stories </nuxt-link> section and write line to it. </li>  
         </div>
         <h2> Create Story </h2></span> <span v-if="$store.state.language.chinese"><h2> 信息</h2>
        <div class="col-md-12">
        <li> 通过创建它的标题在这里开始一个新的故事或诗 </li>
        <li> 平台上没有两个故事可以拥有相同的标题。  </li>  
        <li> 故事标题的长度应大于2且小于15个字符。 </li>
        <li> 创建故事后，请前往 <nuxt-link to="/">所有故事 </nuxt-link> 部分并写入它的行。 </li>  
         </div>
         <h2> 创造故事 </h2></span>

        <div class="form-group">
            <label for="email"><span v-if="$store.state.language.english">Story Title </span> <span v-if="$store.state.language.chinese">故事标题 </span> </label>
            <!-- <input v-model="story_data.name" type="text" class="form-control" id="email" placeholder="Title" name="email"> -->
            <b-form-input id="inputLive" v-model.trim="story_data.name" type="text" :state="nameState" aria-describedby="inputLiveHelp inputLiveFeedback" placeholder="Story Title"></b-form-input>
            <b-form-invalid-feedback id="inputLiveFeedback">
                <!-- This will only be shown if the preceeding input has an invalid state -->
                 <span v-if="$store.state.language.english">More than 2 and less than 25 </span> <span v-if="$store.state.language.chinese">超过2个，少于15个</span>
            </b-form-invalid-feedback>
        </div>

         <div class="form-group">
            <label for="email"><span v-if="$store.state.language.english">Story Image (Optional): </span> <span v-if="$store.state.language.chinese">故事图片（可选）： </span> </label>
            <!-- <input v-model="story_data.name" type="text" class="form-control" id="email" placeholder="Title" name="email"> -->
            <b-form-input id="inputLive" v-model.trim="story_data.image_url" type="text"  placeholder="https://image-url.com"></b-form-input>
            <b-form-invalid-feedback id="inputLiveFeedback">
                <!-- This will only be shown if the preceeding input has an invalid state -->
               <span v-if="$store.state.language.english">More than 2 and less than 15 </span> <span v-if="$store.state.language.chinese">超过2个，少于15个</span>
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
                        this.$store.dispatch("add_story", this.story_data);
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
                    name: "",
                    image_url:""
                },
                submit_flag: true
            };
        },
        computed: {
            nameState() {
                return this.story_data.name.length > 2 && this.story_data.name.length < 25 ?
                    true :
                    false;
            }
        }
    };
</script>






