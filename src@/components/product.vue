<template>
    <transition name="slideRight">
        <div class="loading">
            <div class="product2">
                <div class="pro_list pr oh" @touchstart="touchStart" @touchend="touchEnd">
                    <transition-group tag="div" :name="slideStyle">
                        <img v-for="(img, index) in imgArray" :src="img" v-show="index === idx" :key="index" class="pa">
                    </transition-group>
                    <div class="prev btn pa zy op" @click="prev()" v-if="idx === 0"></div><div class="prev btn pa zy" @click="prev()" v-else></div>
                    <div class="next btn pa zy2 op" @click="next()" v-if="idx === imgArray.length - 1"></div><div class="next btn pa zy2" @click="next()" v-else></div>
                </div>
            </div>
        </div>
    </transition>
</template>  

<script>
export default {
    data () {
        return {
            timer: null,
            idx: 0,
            imgArray: [
                // require('../img/pro_01.jpg'),
                // require('../img/pro_02.jpg'),
                // require('../img/pro_03.jpg'),
                // require('../img/pro_04.jpg'),
                // require('../img/pro_05.jpg'),
                // require('../img/pro_06.jpg'),
                // require('../img/pro_07.jpg'),
                // require('../img/pro_08.jpg'),
                // require('../img/pro_09.jpg')
            ],
            startX: 0,
            endX: 0,
            slideStyle: 'slideLeft'
        };
    },
    methods: {
        autoPlay () {
            this.slideStyle = 'proSlide';
            this.idx++;
            if (this.idx === this.imgArray.length) {
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
            if (this.idx === -1) {
                this.idx = 0;
            };
        },
        next () {
            this.slideStyle = 'proSlide';
            this.idx++;
            if (this.idx === this.imgArray.length) {
                this.idx = this.imgArray.length - 1;
            };
        },
        touchStart(ev) {
            ev = ev || event;
            // if (ev.touches.length === 1) 只有一只手指在触摸屏幕
            if (ev.touches.length === 1) {
                this.startX = ev.touches[0].clientX;
            };
        },
        touchEnd(ev) {
            ev = ev || event;
            if (ev.changedTouches.length === 1) {
                var endX = ev.changedTouches[0].clientX;
                this.stop();
                if (endX < this.startX) {
                    this.next();
                } else if (endX > this.startX) {
                    this.prev();
                };
            };
        }
    },
    created () {
        this.play();
    }
};
</script>
