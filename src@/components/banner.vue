<template>
<div class="banner-bg-boxmax">
	<div class="banner-pro_list2" id="brand#/brand" @touchstart="touchStart" @touchend="touchEnd">
	    <transition-group tag="div" :name="slideStyle">
	        <img class="banner-imgarr" v-for="(img, index) in imgArray" :src="img" v-show="index === idx" :key="index" @click="stop()">
	    </transition-group>
	</div>

    <div class="banner22-div-footer">
                <ul class="brand24-footer-ul">
                    <li class="brand25-footer-li fl">
                        <a href="tel:4008059356">
                        <img class="brand23-img-align" src="../img/understandUs2x-4.png" alt="">
                        <p class="brand26-text-align">联系我们</p></a>
                    </li>
                    <li class="brand25-footer-li fl" @click="toTab()" onclick="window.scrollTo(0, 0);">
                        <img class="brand23-img-align" src="../img/understandUs2x-5_03.png" alt="">
                        <p class="brand26-text-align">下一页</p>
                    </li>
                    <li class="brand25-footer-li fl brand27-box-border">
                        <a href="http://tb.53kf.com/code/client/10174246/1/" rel="nofollow" target="_blank">
                        <img class="brand23-img-align" src="../img/understandUs2x-5_05.png" alt="">
                        <p class="brand26-text-align">在线客服</p></a>
                    </li>
                </ul>
        </div>


</div>
</template>
<script>
export default {
    name:'brand',
    data () {
        return {
            timer: null,
            idx: 0,
            imgArray: [
                require('../img/banner@2x-1.jpg'),
                require('../img/banner@2x-2.jpg'),
                require('../img/banner@2x-3.jpg'),
              	require('../img/banner@2x-4.jpg'),
                require('../img/banner@2x-5.jpg'),
                require('../img/banner@2x-6.jpg'),
                require('../img/banner@2x-7.jpg'),
                require('../img/banner@2x-8.jpg'),
                require('../img/banner@2x-9.jpg'),
                require('../img/banner@2x-10.jpg'),
                require('../img/banner@2x-11.jpg'),
                require('../img/banner@2x-12.jpg'),
                require('../img/banner@2x-13.jpg')
            ],
            startX: 0,
            startY: 0,
            slideStyle: 'slideLeft',
            banner:[
            {url:'/market'}
            ]
        };
    },
    methods: {
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
            this.idx++;
            if (this.idx === this.imgArray.length-1) {
                this.idx = 0;
            };
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
        this.$router.push({path: this.banner[0].url})
        }

    },
   
    mounted () {
        this.play()
    }
}; 


</script>







    