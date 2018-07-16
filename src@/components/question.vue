<template>
<div class="question-bg-image" @touchstart="touchStart">
    <div class="question-bg-box">
        <p class="question28-text-color">Questionnaire test</p>
        <h2 class="question29-text-size">问卷测试</h2>
         <div class="question7-border-bg">
            测创业成功率，赢创业新惊喜
            <p class="question9-border-position"></p>
        </div>
        <p>
            <p class="question8-text-size">Test the success rate of entrepreneu</p>
            <p class="question8-text-size">ship and win new surprises</p>
        </p>
    </div>

    <transition name="slideRight">
        <div class="loading">
            <div class="question">
                
                <form method="post">
                    <h2 v-text="question1" :class="{ tips:tips1 }"></h2>
                    <p>
                        <label><input type="radio" value="有" v-model="answer1">有</label>
                        <label><input type="radio" value="没有" v-model="answer1">没有</label>
                    </p>
                    <h2 v-text="question2" :class="{ tips:tips2 }"></h2>
                    <p>
                        <label><input type="radio" value="5万" v-model="answer2">3万</label>
                        <label><input type="radio" value="10万" v-model="answer2">5万</label>
                        <label><input type="radio" value="10万以上" v-model="answer2">8万以上</label>
                    </p>
                    <h2 v-text="question3" :class="{ tips:tips3 }"></h2>
                    <p>
                        <label><input type="radio" value="店铺选择" v-model="answer3">店铺选择</label>
                        <label><input type="radio" value="营销服务" v-model="answer3">营销服务</label>
                        <label><input type="radio" value="有无优惠" v-model="answer3">有无优惠</label>
                    </p>
                    <h2 v-text="question4" :class="{ tips:tips4 }"></h2>
                    <p>
                        <label><input type="radio" value="产品口感" v-model="answer4">产品品质</label>
                        <label><input type="radio" value="店铺管理" v-model="answer4">店铺管理</label>
                        <label><input type="radio" value="技术培训" v-model="answer4">技术培训</label>
                    </p>
                    <h2 v-text="question5" :class="{ tips:tips5 }"></h2>
                    <p>
                        <label><input type="radio" value="一个月内" v-model="answer5">一个月内</label>
                        <label><input type="radio" value="两个月内" v-model="answer5">两个月内</label>
                    </p>
                    <h2 v-text="question6" :class="{ tips:tips6 }"></h2>
                    <p>
                        <label><input type="radio" value="个人独资" v-model="answer6">个人独资</label>
                        <label><input type="radio" value="合伙经营" v-model="answer6">合伙经营</label>
                    </p>
                    <h2 v-text="question7" :class="{ tips:tips7 }"></h2>
                    <p>
                        <label><input type="radio" value="愿意" v-model="answer7">愿意</label>
                        <label><input type="radio" value="不愿意" v-model="answer7">不愿意</label>
                    </p>     
                </form>

            </div>
        </div>
    </transition>
    

    <div class="question1-img-align">
        <img src="../img/home@2x-1.png" alt="">
    </div>

    <div class="question22-div-footer">
                <ul class="question24-footer-ul">
                    <li class="question25-footer-li fl">
                        <a href="tel:4008059356">
                        <img class="question23-img-align" src="../img/understandUs2x-4.png" alt="">
                        <p class="question26-text-align">联系我们</p></a>
                    </li>
                    <li class="question25-footer-li fl" @click="send()" onclick="window.scrollTo(0, 0);">
                        <img class="question23-img-align" src="../img/understandUs2x-5_03.png" alt="">
                        <p class="question26-text-align">下一页</p>
                    </li>
                    <li class="question25-footer-li fl question27-box-border">
                        <a href="http://tb.53kf.com/code/client/10174246/1/" rel="nofollow" target="_blank">
                        <img class="question23-img-align" src="../img/understandUs2x-5_05.png" alt="">
                        <p class="question26-text-align">在线客服</p></a>
                    </li>
                </ul>
        </div>
<div class="question4-div-position">
    <div class="question3-show-div" v-show="loging">
        <img src="../img/showimg-1.png" alt="">
        <p class="question2-text-button" @click="toTab()" onclick="window.scrollTo(0, 0);">点击登记</p>
    </div>
</div>

</div>
</template>

<script>
export default {
    data () {
        return {
            question1: '您为孩子购买过“魔法童话”的产品吗？',
            question2: '您投资创业的预算是多少？',
            question3: '您与公司合作希望得到哪方面的支持？',
            question4: '您在开店过程中最担心什么？',
            question5: '您的投资性质是什么?',
            question6: '您计划什么时候开业？',
            question7: '您愿意加入“魔法童话”大家庭吗？',
            answer1: '',
            answer2: '',
            answer3: '',
            answer4: '',
            answer5: '',
            answer6: '',
            answer7: '',
            tips1: false,
            tips2: false,
            tips3: false,
            tips4: false,
            tips5: false,
            tips6: false,
            tips7: false,
            tips: 'tips',
            goContact: false,
            loging:false,
            question:[
            {url:'/callmidea'}
            ]
        };
    },
    methods: {
        send () {
            if (this.answer1 === '') {
                this.tips1 = true;
            } else {
                this.tips1 = false;
            };
            if (this.answer2 === '') {
                this.tips2 = true;
            } else {
                this.tips2 = false;
            };
            if (this.answer3 === '') {
                this.tips3 = true;
            } else {
                this.tips3 = false;
            };
            if (this.answer4 === '') {
                this.tips4 = true;
            } else {
                this.tips4 = false;
            };
            if (this.answer5 === '') {
                this.tips5 = true;
            } else {
                this.tips5 = false;
            };
            if (this.answer6 === '') {
                this.tips6 = true;
            } else {
                this.tips6 = false;
            };
            if (this.answer7 === '') {
                this.tips7 = true;
            } else {
                this.tips7 = false;
            };
            if (this.answer1 === '' || this.answer2 === '' || this.answer3 === '' || this.answer4 === '' || this.answer5 === '' || this.answer6 === '' || this.answer7 === '') {
                alert('每道题请选择其中一个选项');
            } else {
                Qudao51.questionnaire.answer(this.question1, this.answer1);
                Qudao51.questionnaire.answer(this.question2, this.answer2);
                Qudao51.questionnaire.answer(this.question3, this.answer3);
                Qudao51.questionnaire.answer(this.question4, this.answer4);
                Qudao51.questionnaire.answer(this.question5, this.answer5);
                Qudao51.questionnaire.answer(this.question6, this.answer6);
                Qudao51.questionnaire.answer(this.question7, this.answer7);
                Qudao51.questionnaire.finish();
                window.scrollTo(0, 0);
                this.goContact = true
                this.loging=true
            };
        },
         touchStart (ev) {
            ev = ev || event;
            if (ev.touches.length === 1) {
                this.startY = ev.touches[0].clientY;
            };
        },
        toTab(){
                this.$router.push({path: this.question[0].url})
        }
    }
};
</script>
