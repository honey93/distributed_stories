<template>
  <div class="container">
    <Create/>
  </div>
</template>

<script>
  import Logo from "~/components/Logo.vue";
  import Create from "~/components/Create.vue";
  
  export default {
    components: {
      Logo,
      Create
    },mounted(){
      this.$store.dispatch("call");
    }
  };
</script>

<style>
  
</style>
