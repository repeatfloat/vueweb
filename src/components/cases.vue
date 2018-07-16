<template>
<transition>
<div class="cases">   

	  <swiper :options="swiperOption" ref="mySwiper" class="cases-maxbox-top"
	      @slideNextTransitionStart="slideNextTransitionStart"
	      @slidePrevTransitionStart="slidePrevTransitionStart"
	      @slideChangeTransitionEnd="slideChangeTransitionEnd"
>  

	    <div class="swiper-slide" @click="tourl(0)">
	        <div class="cases-top-img">
	    		<img src="../img/cases@2x_01.jpg" alt="">
	        </div>
	    </div>

		<div class="swiper-slide" @click="tourl(1)">
	        <div class="cases-top-img">
	    		<img src="../img/cases@2x_03.jpg" alt="">
	        </div>
	    </div>

	    <div class="swiper-slide" @click="tourl(2)">
	        <div class="cases-top-img">
	    		<img src="../img/cases@2x_05.jpg" alt="">
	        </div>
	    </div>

	    <div class="swiper-slide" @click="tourl(3)">
	        <div class="cases-top-img">
	    		<img src="../img/cases@2x_07.jpg" alt="">
	        </div>
	    </div>

	    <div class="swiper-slide" @click="tourl(4)">
	        <div class="cases-top-img">
	    		<img src="../img/cases@2x_11.jpg" alt="">
	        </div>
	    </div>

	    <div class="swiper-slide" @click="tourl(5)">
	        <div class="cases-top-img">
	    		<img src="../img/cases@2x_13.jpg" alt="">
	        </div>
	    </div>

	 </swiper>

<!-- 	<div class="case-footer-textarr" id="casesbox">
		<div :class="casescls">
			<img :src="casesarr[casesnum].casestextarr" alt="">
		</div>
	</div> -->

	<div class="casemax-footer-textarr" id="casesboxmax">
		<div class="case-footer-textarr" id="casesbox">
			<div @click="tourl(0)"><img src="../img/cases@2x_02.jpg" alt=""></div>
			<div @click="tourl(1)"><img src="../img/cases@2x_04.jpg" alt=""></div>
			<div @click="tourl(2)"><img src="../img/cases@2x_06.jpg" alt=""></div>
			<div @click="tourl(3)"><img src="../img/cases@2x_08.jpg" alt=""></div>
			<!-- <div><img src="../img/cases@2x_10.jpg" alt=""></div> -->
			<div @click="tourl(4)"><img src="../img/cases@2x_12.jpg" alt=""></div>
			<div @click="tourl(5)"><img src="../img/cases@2x_14.jpg" alt=""></div>
		</div>
	</div>

</div>

</transition>
</template>


<script>
import Swiper from 'swiper'
  export default {
  name: 'cases',

data () {
  return {
      swiperOption: {
      notNextTick: true,
      direction : 'vertical',
      grabCursor : true,
      pagination : '.swiper-pagination',
      paginationClickable :true,
      prevButton:'.swiper-button-prev',//上一张
      nextButton:'.swiper-button-next',//下一张
      scrollbar:'scrollbar',//滚动条
      followFinger : false,//滑动时没有动画
      // loop:true, //复制n个slide循环  
      debugger: true,
      mousewheel: true,
      speed:1000,
    },
    casesnum:0,
    urlarr:[
    	{tourl:'details',params:0},
    	{tourl:'aboutmdn',params:1},
    	{tourl:'aboutodb',params:2},
    	{tourl:'aboutwlmy',params:3},
    	{tourl:'aboutpanc',params:4},
    	{tourl:'abouasbd',params:5}
    ]
  }
},

methods: {
	tourl(indexs){
		// window.scrollTo(0, 0);
		this.$router.push({
			name: this.urlarr[indexs].tourl,
			params:{id:this.urlarr[indexs].params}
		})
	},
	slideNextTransitionStart: function(){
      	this.casesnum++;
		var casesbox=document.getElementById('casesbox').offsetHeight;
		var casesmaxbox=document.getElementById('casesboxmax').offsetHeight;
		console.log(casesmaxbox)
		 $("#casesbox").animate({
		 		top:-this.casesnum*casesmaxbox+"px"
		 },1000,function(){
		 });
    },
    slidePrevTransitionStart: function(){
    	this.casesnum--;
		var casesbox=document.getElementById('casesbox').offsetHeight;
		var casesmaxbox=document.getElementById('casesboxmax').offsetHeight;
		 $("#casesbox").animate({
		 		top:-this.casesnum*casesmaxbox+"px"
		 },1000,function(){
		 });
    },
    slideChangeTransitionEnd: function(){
    	//滑动后执行的事件
    }

},

mounted () {

  }

}


</script>
