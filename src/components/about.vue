<template>
  <div class="about" :class="aboutcls">
    <div class="about-top-images">
        <img src="../img/about@2x_01.jpg" alt="">
        <img class="about-iconlogo-top" src="../img/about@2x_01.png">
    </div>
    <div class="about-content-bg">
      <div class="about-content-text">
          <img src="../img/about@2x_02.png" alt="">
      </div>
    </div>

    <div>
      <div v-for="(item,index) in aboutimgarr" @click="toTab(index)">
        <img :src="item.urlarr">
      </div>
    </div>

    <div>
      <div class="xyjs-footer-totop">
        <div @click="toTop()">TOP</div>
      </div>
      <div @click="tocs()"><img src="../img/public@2x_01.jpg" alt=""></div>
      <div><img src="../img/public@2x_02.jpg" alt=""></div>
    </div>



  </div>
</template>
<script>
	export default {
  name: 'about',
  data () {
  	return {
      aboutcls:'',
      aboutimgarr:[
        {urlarr:require('../img/about@2x_03.jpg'),mid:61,tourl:'aboutdetails'},
        {urlarr:require('../img/about@2x_04.jpg')},
        {urlarr:require('../img/about@2x_05.jpg'),mid:63,tourl:'aboutdetails'},
        {urlarr:require('../img/about@2x_06.jpg')},
        {urlarr:require('../img/about@2x_07.jpg'),mid:65,tourl:'aboutdetails'},
        {urlarr:require('../img/about@2x_08.jpg')}
      ],
      indexs:'',
      timer:''
}},
methods: {
    toTop(){
      $("html,body").animate({
        scrollTop: "0px"  
       },1000,function(){
       });
    },
    tocs(){
        window.scrollTo(0, 0);
      this.$router.push({path: "/cs"})
    },
  tourl:function(){
      window.scrollTo(0, 0);
      clearTimeout(this.timer);
      this.$router.push({
      name: this.aboutimgarr[this.indexs].tourl,
      params:{id:this.aboutimgarr[this.indexs].mid}
      });
    },
  toTab(index) {
    this.indexs=index;
    if(this.aboutimgarr[this.indexs].tourl==undefined||null||""){
        this.timer="";
    }else{
      this.aboutcls="aboutcls"
      this.timer=setInterval(this.tourl, 2000);
    }
  }

},
mounted () {
  this.timer="";
  window.scrollTo(0, 0);
}


}
</script>