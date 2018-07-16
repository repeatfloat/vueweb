<template>
	<div class="wlmy">

		<div class="wlmy-top-position">
			<img src="../img/wlmy@2x_01.jpg" alt="">
			<div class="wlmy-position-icon" :class="wlmycls"><img src="../img/wlmy@2x_01.png" alt=""></div>
		</div>
		<div>
			<div v-for="(item,index) in wlmyimgarr" @click="tourl(index)">
				<img :src="item.urlarr" alt="">
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
  name: 'aboutwlmy',

data () {
  return {
  	wlmycls:'',
  	 wlmyimgarr:[
  		{urlarr:require('../img/wlmy@2x_02.jpg'),mid:23,tourl:'aboutdetails'},
  		{urlarr:require('../img/wlmy@2x_03.jpg'),mid:24,tourl:'aboutwlmy'},
  		{urlarr:require('../img/wlmy@2x_01_02.jpg'),mid:25,tourl:'aboutdetails'},
  		{urlarr:require('../img/wlmy@2x_01_03.jpg'),mid:26,tourl:'aboutdetails'},
  		{urlarr:require('../img/wlmy@2x_01_04.jpg'),mid:27,tourl:'aboutdetails'},
  		{urlarr:require('../img/wlmy@2x_01_06.jpg'),mid:28,tourl:'aboutdetails'},
  		{urlarr:require('../img/wlmy@2x_01_08.jpg'),mid:29,tourl:'aboutdetails'},
  		{urlarr:require('../img/wlmy@2x_01_09.jpg'),mid:30,tourl:'aboutdetails'},
  		{urlarr:require('../img/wlmy@2x_01_10.jpg'),mid:31,tourl:'aboutdetails'},
  		{urlarr:require('../img/wlmy@2x_01_12.jpg'),mid:32,tourl:'aboutdetails'},
  		{urlarr:require('../img/wlmy@2x_01_13.jpg'),mid:33,tourl:'aboutdetails'},
  		{urlarr:require('../img/wlmy@2x_01_14.jpg'),mid:34,tourl:'aboutdetails'},
  		{urlarr:require('../img/wlmy@2x_01_15.jpg'),mid:35,tourl:'aboutdetails'},
  		{urlarr:require('../img/wlmy@2x_01_16.jpg'),mid:36,tourl:'aboutdetails'},
  		{urlarr:require('../img/wlmy@2x_01_17.jpg'),mid:37,tourl:'aboutdetails'},
  		{urlarr:require('../img/wlmy@2x_01_18.jpg'),mid:38,tourl:'aboutdetails'}
  	]
  }
},

methods: {
  tocs(indexs){
      window.scrollTo(0, 0);
    this.$router.push({path: "/cs"})
  },
	tourl:function(indexs){
      window.scrollTo(0, 0);
      this.$router.push({
      name: this.wlmyimgarr[indexs].tourl,
      params:{id:this.wlmyimgarr[indexs].mid}
      })
    },
	toTop(){
		$("html,body").animate({
		 	scrollTop: "0px"	
		 },1000,function(){
		 });
	}
},

mounted () {
		this.wlmycls="wlmycls"
 }

}


</script>