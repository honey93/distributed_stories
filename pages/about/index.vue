<template>
  <div class="container">
    <h2> About the Platform <img src="~/assets/nebulas.png" width="50px"> </h2>
    <li>This is a Dapp created on
      <b>
                                <a href="https://nebulas.io/" target="_blank">Nebulas Platform</a>
                            </b>
    </li>
  
    <li>To use this App, you need to have
      <b>
                                <a href="https://github.com/nebulasio/web-wallet" target="_blank"> Nebulas Wallet </a>
                            </b>,
      <b>Nebulas Token</b> and
      <b>
                                <a href="https://github.com/ChengOrangeJu/WebExtensionWallet" target="_blank">Nebulas Web Extension</a>
                            </b>
    </li>
    <li>You need to have
      <b>Mainnet</b> enabled in your Chrome Extension, cost involved to play is very less, lesser than you have ever spent.</li>
    
    <li>About me:
      <a target="_blank" href="https://www.linkedin.com/in/honey-thakuria-b30a3a85/">Linkedin</a>
    </li>

    <h2> About the Distributed Story App </h2>
    <li>
      Create a story using Create Story Section
    </li>
    <li>
      After a story gets created successfully, or to the already created stories, click to the write line button in order to add the line to that story.  
    </li>
    <li>
      No two stories can have save name on the Platform
    </li>
    <li>
      Each story can have max 5 lines of max 50 words each
    </li>
    <li>
      You can not like more than once a story
      </li>
      <li>
        My Story Section will contain, all the stories created by you or having at least one line by you.
        </li>
        <li>
          Favourite section will contain the story liked by you.
        </li>

        <h2> Upcoming features </h2>

        <li> It will be having Name, Address along with the lines </li>
        <li> Filter based on Rating </li>
        <li> Pagination </li>
        <li> Search based on Title </li>
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
      this.$store.dispatch("call");
    }
  };
</script>

<style>
  h2{
    color: green;
    margin-top: 50px;
  }

  @media(max-width:400px){

    h2{
    color: green;
    margin-top: 40px;
  }

  }
</style>
