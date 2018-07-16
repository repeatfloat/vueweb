<template>
	<div id="xyjsmax" class="xyjs" :class="xyjscls2">
	<div>
		<div class="xyjs-topimg-position">
			<img src="../img/xyjs@2x_01.jpg" alt="">
			<div class="xyjs-position-icon" :class="xyjscls"><img src="../img/xyjs@2x_01.png" alt=""></div>
		</div>

	    <div>
	      <div v-for="(item,index) in xyjsimgarr" @click="toTab(index)">
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
	</div>
</template>


<script>
  export default {
  name: 'aboutxyjs',

data () {
  return {
  	xyjsimgarr:[
        {urlarr:require('../img/xyjs@2x_02.jpg'),mid:67,tourl:''},
        {urlarr:require('../img/xyjs@2x_03.jpg'),mid:68,tourl:'aboutdetails'},
        {urlarr:require('../img/xyjs@2x_05.jpg'),mid:69,tourl:'aboutdetails'},
        {urlarr:require('../img/xyjs@2x_08.jpg'),mid:70,tourl:'aboutdetails'},
        {urlarr:require('../img/xyjs@2x_10.jpg'),mid:71,tourl:'aboutdetails'},
        {urlarr:require('../img/xyjs@2x_12.jpg'),mid:72,tourl:'aboutdetails'},
        {urlarr:require('../img/xyjs@2x_13.jpg'),mid:73,tourl:'aboutdetails'},
        {urlarr:require('../img/xyjs@2x_15.jpg'),mid:74,tourl:'aboutdetails'},
        {urlarr:require('../img/xyjs@2x_16.jpg'),mid:75,tourl:'aboutdetails'},
        {urlarr:require('../img/xyjs@2x_18.jpg'),mid:76,tourl:'aboutdetails'},
        {urlarr:require('../img/xyjs@2x_19.jpg'),mid:77,tourl:'aboutdetails'},
        {urlarr:require('../img/xyjs@2x_20.jpg'),mid:78,tourl:'aboutdetails'}
    ],
    timer:'',
    indexs:'',
  	xyjscls2:'',
  	xyjscls:''
  }
},

methods: {
    tocs(indexs){
        window.scrollTo(0, 0);
  		this.$router.push({path: "/cs"})
  	},
	toTop(){
		$("html,body").animate({
		 	scrollTop: "0px"	
		 },1000,function(){
		 });
	},
	tourl:function(){
	  clearTimeout(this.timer);
      window.scrollTo(0, 0);
      this.$router.push({
      name: this.xyjsimgarr[this.indexs].tourl,
      params:{id:this.xyjsimgarr[this.indexs].mid}
      });
      
    },
  	toTab(index) {
	    this.indexs=index;
	    if(this.xyjsimgarr[this.indexs].tourl==undefined||this.xyjsimgarr[this.indexs].tourl==""||this.xyjsimgarr[this.indexs].tourl==null){
        	this.timer="";
    	}else{
		    this.xyjscls2="xyjscls2"
		    this.timer=setInterval(this.tourl, 2000);
  		}
    }
},



mounted () {
	this.timer="";
	this.xyjscls="xyjscls"
 }

}


</script>