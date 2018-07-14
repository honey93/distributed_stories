<template>
  <div class="container-fluid">
    <Create/>
  </div>
</template>

<script>
  import Logo from "~/components/Logo.vue";
  import Create from "~/components/Mystory.vue";
  
  export default {
    components: {
      Logo,
      Create
    },mounted(){
      //this.$store.dispatch("call");
    }
  };
</script>

<style>
  
</style>
