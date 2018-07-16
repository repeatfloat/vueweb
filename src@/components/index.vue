<template>
  <div class="hoem-box-bg" @touchstart="touchStart">
    <img class="home13-top-right" src="../img/home@2x-6.png" alt=""/>
    <img class="home14-bottom-right" src="../img/home@2x-5.png" alt=""/>
    <img class="home15-top-left" src="../img/home@2x-8.png" alt=""/>
    <img class="home16-bottom-left" src="../img/home@2x-7.png" alt=""/>
    <img class="home12-max-image" src="../img/home@2x-1.jpg" alt=""/>
 
<div class="home17-height-div">
  <div class="home11-position-img">
    <img src="../img/home@2x-3.png" title="">
  </div>

  <div class="home12-images-align">
    <img src="../img/home@2x-4.png" title="">
  </div>
</div>
  <div class="hoem3-right-box">
    <p class="home4-text-color">
      快时尚
    </p>
    <p class="home5-twxt-size">童装界潮牌</p>



    <div class="demo-raised-button-container">
      <div class="home9-box-shadow">
       <mu-raised-button class="demo-raised-button home7-border-radius"  labelPosition="before" secondary @click="toTab()">
         <span class="home6-text-color">开家潮店</span>
         <p><img class="home8-icon-width" src="../img/home@2x-icon.png" alt=""></p>
       </mu-raised-button>
      </div>
    </div>
  </div>

  <!-- <div id="box" class="home10-box-footer">
    <img class="homeCls"  src="../img/home@2x-icon2.png">
    <img class="homeCls"  src="../img/home@2x-icon2.png">
    <img class="homeCls"  src="../img/home@2x-icon2.png">
    <img class="homeCls"  src="../img/home@2x-icon2.png">
    <img class="homeCls"  src="../img/home@2x-icon2.png">
    <img class="homeCls"  src="../img/home@2x-icon2.png">
    <img class="homeCls"  src="../img/home@2x-icon2.png">
    <img class="homeCls"  src="../img/home@2x-icon2.png">
    <img class="homeCls"  src="../img/home@2x-icon2.png">
    <img class="homeCls"  src="../img/home@2x-icon2.png">
    <img class="homeCls"  src="../img/home@2x-icon2.png">
    <img class="homeCls"  src="../img/home@2x-icon2.png">
    <img class="homeCls"  src="../img/home@2x-icon2.png">
    <img class="homeCls"  src="../img/home@2x-icon2.png">
  </div>
 -->





</div>
</template>
<script>
export default {
  name: 'home',
  data () {
    return {
        minSize:5,
        maxSize:60,
        newOne:24500*Math.random(),
        transForm:160,
        sizecolor:'#e4393c',
        timer:null,
        newdataarr:[
          {dete:'/nav'}
        ]


    } },
  methods: {
     touchStart (ev) {

            ev = ev || event;
            if (ev.touches.length === 1) {
                this.startY = ev.touches[0].clientY;
            };
        },
    toTab () {
        this.$router.push({path: this.newdataarr[0].dete})
        }
    }

}
</script>

<style scoped>
/*.homeCls{position: absolute; }
.hoem-box-bg{width: 100%; height: 100%; background-image:url('../img/home@2x-1.jpg');  background-size: cover;
background-repeat: no-repeat; position: relative;}
.hoem1-img-width{width: 30%;}
.hoem3-right-box{text-align: right; position: relative;top: 0%; right:0%; height:calc(100% - 300px);padding-right: 5%;background-image:url('../img/home@2x-2.png');  background-size: cover;
background-repeat: no-repeat;}
.home4-text-color{color: #ffedb7; font-size: 1.2rem; }
.home5-twxt-size{font-size: 1.2rem; color: #ffffff;z-index: 2; }
.home7-border-radius{width: 100%; border-radius: 10px; margin-right: 5%; background-color: #edc406; line-height: 36px;position: relative;  z-index: 2;
  animation: showcolor 1.5s linear 0s infinite alternate;}
 .home6-text-color{font-weight: 300; font-size: 0.4rem; display: inline-block; color:#1d2088; z-index: 2; letter-spacing: 10px;}
 .home8-icon-width{width: 30px; height: 30px; position: absolute; top:3px; left:calc(50% + 1.5rem); z-index: 2; z-index: 2;}
 .home9-box-shadow{ animation: breath 1.5s linear 0s infinite alternate; display: inline-block; width: 50%; border-radius: 10px; z-index: 2; margin-top: 10px;}
 .home10-box-footer{position: absolute;height: 20%; bottom: -40%; left: 0; width: 100%;}
.homeImg{width: 30px; height: 30px;}
.home11-position-img{position:absolute; top: 0%;width: 50%;left: 5%; z-index: 0;animation: showimg 1.5s linear 0s 1 alternate;height: 100%;}
.home12-max-image{position: absolute;top: 0; left: 0;width: 100%;height: 100%;}
.home12-images-align{position:absolute; top:0%;width: 50%;right: 5%; z-index: 0; animation: showimg2 1.5s linear 0s 1 alternate;height: 100%;}
.home13-top-right{width: 80px; position: absolute; left: 60%; top: 30%; z-index: 2;animation: showimg3 1.5s linear 0s 1 alternate;}
.home14-bottom-right{width: 80px; position: absolute; left: 50%; top: 40%; z-index: 2;animation: showimg4 1.5s linear 0s 1 alternate;}
.home15-top-left{width: 120px; position: absolute; left: -5%; top: 50%; z-index: 2;animation: showimg5 1.5s linear 0s 1 alternate;}
.home16-bottom-left{width: 65px; position: absolute; left: -5%; top: 57%; z-index: 2;animation: showimg6 1.5s linear 0s 1 alternate;}
.home17-height-div{height: 300px;position: relative;}
.home17-height-div img{width: 100%;height: 100%;}
*/

/* @keyframes breath {
      0% {
        box-shadow: 0 0 20px 1px rgba(215, 88, 8, .2);
      }

      20% {
        box-shadow: 0 0 26px 1px rgba(215, 88, 8, .4);
      }

      40% {
        box-shadow: 0 0 29px 1px rgba(215, 88, 8, .55);
      }

      60% {
        box-shadow: 0 0 32px 1px rgba(215, 88, 8, .75);
      }

      80% {
        box-shadow: 0 0 35px 1px rgba(215, 88, 8, .9);
      }

      100% {
        box-shadow: 0 0 38px 1px rgba(215, 88, 8, 1);
      }

    }



    @keyframes showimg {
      0%{top:25%; left: -20%;}
      50%{top:10%; left: 0px;}
      100%{top:5%; left: 5%;}}

    @keyframes showimg2 {
      0%{top:25%; right: -20%;}
      50%{top:10%; right: 0px;}
      100%{top:5%; right: 5%;}}
    @keyframes showimg3 {
      0%{top:50%; left: 0%; transform: rotate(20deg);}
      50%{top:40%; left: 30%;  transform: rotate(10deg);}
      100%{top:30%; left: 60%; transform: rotate(0deg);}
    }
    @keyframes showimg4 {
      0%{top:60%; left: 0%; transform: rotate(40deg);}
      50%{top:50%; left: 25%;  transform: rotate(20deg);}
      100%{top:40%; left: 50%; transform: rotate(0deg);}
    }
    @keyframes showimg5 {
      0%{top:70%; left: -40%; transform: rotate(40deg);}
      50%{top:60%; left: -20%;  transform: rotate(20deg);}
      100%{top:50%; left: -5%; transform: rotate(0deg);}
    }
    @keyframes showimg6 {
      0%{top:80%; left: -40%; transform: rotate(40deg);}
      50%{top:65%; left: -25%;  transform: rotate(20deg);}
      100%{top:57%; left: -5%; transform: rotate(0deg);}
    }
    @keyframes showcolor {
      0%{background-image: linear-gradient(to left, #de662b, #ff9b27, #ffc116);}
      50%{background-image: linear-gradient(to left, #ff833d, #ca833f, #ff7d33);}
      100%{background-image: linear-gradient(to left, #ff832f, #ff8139, #c73b66);}
    }
    */
</style>