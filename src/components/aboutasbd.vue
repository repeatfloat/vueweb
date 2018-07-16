<template>
	<div class="asbd">
		<div class="asbd-top-position">
			<div><img src="../img/asbd@2x_01_01.jpg" alt=""></div>
			<div class="asbd-position-icon" :class="asbdcls"><img src="../img/asbd@2x_01.png" alt=""></div>
		</div>
		
		<div>
			<div v-for="(item,index) in asbdcimgarr" @click="tourl(index)">
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
  name: 'aboutasbd',

data () {
  return {
  	asbdcls:'',
  	asbdcimgarr:[
  		{urlarr:require('../img/asbd@2x_01_02.jpg'),mid:51,tourl:'aboutasbd'},
  		{urlarr:require('../img/asbd@2x_01_03.jpg'),mid:52,tourl:'aboutasbd'},
  		{urlarr:require('../img/asbd@2x_01_04.jpg'),mid:53,tourl:'aboutdetails'},
  		{urlarr:require('../img/asbd@2x_01_05.jpg'),mid:54,tourl:'aboutdetails'},
  		{urlarr:require('../img/asbd@2x_01_06.jpg'),mid:55,tourl:'aboutasbd'},
  		{urlarr:require('../img/asbd@2x_01_07.jpg'),mid:56,tourl:'aboutdetails'},
  		{urlarr:require('../img/asbd@2x_01_08.jpg'),mid:57,tourl:'aboutasbd'},
  		{urlarr:require('../img/asbd@2x_01_10.jpg'),mid:58,tourl:'aboutdetails'},
  		{urlarr:require('../img/asbd@2x_01_12.jpg'),mid:59,tourl:'aboutasbd'},
  		{urlarr:require('../img/asbd@2x_01_14.jpg'),mid:60,tourl:'aboutdetails'}
  	]
  }
},

methods: {
	tourl:function(indexs){
      window.scrollTo(0, 0);
      this.$router.push({
      name: this.asbdcimgarr[indexs].tourl,
      params:{id:this.asbdcimgarr[indexs].mid}
      })
    },
    tocs(){
        window.scrollTo(0, 0);
  		this.$router.push({path: "/cs"})
  	},
	toTop(){
		$("html,body").animate({
		 	scrollTop: "0px"	
		 },1000,function(){
		 });
	}
},

mounted () {
		this.asbdcls="asbdcls"
 }

}


</script>