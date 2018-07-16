<template>
<div class="nav-bg-images" :class="navcls"  @touchstart="touchStart">
        <div class="nav2-margin-div">
            <img class="nav1-img-width" src="../img/home@2x-1.png" alt="">
        </div>
        
        <!-- <div class="nav3-div-align">
            <p class="nav4-firest-top" @click="toTab('0')">直接进入<img class="nav5-icon-float" src="../img/nav@2x-3.png" alt=""></p>
        </div> -->

        <div class="demo-grid">
            <mu-row gutter class="nav16-div-bgcolor">
                <mu-col width="100" tablet="100" desktop="100" class="nav9-position-box">
                  <div  @click="toTab('0')">
                    <img id="img2" class="nav6-images-width"  src="../img/nav@2x-1_03.jpg" alt="">
                    <div class="nav7-position-top">
                        <p><img class="nav8-icons-width" src="../img/nav@2x-4.png" alt=""/></p>
                        <router-link to="/understandUs" class="nav10-text-color">了解我们</router-link>
                        <p class="nav11-bottom-color">品牌简介</p>
                    </div>
                  </div>
                </mu-col>
             </mu-row>   
             <mu-row gutter  class="nav16-div-bgcolor">
                <mu-col width="100" tablet="100" desktop="100" class="nav9-position-box">
                  <div  @click="toTab('1')">
                    <img id="img4" :class="navcls4" class="nav6-img-width" src="../img/nav@2x.1_01.jpg" alt="">
                    <div class="nav7-position-top">
                        <p><img class="nav8-icons-width" src="../img/nav@2x-4.png" alt=""></p>
                        <router-link to="/brand" class="nav10-text-color">品牌特色</router-link>
                        <p class="nav11-bottom-color">产品优势</p>
                    </div>
                  </div>
                </mu-col>
             </mu-row>  
             <mu-row gutter  class="nav16-div-bgcolor">
                <mu-col width="100" tablet="100" desktop="100" class="nav9-position-box">
                  <div  @click="toTab('2')">
                    <img id="img5" :class="navcls2" class="nav6-img-width" src="../img/nav@2x.1_02.jpg" alt="">
                    <div class="nav7-position-top">
                        <p><img class="nav8-icons-width" src="../img/nav@2x-4.png" alt=""></p>
                        <router-link to="/banner" class="nav10-text-color">人气产品</router-link>
                        <p class="nav11-bottom-color">产品系列</p>
                    </div>
                  </div>
                </mu-col>
             </mu-row>  
             <mu-row gutter  class="nav16-div-bgcolor">
                <mu-col width="100" tablet="100" desktop="100" class="nav9-position-box">
                  <div  @click="toTab('3')">
                    <img id="img" class="nav6-img-width" alt="" src="../img/nav@2x_0.1_07.jpg"/>
                    <div class="nav13-position-box">
                        <p><img class="nav8-icons-width" src="../img/nav@2x-4.png" alt=""></p>
                        <router-link to="/market"class="nav10-text-color" @click="navarr()">攻占市场</router-link>
                        <p class="nav12-line-text">
                            了解市场</br>
                            品牌优势</br>
                            政策支持</br>
                            专业团队
                        </p>
                    </div>
                  </div>
                </mu-col>
             </mu-row>
             <mu-row gutter class="nav16-div-bgcolor">
                <mu-col width="100" tablet="100" desktop="100" class="nav9-position-box">
                  <div  @click="toTab('4')">
                    <img class="nav6-img-width" src="../img/nav@2x_0.1_11.jpg" alt="">
                    <div class="nav7-position-top">
                        <p><img class="nav8-icons-width" src="../img/nav@2x-4.png" alt=""></p>
                        <router-link to="/imageDisplay" class="nav10-text-color">形象展示</router-link>
                        <p class="nav11-bottom-color">店面展示</br>品牌识别</p>
                    </div>
                  </div>
                </mu-col>
             </mu-row>
             <mu-row gutter class="nav16-div-bgcolor">
                <mu-col width="100" tablet="100" desktop="100" class="nav9-position-box">
                  <div  @click="toTab('5')">
                    <img id="img" class="nav6-img-width" alt="" src="../img/nav@2x_0.1_03.jpg">
                    <div class="nav13-position-box">
                        <p><img class="nav8-icons-width" src="../img/nav@2x-4.png" alt=""></p>
                        <router-link to="/callmidea" class="nav10-text-color">联系我们</router-link>
                        <p class="nav12-line-text">
                            问卷测试</br>
                            留言板</br>
                            联系我们
                        </p>
                    </div>
                  </div>
                </mu-col>
             </mu-row>
        </div>








</div>
</template>

<script>
    export default {
  name: 'nav',
  data(){
    return {
    timer:null,
    number: 1,
    navcls:'',
    navcls2:'',
    navcls3:'',
    navcls4:'',
    num:1,
    urlarr:[
      {name:'/understandUs'},
      {name:'/brand'},
      {name:'/banner'},
      {name:'/market'},
      {name:'/imageDisplay'},
      {name:'/callmidea'}
    ]

  }
  },
  methods: {
    touchStart (ev) {

            ev = ev || event;
            console.log(ev)
            if (ev.touches.length === 1) {
                this.startY = ev.touches[0].clientY;
            };
        },
    toTab (index) {
        this.$router.push({path: this.urlarr[index].name})
        },
    
        navarr(){
                this.number ++;
                var element4=document.getElementById('img4');
                var element5=document.getElementById('img5');
                if(this.number%2==0){
                    this.navcls2="nav13-cs-align";
                    this.navcls3="nav14-cs-align";
                    this.navcls4="nav15-cs-align";
                    element4.src=require('../img/nav@2x.1_01.jpg');
                    element5.src=require('../img/nav@2x.1_02.jpg');
                }else{
                    this.navcls2="nav13-cs-align";
                    this.navcls3="nav14-cs-align";
                    this.navcls4="nav15-cs-align";
                    element4.src=require('../img/nav@2x.1_02.jpg');
                    element5.src=require('../img/nav@2x.1_01.jpg');

               } },
    navclickcls(){
      this.num++;
      if(this.num%2==0){
      this.navcls="nav29-margin-div";
    }else{
      this.navcls="nav30-margin-bottom";
    }
    },
    stop () {
            clearInterval(this.timer);
        },
      },
   mounted () {
      this.timer = setInterval(this.navarr, 5000);
      
    },
//离开当前页面后执行
destroyed: function () {
    this.stop();
},
}
</script>
