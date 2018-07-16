<template>
    <div id="app">
        <router-view></router-view>
        <div class="app13-bottom-righ"  draggable="true">
          <audio id="audio" src="./static/audio/mp3.mp3"  loop></audio>
          <div class="app2-img-size" :class="box"><img @click="onclick()"   :src="imgarr[num].img" alt=""></div>

         <div class="index-right-navicon" @click="showslide()">
              <img src="./img/index@2x_02.png" alt="">
          </div>

        <div class="index-navicon-align" v-show="showindex" :class="slide">
    
            <div class="app-icon-hideslide" @click="hideslide()"><img src="./img/hide@2x_01.png"></div>
            <div class="row visible-on indexxs-text-align">
              
              <div class="indexxs-text-align">
                <p @click="toabout(1)"><span class="index-left-text">ABOUT</span><span class="index-right-text">关于</span></p>
              </div>

              <div class="indexxs-text-align">
                <p @click="toabout(0)"><span class="index-left-text">WORKS</span><span class="index-right-text">案例</span></p>
              </div>

              <div class="indexxs-text-align">
                <p @click="toabout(2)"><span class="index-left-text">DETAILS</span><span class="index-right-text">详情</span></p>
              </div>

              <div class="indexxs-text-align">
                <p><span class="index-left-text" @click="toabout(3)">CONTACT</span><span class="index-right-text">联系</span></p>
              </div>

              <div class="app-iconsnav-index" @click='toindex()'>
                <img src="./img/public@2x-3.png" alt="">
              </div>
 
          </div>
          


        </div>
</div>


    </div>
</template>
<script>
export default {
   
data () {
return {
    number1:1,
    box:'',
    isPlaying:false,
    num:0,
    showindex:false,
    slide:'',
    indextoarr:[{tourl:'/cs'},{tourl:'/about'},{tourl:'/aboutxyjs'},{tourl:'/callmidea'}],
    imgarr:[{img:require('./img/public@2x-2.png')},{img:require('./img/public@2x-1.png')}],
};
},
methods: {
  toabout(indexs){
    this.slide="hideslide"
    window.scrollTo(0, 0);
    this.$router.push({path: this.indextoarr[indexs].tourl})
  },
  toindex(){
    this.slide="hideslide"
    window.scrollTo(0, 0);
    this.$router.push({path: "/"})
  },
  showslide(){
     this.slide="showslide"
     this.showindex=true;
  },
  hideslide(){
     this.slide="hideslide"
  },
    onclick(){
        this.number1++
        if(this.number1%2==0){
        this.num++
        this.play();
        this.box='app14-play-music'
        }else{
        this.stop();
        this.box='app15-stop-music'
        this.num--
    }
    },

    play(){
        var audio =document.querySelector('#audio');
            audio.play();
            this.isPlaying = true;
    },

    stop(){
        var audio =document.querySelector('#audio');
            audio.pause();
            this.isPlaying = false;
            // audio.currentTime = 0;
    }
},

mounted () {
    this.showslide();
    this.onclick();
}

};
</script>
