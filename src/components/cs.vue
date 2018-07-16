<template>
<transition>
<div class="cs-maxbox" :class="cscls2">
<div class="topdiv" @touchstart='touchStart' @touchmove='touchMove' @touchend='touchEnd'>
  <div  id="cstopbox" class="cs-box-top">
    <div id="csbox" class="cs-ovflow-img" v-for="(item,index) in csimgarr" @click="toTab(index)">
      <img :src="item.urlarr">
    </div>
  </div>
</div>



<div class="bottomdiv" @touchstart='touchStart' @touchmove='touchMove' @touchend='touchEnd'>
  <div class="cs-box-bottom" id="csbottompbox">
    <div id="csbox2" v-for="(item,index) in csimgarr2" @click="toTab(index)">
      <img :src="item.urlarr">
    </div>
  </div>
</div>


<div  class="cs-iconspan-nav">
  <p :class="csimgarr[0].cscls"></p>
  <p :class="csimgarr[1].cscls"></p>
  <p :class="csimgarr[2].cscls"></p>
  <p :class="csimgarr[3].cscls"></p>
  <p :class="csimgarr[4].cscls"></p>
  <p :class="csimgarr[5].cscls"></p>
</div>

</div>
</transition>
</template>

<style scoped>
.cs-maxbox{height: 100%;overflow: hidden; position: relative;}
  .cs-box-top{position: absolute;top: 0;left: 0;height: 100%;display: block;}
  .cs-box-top div{height: 100%;overflow: hidden;}
  .topdiv{height: 68%;overflow: hidden;position: relative;top: 0;left: 0;}
  .bottomdiv{height: 32%;overflow: hidden;position: relative; top: 0%;left: 0;}
  .cs-box-bottom{height: 100%;position: absolute;top: 0;left: 0;}
  .cs-box-bottom div{height: 100%;overflow: hidden;}
  .cs-iconspan-nav{position:absolute;top: calc(68% - 100px); right: 10px; width: 10px;line-height: 10px;line-height: 15px;}
  .cs-iconspan-nav p{width: 8px;height: 8px;border-radius: 50%;
      display: inline-block; background-color: #777;}
  .iconnav-bgcolor{background-color: #fff !important;}
  .cs-ovflow-img{height: 100%;}
  .cs-ovflow-img img{height: 100%;display: block;}



  
</style>

<script>
  export default {
  name: 'cs',
data () {
  return {
  	csimgarr:[
  		{urlarr:require('../img/cases@2x_01.jpg'),cscls:'iconnav-bgcolor'},
  		{urlarr:require('../img/cases@2x_03.jpg'),cscls:''},
      {urlarr:require('../img/cases@2x_05.jpg'),cscls:''},
      {urlarr:require('../img/cases@2x_07.jpg'),cscls:''},
      {urlarr:require('../img/cases@2x_11.jpg'),cscls:''},
  		{urlarr:require('../img/cases@2x_13.jpg'),cscls:''}
  	],
  	csimgarr2:[
  		{urlarr:require('../img/cases@2x_02.jpg')},
  		{urlarr:require('../img/cases@2x_04.jpg')},
      {urlarr:require('../img/cases@2x_06.jpg')},
      {urlarr:require('../img/cases@2x_08.jpg')},
      {urlarr:require('../img/cases@2x_12.jpg')},
  		{urlarr:require('../img/cases@2x_14.jpg')}
  	],
    urlarr:[
      {tourl:'aboutxyjs',params:0},
      {tourl:'aboutmdn',params:1},
      {tourl:'aboutodb',params:2},
      {tourl:'aboutwlmy',params:3},
      {tourl:'aboutpanc',params:4},
      {tourl:'aboutasbd',params:5}
    ],
    indexs:'',
    cscls2:'',
    timer:'',
  	imgnav:0,
  	startY:0,//开始触摸的位置
    moveY:0,//滑动时的位置
    endX:0,//结束触摸的位置
    disY:0,//移动距离
    slideEffect:''//滑动时的效果,使用v-bind:style="deleteSlider"

  }

},
methods: {
    tourl:function(){
      window.scrollTo(0, 0);
      this.$router.push({
      name: this.urlarr[this.indexs].tourl,
      params:{id:this.urlarr[this.indexs].params}
      })
      clearTimeout(this.timer);
    },
    toTab(index) {
      this.indexs=index;
      this.cscls2="cscls2"
      this.timer=setInterval(this.tourl, 2000);
    },
      switchPoint(){
        for(var i=0;i<this.csimgarr.length;i++){
          this.csimgarr[i].cscls="";
        }
          this.csimgarr[this.imgnav].cscls="iconnav-bgcolor";
      },
      getnodes(){
        var csbox=document.getElementById('csbox').offsetHeight;
        var csbox2=document.getElementById('csbox2').offsetHeight;
        var cstopbox=document.getElementById('cstopbox').offsetHeight;
        var csbottompbox=document.getElementById('csbottompbox').offsetHeight;
        $("#cstopbox").animate({
           top:-this.imgnav*csbox +"px"
           },500,function(){
        });
        $("#csbottompbox").animate({
        top:-this.imgnav*csbox2 +"px"
       },600,function(){
       });
      },
		  touchStart:function(ev) {
        ev = ev || event;
        // ev.preventDefault();//终结click事件
        if(ev.touches.length == 1) {//tounches类数组，等于1时表示此时有只有一只手指在触摸屏幕
          this.startY = ev.touches[0].clientY; // 记录开始位置
        }
      },
      touchMove:function(ev) {
          ev = ev || event;
          // ev.preventDefault();
          if(ev.touches.length == 1) {
            //滑动时距离浏览器左侧的距离
            this.moveY = ev.touches[0].clientY;
            this.disY = this.moveY-this.startY;
          }
        },
    touchEnd:function(ev){
        ev = ev || event;
        // ev.preventDefault();
        if(ev.changedTouches.length == 1) {
        if(this.disY<-10){
          this.imgnav++;
        if(this.imgnav>this.csimgarr.length-1){
          this.imgnav=this.csimgarr.length-1;
        }
      	  this.getnodes();
          this.switchPoint();
        }else if(this.disY>10){
          this.imgnav--;
        if(this.imgnav<0){
          this.imgnav=0;
        }
          this.getnodes();
          this.switchPoint();
        }

        }
    }
},

mounted () {

}
}
</script>




