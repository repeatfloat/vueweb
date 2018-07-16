<template>
	<div class="odb">
		<div class="odb-top-position">
			<img src="../img/odb@2x_01.jpg" alt="">
			<div class="odb-position-icon" :class="odbcls"><img src="../img/odb@2x_01.png" alt=""></div>
		</div>

		<div>
			<div v-for="(item,index) in odbimgarr" @click="tourl(index)">
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
  name: 'aboutodb',
 

data () {
  return {
  	odbcls:'',
  	 odbimgarr:[
  		{urlarr:require('../img/odb@2x_01_02.jpg'),mid:10,tourl:'aboutodb'},
  		{urlarr:require('../img/odb@2x_01_03.jpg'),mid:11,tourl:'aboutodb'},
  		{urlarr:require('../img/odb@2x_01_05.jpg'),mid:12,tourl:'aboutdetails'},
  		{urlarr:require('../img/odb@2x_01_07.jpg'),mid:13,tourl:'aboutdetails'},
  		{urlarr:require('../img/odb@2x_01_09.jpg'),mid:14,tourl:'aboutdetails'},
  		{urlarr:require('../img/odb@2x_01_12.jpg'),mid:15,tourl:'aboutdetails'},
  		{urlarr:require('../img/odb@2x_01_14.jpg'),mid:16,tourl:'aboutodb'},
  		{urlarr:require('../img/odb@2x_01_16.jpg'),mid:17,tourl:'aboutdetails'},
  		{urlarr:require('../img/odb@2x_01_18.jpg'),mid:18,tourl:'aboutodb'},
  		{urlarr:require('../img/odb@2x_01_20.jpg'),mid:19,tourl:'aboutdetails'},
  		{urlarr:require('../img/odb@2x_01_22.jpg'),mid:20,tourl:'aboutodb'},
  		{urlarr:require('../img/odb@2x_01_24.jpg'),mid:21,tourl:'aboutdetails'},
  		{urlarr:require('../img/odb@2x_01_26.jpg'),mid:22,tourl:'aboutdetails'}
  	]
  }
},

methods: {
	tourl:function(indexs){
      window.scrollTo(0, 0);
      this.$router.push({
      name: this.odbimgarr[indexs].tourl,
      params:{id:this.odbimgarr[indexs].mid}
      })
    },
    tocs(indexs){
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
		this.odbcls="odbcls"
 }

}


</script>