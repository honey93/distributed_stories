<template>
  <div class="container">
  
    <span v-if="$store.state.language.english"><h2> About the Platform <img src="~/assets/nebulas.png" width="50px"> </h2>
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
              
                      <li> Functionality to pay the  NAS token to the stories(title and line makers)  </li>
                       <li> Weekly best story awards.  </li>
              
                      </span> <span v-if="$store.state.language.chinese">
                        
                        <h2> 关于平台 <img src="~/assets/nebulas.png" width="50px"> </h2>
                  <li>这是一个Dapp创建的
                    <b>
                                              <a href="https://nebulas.io/" target="_blank">星云平台</a>
                                          </b>
                  </li>
                
                  <li>要使用这个应用程序，你需要有
                    <b>
                                              <a href="https://github.com/nebulasio/web-wallet" target="_blank"> 星云钱包 </a>
                                          </b>,
                    <b>星云令牌</b> 和
                    <b>
                                              <a href="https://github.com/ChengOrangeJu/WebExtensionWallet" target="_blank">星云Web扩展</a>
                                          </b>
                  </li>
                  <li>你需要拥有
                    <b>你需要拥有</b> 在您的Chrome扩展程序中启用后，涉及的游戏费用会非常少，比您花费的时间少。</li>
                  
                  <li>关于我：
                    <a target="_blank" href="https://www.linkedin.com/in/honey-thakuria-b30a3a85/">LinkedIn</a>
                  </li>
              
                  <h2> 关于分布式故事应用程序 </h2>
                  <li>
                   使用创建故事部分创建故事
                  </li>
                  <li>
                    在成功创建故事或创建故事后，单击写入行按钮以将该行添加到该故事。  
                  </li>
                  <li>
                    没有两个故事可以在平台上保存名称
                  </li>
                  <li>
                    每个故事最多可以有5行，每行最多50个单词
                  </li>
                  <li>
                    你不能多次喜欢一个故事
                    </li>
                    <li>
                     我的故事部分将包含您创建的所有故事或您至少有一行的故事。
                      </li>
                      <li>
                        最喜欢的部分将包含你喜欢的故事。
                      </li>
              
                      <h2>即将推出的功能 </h2>
              
                      <li> 将NAS令牌支付给故事的功能（标题和制作者） </li>
                      <li> 每周最佳故事奖。 </li>
              
                      
                        
                         </span>
  
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
  h2 {
    color: green;
    margin-top: 50px;
  }
  
  @media (max-width: 400px) {
    h2 {
      color: green;
      margin-top: 40px;
    }
  }
</style>
