<template>
	<div class="mdn">
		<div class="mdn-top-position">
			<img src="../img/mdn@2x_01_18_02.jpg" alt="">
			<div class="mdn-position-icon" :class="mdncls"><img src="../img/mdn@2x_01.png" alt=""></div>
		</div>

		<div>
			<div v-for="(item,index) in mdnimgarr" @click="tourl(index)">
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
  name: 'aboutmdn',

data () {
  return {
  	mdncls:'',
  	mdnimgarr:[
  		{urlarr:require('../img/mdn@2x_01_18_04.jpg'),mid:0,tourl:'aboutmdn'},
  		{urlarr:require('../img/mdn@2x_01_18_05.jpg'),mid:1,tourl:'aboutmdn'},
  		{urlarr:require('../img/mdn@2x_01_18_06.jpg'),mid:2,tourl:'aboutdetails'},
  		{urlarr:require('../img/mdn@2x_01_18_09.jpg'),mid:3,tourl:'aboutdetails'},
  		{urlarr:require('../img/mdn@2x_01_18_11.jpg'),mid:4,tourl:'aboutdetails'},
  		{urlarr:require('../img/mdn@2x_01_18_12.jpg'),mid:5,tourl:'aboutdetails'},
  		{urlarr:require('../img/mdn@2x_01_18_14.jpg'),mid:6,tourl:'aboutmdn'},
  		{urlarr:require('../img/mdn@2x_01_18_16.jpg'),mid:7,tourl:'aboutdetails'},
  		{urlarr:require('../img/mdn@2x_01_18_18.jpg'),mid:8,tourl:'aboutmdn'},
  		{urlarr:require('../img/mdn@2x_01_18_20.jpg'),mid:9,tourl:'aboutdetails'},
  	]
  }
},

methods: {
	toTop(){
		$("html,body").animate({
		 	scrollTop: "0px"	
		 },1000,function(){
		 });
	},
	tocs(indexs){
        window.scrollTo(0, 0);
  		this.$router.push({path: "/cs"})
  	},
    tourl:function(indexs){
      window.scrollTo(0, 0);
      this.$router.push({
      name: this.mdnimgarr[indexs].tourl,
      params:{id:this.mdnimgarr[indexs].mid}
      })
    }
},

mounted () {
		this.mdncls="mdncls"
 }

}


</script>