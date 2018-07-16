<template>
	<div class="pagc">
		<div class="pagc-top-position">
			<div><img src="../img/pagc@2x_01_02.jpg" alt=""></div>
			<div class="pagc-position-icon" :class="pagccls"><img src="../img/pagc@2x_01.png" alt=""></div>
		</div>

		<div>
			<div v-for="(itme,index) in pancimgarr" @click="tourl(index)">
				<img :src="itme.urlarr" alt="">
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
  name: 'aboutpanc',

data () {
  return {
  	pagccls:'',
  	pancimgarr:[
  		{urlarr:require('../img/pagc@2x_01_03.jpg'),mid:39,tourl:'aboutpanc'},
  		{urlarr:require('../img/pagc@2x_01_05.jpg'),mid:40,tourl:'aboutpanc'},
  		{urlarr:require('../img/pagc@2x_01_06.jpg'),mid:41,tourl:'aboutdetails'},
  		{urlarr:require('../img/pagc@2x_01_08.jpg'),mid:42,tourl:'aboutdetails'},
  		{urlarr:require('../img/pagc@2x_01_10.jpg'),mid:43,tourl:'aboutdetails'},
  		{urlarr:require('../img/pagc@2x_01_12.jpg'),mid:44,tourl:'aboutdetails'},
  		{urlarr:require('../img/pagc@2x_01_14.jpg'),mid:45,tourl:'aboutdetails'},
  		{urlarr:require('../img/pagc@2x_01_16.jpg'),mid:46,tourl:'aboutdetails'},
  		{urlarr:require('../img/pagc@2x_01_18.jpg'),mid:47,tourl:'aboutdetails'},
  		{urlarr:require('../img/pagc@2x_01_19.jpg'),mid:48,tourl:'aboutdetails'},
  		{urlarr:require('../img/pagc@2x_01_20.jpg'),mid:49,tourl:'aboutdetails'},
  		{urlarr:require('../img/pagc@2x_01_22.jpg'),mid:50,tourl:'aboutdetails'}
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
      name: this.pancimgarr[indexs].tourl,
      params:{id:this.pancimgarr[indexs].mid}
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
		this.pagccls="pagccls"
 }

}


</script>