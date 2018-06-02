<template>
  <div class="container">
    <h2> Contact Details </h2>
    
    <li> Email:  <a href="mailto:thakuria.honey@gmail.com"> thakuria.honey@gmail.com </a> </li>
    <li> Github: <a href="https://github.com/honey93" target="_blank"> Link </a></li>

    <p class="reach"> Feel free to reach me out in case of any difficulty or for your feedback to make it better </p>
    
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
  h2{
    color: green;
    margin-top: 50px;
  }

  .reach{
      margin-top: 50px;
  }

  @media(max-width:400px){

    h2{
    color: green;
    margin-top: 40px;
  }

  }
</style>
