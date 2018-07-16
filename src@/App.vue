<template>
    <!-- <div id="app" @click.once="musicPlay"> -->
    <div id="app">
        <router-view></router-view>

    <div>
        <div class="app11-box-right">
            <div class="app12-top-righ" @click="touchStart()" draggable="true">
                <img class="app2-img-size" :class="box1" src="./img/callmidea@2x-2.png" alt="">
            </div>
            <div class="app13-bottom-righ"  draggable="true">
                <audio id="audio" src="static/audio/music.mp3"  loop></audio>
                <img class="app2-img-size" @click="onclick()" :class="box" src="./img/publice@2x-1.png" alt="">
            </div>
        </div>
        <div  class="app10-align-position" v-show="slideStyle">
        <div class="app-boxmax-bg">
            <div class="app13-bg-image">
                <div class="app3-div-position">
                    <img src="./img/home@2x-1.png">
                </div>
            </div>

            <div class="app15-box-image">
                <div class="app4-position-boxmin">
                    <div class="app8-height-boxmin" v-for="(x, index, key) in apparr"  @click="toTab(index)" onclick="window.scrollTo(0, 0);">
                        <div class="app5-text-align">
                            <p class="app6-border-align" @click="routerhideapp()">
                                <img class="app16-icon-left" :src="x.imgsrc">{{x.name}}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            </div>

            <div class="app17-hide-box" @click="hidebox()"></div>
        </div>
    </div>
 
    </div>
</template>

<script>
export default {
     mode: 'history',
    data () {
        return {
            apparr:[ {name: '了解我们', imgsrc:require('./img/callmidea@2x-2.png'), paths:'/understandUs' },
                    {name: '品牌特色', imgsrc:require('./img/callmidea@2x-2.png'), paths:'/brand'},
                    {name: '人气产品', imgsrc:require('./img/callmidea@2x-2.png'), paths:'/banner'},
                    {name: '攻占市场', imgsrc:require('./img/callmidea@2x-2.png'), paths:'market'},
                    {name: '形象展示', imgsrc:require('./img/callmidea@2x-2.png'), paths:'/imageDisplay'},
                    {name: '联系我们', imgsrc:require('./img/callmidea@2x-2.png'), paths:'/callmidea'}
                ],
                    slideStyle: false,
                    number:1,
                    isPlaying:false,
                    number1:1,
                    box:'',
                    box1:'',
                    menu: false,
                    menu_btn: true,
                    musicImg: true,
                    menu: false,
                    menu_btn: true,
                    musicImg: true,
            links: [
                {path: '/banner'},
                {path: '/market'},
                {path: '/imageDisplay'},
                {path: '/callmidea'},
                {path: '/strength'},
                {path: '/raiders'},
                {path: '/vi'},
                {path: '/question'},
                {path: '/brand'},
                {path: '/understandUs'},
                {path: '/question'},
            ]
        };
    },

    methods: {
        toTab (indexs) {
            console.log(this.apparr[indexs].paths);
            this.$router.push({path: this.apparr[indexs].paths})
         },
    touchStart() {
            this.number++
            if(this.number%2==0){
                this.slideStyle=true
            }else{
                this.slideStyle=false
            }
        },
    routerhideapp(){
      this.slideStyle=false
    },
              play(){
        var audio =document.querySelector('#audio');
        console.log(audio)
        if(this.isPlaying==false){
            audio.play();
            this.isPlaying = true;
        }
    },
    stop(){
        var audio =document.querySelector('#audio');
        console.log(audio)
        if(this.isPlaying==true){
            audio.pause();
            this.isPlaying = false;
            audio.currentTime = 0;
        }
    },
    onclick(){
        this.number1++
            if(this.number1%2==0){
                this.play();
                this.box='app14-play-music'
            }else{
                this.stop();
                this.box=''
            }
    },
     showMenu () {
            this.menu = true;
        },
        hideMenu () {
            this.menu = false;
        },
        musicPause () {
            this.musicImg = false;
            this.$refs.music.pause();
        },
        musicPlay () {
            this.musicImg = true;
            this.$refs.music.play();
            this.showOnce = true;
        },
        hidebox(){
             this.slideStyle=false
        }

},
mounted () {
    this.onclick();
}
};
</script>
<style>
    #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
  }
  html{height: 100%;}
  body{height: 100%; margin: 0;}
  a{text-decoration: none; color: #000;}
  li,ul,ol{list-style: none; margin: 0; padding: 0;}
  .fl{float: left;}
  .fr{float: right;}
  h1,h2,h3,h4,h5,h6,div,p,span{margin: 0; padding: 0;}
  div,p,span{font-size: 14px;}
  table,tr,td{margin: 0; padding: 0;}
    .app17-hide-box{width: 50%;height: 100vh; position: fixed;top: 0;right: 0;background-color: rgba(238,230,230,0.5);}
  .app-boxmax-bg{background-color: #fef9ee; height: 100%; position: relative; width: 50%; overflow: hidden;}
    .app3-div-position{position: absolute;top: 5%;left:calc(10%); width: 80%; margin: 0 auto; height: 10%;}
    .app3-div-position img{height: 100%;}
    .app2-img-size{width: 100%; height: 100%;}
    .app4-position-boxmin{position: absolute; left: 0; top: 20%; right: 0; bottom: 0; margin: auto; width: 80%;  height: 60%;}
    .app5-text-align{text-align: center; width: 100%; display: block;}
    .app6-border-align{display: inline-block; width: 80%; text-indent:10px; height: 80%; margin: 2% auto; font-family: '宋体 Regular'; line-height: 30px; font-size: 16px; position: relative; color: #fff100;}
    .app7-text-color{color: #b39478;}
    .app8-height-boxmin{height: 16.8%;}
    .app9-img-position{height: 15%; position: absolute; bottom: 3%; left: calc(25% ); width: 40%;}
    .app10-align-position{position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(238,230,230,0.5); z-index: 4;}

    .app13-bg-image{background-image: url('./img/appaslid@2x-1.png');background-size: cover;background-repeat: no-repeat;overflow: hidden; height: 20%;}
     .app15-box-image{background-image: url('./img/appaslid@2x-2.png');background-size: cover;background-repeat: no-repeat; height: 80%;}
     .app16-icon-left{width: 20px; height: 20px;  left: 0; top: 5px; position: absolute;}
    
</style>