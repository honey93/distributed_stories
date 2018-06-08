<template>
  <div class="container">

    <span v-if="$store.state.language.english"><h2> Contact Details </h2>
    
    <li> Email:  <a href="mailto:thakuria.honey@gmail.com"> thakuria.honey@gmail.com </a> </li>
    <li> Github: <a href="https://github.com/honey93" target="_blank"> Link </a></li>

    <p class="reach"> Feel free to reach me out in case of any difficulty or for your feedback to make it better </p> </span> <span v-if="$store.state.language.chinese"><h2> 联系方式 </h2>
    
    <li> 电子邮件：  <a href="mailto:thakuria.honey@gmail.com"> thakuria.honey@gmail.com </a> </li>
    <li> Github上： <a href="https://github.com/honey93" target="_blank"> 链接 </a></li>

    <p class="reach"> 如有任何困难，请随时与我联系，或者让您的反馈更好 </p> </span>
    
    
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import Create from "~/components/Create.vue";

export default {
  components: {
    Logo,
    Create
  },
  mounted() {
    //this.$store.dispatch("call");
  }
};
</script>

<style>
h2 {
  color: green;
  margin-top: 50px;
}

.reach {
  margin-top: 50px;
}

@media (max-width: 400px) {
  h2 {
    color: green;
    margin-top: 40px;
  }
}
</style>
