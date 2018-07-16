<template>
<div class="imageDisplay2-div-bg" :class="understandcls">
		<div class="imageDisplay3-position-align">
			<img class="imageDisplay4-img-size" src="../img/imageDisplay@2x-1_02.jpg" alt="">
		<p class="imageDisplay-position-top">
	    	店面展示
	    	<p class="imageDisplay5-line-position"></p>
	    </p>
	    <p class="imageDisplay3-text-position" @click="understandUscls()">精彩继续<img :class="iconarr" class="imageDisplay4-img-width" src="../img/brand@2x-2_06.png" alt="">
        </p>
        </div>
	    <div v-for="item in imgeDsplayarr" class="imageDisplay6-img-size">
			<img :src="item.imgurl" alt="">
		</div>
		
		<div class="imageDisplay10-position-imageDisplay">
			<div class="imageDisplay6-img-size">
				<div class="imageDisplay7-div-position">
					<p class="imageDisplay8-icon-position"><img src="../img/home@2x-1.png" alt=""></p>
					<p>mo fa tong hua</p>
				</div>
			</div>

			<div class="imageDisplay-pro_list" @touchstart="touchStart" @touchend="touchEnd">
				<transition-group tag="div" :name="slideStyle">
					   <img class="imageDisplay-imgarr" v-for="(img, index) in imgArray" :src="img" v-show="index === idx" :key="index" @click="stop()">
			 	</transition-group>
			 	<p class="imageDisplay9-button-left" @click="prev()"><img src="../img/imageDisplay@2x-1.png" alt=""></p>
			 	<p class="imageDisplay9-button-right" @click="next()"><img src="../img/imageDisplay@2x-2.png" alt=""></p>
			</div>
		</div>


		<div class="imageDisplay31-margin-top">
			<p class="imageDisplay28-text-color">brand recognition</p>
			<h2 class="imageDisplay29-text-size">品牌识别</h2>
			<div class="imageDisplay7-border-bg">
				童趣·魔法·乐无穷
				<p class="imageDisplay9-border-position"></p>
			</div>
			<p>
				<p class="imageDisplay8-text-size">Fun, magic, endless music</p>
			</p>

			<div class="imageDisplay11-position" v-for="data in textarr">
				<img :src="data.imgsrc" alt="">
				<div>
					<p class="imageDisplay12-text-size">{{data.name}}</p>
					<p class="imageDisplay13-text-size" >{{data.name2}}</p>
				</div>
			</div>
		</div>

		<div class="markettwo22-div-footer">
                <ul class="markettwo24-footer-ul">
                    <li class="markettwo25-footer-li fl">
                        <a href="tel:4008059356">
                        <img class="markettwo23-img-align" src="../img/understandUs2x-4.png" alt="">
                        <p class="markettwo26-text-align">联系我们</p></a>
                    </li>
                    <li class="markettwo25-footer-li fl" @click="toTab()" onclick="window.scrollTo(0, 0);">
                        <img class="markettwo23-img-align" src="../img/understandUs2x-5_03.jpg" alt="">
                        <p class="markettwo26-text-align">下一页</p>
                    </li>
                    <li class="markettwo25-footer-li fl markettwo27-box-border">
                        <a href="http://tb.53kf.com/code/client/10174246/1/" rel="nofollow" target="_blank">
                        <img class="markettwo23-img-align" src="../img/understandUs2x-5_05.png" alt="">
                        <p class="markettwo26-text-align">在线客服</p></a>
                    </li>
                </ul>
        </div>


	




</div>
</template>


<script>
	export default {
  name: 'imageDisplay',
  data () {
    return {
       		
    	imgeDsplayarr:[
    			{imgurl:require('../img/imageDisplay@2x-1_05.jpg')},
    			{imgurl:require('../img/imageDisplay@2x-1_09.jpg')},
    			{imgurl:require('../img/imageDisplay@2x-1_13.jpg')},
    			{imgurl:require('../img/imageDisplay@2x-1_17.jpg')},
    			{imgurl:require('../img/imageDisplay@2x-1_20.jpg')},
    			{imgurl:require('../img/imageDisplay@2x-1_23.jpg')},
    			{imgurl:require('../img/imageDisplay@2x-1_26.jpg')},
    			{imgurl:require('../img/imageDisplay@2x-1_29.jpg')}
    	],
        imageDisplay:[
            {url:'/imageDisplay'}
        ],
           timer: null,
            idx: 0,
            imgArray: [
                require('../img/imageDisplay@2x-banner1.jpg'),
                require('../img/imageDisplay@2x-banner2.jpg'),
              	require('../img/imageDisplay@2x-banner4.jpg'),
                require('../img/imageDisplay@2x-banner5.jpg'),
                require('../img/imageDisplay@2x-banner6.jpg'),
                require('../img/imageDisplay@2x-banner7.jpg'),
                require('../img/imageDisplay@2x-banner87.jpg')
            ],
            startX: 0,
            startY: 0,
            slideStyle: 'slideLeft',
        textarr:[
        	{name:'名片',name2:'business card', imgsrc:require('../img/imageDisplay@2x-1_37.jpg')},
        	{name:'纸袋、无纺袋、铝塑袋',name2:'Paper bags, non-woven bags, aluminum plastic bags', imgsrc:require('../img/imageDisplay@2x-1_39.jpg')},
        	{name:'贵宾卡',name2:'VIP card', imgsrc:require('../img/imageDisplay@2x-1_41.jpg')},
        	{name:'特约经销商经营牌',name2:'ecial dealer operating license', imgsrc:require('../img/imageDisplay@2x-1_44.jpg')},
        	{name:'授权书',name2:'power of attorney', imgsrc:require('../img/imageDisplay@2x-1_47.jpg')},
        	{name:'杯子',name2:'cup', imgsrc:require('../img/imageDisplay@2x-1_50.jpg')},
        	{name:'胶带',name2:'tape', imgsrc:require('../img/imageDisplay@2x-1_53.jpg')},
        	{name:'记事本内页',name2:'Notepad inside pages', imgsrc:require('../img/imageDisplay@2x-1_55.jpg')}
        ],


        imageDisplay:[
            {url:'/question'}
        ],
         understandcls:'',
        num:1,
        iconarr:''
  
    } },
  methods: {
  	  toTab () {
        console.log(this.imageDisplay[0].url);
        this.$router.push({path: this.imageDisplay[0].url})
        },
         autoPlay () {
            this.slideStyle = 'proSlide';
            this.idx++;
            if (this.idx == this.imgArray.length-1) {
                this.idx = 0;
            }
        },
        play () {
            this.timer = setInterval(this.autoPlay, 3000);
        },
        stop () {
            clearInterval(this.timer);
        },
        prev () {
            this.slideStyle = 'proHold';
            this.idx--;
            if (this.idx <= 0) {
                this.idx = this.imgArray.length-1;
            };
        },
        next () {
               this.slideStyle = 'proSlide';
            if (this.idx === this.imgArray.length-1) {
                this.idx = 0;
            }else{
               this.idx++; 
            }
         
            
            
        },
        touchStart(ev) {
            ev = ev || event;
            if (ev.touches.length === 1) {
                this.startX = ev.touches[0].clientX;
                this.startY = ev.touches[0].clientY;
            };
        },
        touchEnd(ev) {
            ev = ev || event;
            if (ev.changedTouches.length === 1) {
                var endX = ev.changedTouches[0].clientX;
                var endY = ev.changedTouches[0].clientY;
                this.stop();
                if(endY - this.startY <= 25 ) {
                    if (endX < this.startX) {
                        this.next();
                    } else if (endX > this.startX) {
                        this.prev();
                    };
                };
            };
        },
         toTab () {
        console.log(this.imageDisplay[0].url);
        this.$router.push({path: this.imageDisplay[0].url})
        },
         understandUscls(){
        this.num++;
        if(this.num%2==0){
        this.understandcls="understandUs29-margin-div";
        this.iconarr="understandUs31-iconarr"
    }else{
        this.understandcls="understandUs30-margin-bottom";
        this.iconarr="understandUs32-iconarr"}
    }

    },
   
    mounted () {
        this.play()
    }
}; 

</script>