<template>
  <div>
    <div>
      <Header/>
    </div>
    <nuxt/>
  </div>
</template>

<script>
  import Header from '@/components/Header'
  
  export default {
    components: {
      Header
    }
  
  }
</script>

<style>
 

html {
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }
  
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
  }


 
  /* vietnamese */
@font-face {
  font-family: 'Dancing Script';
  font-style: normal;
  font-weight: 400;
  src: local('Dancing Script Regular'), local('DancingScript-Regular'), url(https://fonts.gstatic.com/s/dancingscript/v9/If2RXTr6YS-zF4S-kcSWSVi_szLviuEViw.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Dancing Script';
  font-style: normal;
  font-weight: 400;
  src: local('Dancing Script Regular'), local('DancingScript-Regular'), url(https://fonts.gstatic.com/s/dancingscript/v9/If2RXTr6YS-zF4S-kcSWSVi_szLuiuEViw.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Dancing Script';
  font-style: normal;
  font-weight: 400;
  src: local('Dancing Script Regular'), local('DancingScript-Regular'), url(https://fonts.gstatic.com/s/dancingscript/v9/If2RXTr6YS-zF4S-kcSWSVi_szLgiuE.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* vietnamese */
@font-face {
  font-family: 'Dancing Script';
  font-style: normal;
  font-weight: 700;
  src: local('Dancing Script Bold'), local('DancingScript-Bold'), url(https://fonts.gstatic.com/s/dancingscript/v9/If2SXTr6YS-zF4S-kcSWSVi_szpbr_QlqiMurg.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Dancing Script';
  font-style: normal;
  font-weight: 700;
  src: local('Dancing Script Bold'), local('DancingScript-Bold'), url(https://fonts.gstatic.com/s/dancingscript/v9/If2SXTr6YS-zF4S-kcSWSVi_szpbr_QkqiMurg.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Dancing Script';
  font-style: normal;
  font-weight: 700;
  src: local('Dancing Script Bold'), local('DancingScript-Bold'), url(https://fonts.gstatic.com/s/dancingscript/v9/If2SXTr6YS-zF4S-kcSWSVi_szpbr_QqqiM.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}



.loader {
  text-align: center;
  margin-top: 50px;
}

.cursive {
  font-family: "Dancing Script", cursive;
  font-size: 22px;
  font-weight: 600;
}

.cursive > p {
  margin-bottom: 2px;
}

.from {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 10px;

  word-break: break-all;
}

.contributors {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 18px;
  font-weight: 600;
}

.buttons_comment {
  position: relative;
}

.like_button {
  position: absolute;
  top: 0px;
  right: 0px;
  background-color: transparent;
  color: black;
}

.fa-heart {
  color: red;
}
.card-header{
  background-color: #CDDC39;
}

 
.para0{
  color:#607D8B;
}
.para1{
  color:#C2185B;
}
.para2{
  color:#5D4037;
}
.para3{
  color:#E64A19
}
.para4{
  color:#607D8B
}
.para5{
  color:#00796B;
}
.para6{
  color:#607D8B;
}

</style>
