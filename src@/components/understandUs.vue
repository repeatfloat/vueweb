<template>
<div class="understandUs29-bg-color" @touchstart="touchStart" @click="showbuttonclk2()"
:class="showbuttoncls4"> 
	
	<mu-card :class="understandcls">
	  <mu-card-media class="understandUs-box-max">
	    <img src="../img/understandUs@2x-1.jpg" />
	    <p class="understandUs2-position-top" :class="showbuttoncls">品牌简介<p class="understandUs5-line-position" :class="showbuttoncls2"></p></p>
	    <p :class="showbuttoncls3" class="understandUs3-text-position"
	    	@click="understandUscls()">精彩继续<img :class="iconarr"
	    	class="understandUs4-img-width" src="../img/nav@2x-3.png" alt=""></p>
	  </mu-card-media>
	</mu-card>

	<div>
		<div class="understandUs10-box-size">
			<p class="understandUs6-text-width">Tide</p>
			<p class="understandUs6-text-width">brand</p>
			<div class="understandUs7-border-bg">
				专注童装研发，做童装界潮牌
				<p class="understandUs9-border-position"></p>
			</div>
			<p>
				<p class="understandUs8-text-size">Focus on children's wear research and develo</p>
				<p class="understandUs8-text-size">pment do children's wear sector tide brand</p>
			</p>
			
			<div  v-for="(item,index) in understandUsarr" :class="item.name9class" class="understandUs28-margin-top">
				<img class="understandUs11-img-width" :src="item.imgarr" alt="">
				<div class="understandUs13-padding-left">
				<p class="understandUs12-text-indent">
					{{item.name}}
				</p>
				<p :class="item.undecls3">{{item.name1}}</p>
				<p :class="item.undecls3">{{item.name2}}</p>
				<p :class="item.undecls3">{{item.name3}}</p>
				<p :class="item.undecls3">{{item.name4}}</p>
				<p :class="item.undecls3">{{item.name5}}</p>
				<p :class="item.undecls">{{item.name6}}<img :src="item.imgarr2" alt="" :class="item.undecls2"></p>
				<div :class="item.name8cls">
					{{item.name8}}
				</div>
					<p :class="item.name10class">
						{{item.name10}}
						<p :class="item.name11class"></p>
					</p>
				</div>
			</div>
			<div>
				<p class="understandUs21-border-content"></p>
			</div>
			<div class="understandUs22-div-footer">
				<ul class="understandUs24-footer-ul">
					<li class="understandUs25-footer-li fl">
						<a href="tel:4008059356">
						<img class="understandUs23-img-align" src="../img/understandUs2x-4.png" alt="">
						<p class="understandUs26-text-align">联系我们</p></a>
					</li>
					<!-- <li @click="toTab()" onclick="window.scrollTo(0, 0);"> -->
					<router-link to="/brand" tag="li" class="understandUs25-footer-li fl" onclick="window.scrollTo(0, 0);">
						<img class="understandUs23-img-align" src="../img/understandUs2x-5_03.png" alt="">
						<p class="understandUs26-text-align">下一页</p>
					</router-link>
					<li class="understandUs25-footer-li fl understandUs27-box-border">
						<a href="http://tb.53kf.com/code/client/10174246/1/" rel="nofollow" target="_blank">
						<img class="understandUs23-img-align" src="../img/understandUs2x-5_05.png" alt="">
						<p class="understandUs26-text-align">在线客服</p>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>



</div>
</template>

<script>
	export default {
		  mode: 'history',
	  name: 'understandUs',
	   data () {
    return {
    	 bottomNav: 'recents',
    	understandUsarr:[
    		{
    			imgarr: require('../img/understandUs@2x-1_03.jpg'),
    			name:' 魔法童话，是武汉艾克妮服饰有限公司旗下具有强势竞争力的优质童装品牌之一。一家立足欧美时尚潮流科技的集团公司，拥有国际顶尖服装设计师、前沿时尚研究院、儿童成长文化研究中心、独立工厂、销售团队、童装及配套产品研发的完整产业链 '
    		},
    		{
    			imgarr: require('../img/understandUs@2x-1_07.png'),
    			name:'魔法童话专注于0-16岁孩子时尚潮流童装的研发、定制，以爱出发，关注孩子身心健康快乐成长，以孩童视角的独特品味让孩子穿出乐趣，穿出创造力和独立。产品一经推出，深受儿童和家长喜爱。魔法童话不仅仅是一个品牌，更是一种生活态度，魔法童话品牌童装为中国新生代年轻父母群体带来了前沿的时尚流行信息，带来了世界大牌的高品质童装产品，更是带来了带来了风靡欧陆日韩的主流高尚生活方式。'
    		},
    		{
    			imgarr: require('../img/understandUs@2x-1_10.jpg'),
    			name:'1.客户，不代表永久的生意！粉丝，才是品牌永不落幕的童话！快时代，成功品牌背后究竟需要什么？',
				name1:'2.一份品质，一种时尚,一份大爱，一份使命,一个梦想，一个传承。',
				name4:'3.魔法童话，一个分享快乐和成长梦想的粉丝平台！看准时尚趋势的创新品牌，可以瞬间引发市场效应；一支历经百战沉淀的团队，令你财富与理想兼收！',
				name5:'4.儿童，是现在，更是未来,一个有大爱、有格局、有文化沉淀的品牌才能感动消费者，才能成功！',
				imgarr2:require('../img/home@2x-1.png'),
				undecls:'understandUs14-position-img',
				undecls2:'understandUs15-size-img',
				undecls3:'understandUs12-text-indent'
    		},
    		{
    			imgarr: require('../img/understandUs@2x-1_13.png'),
    			name:'公司以丰厚的文化底蕴为依托，践行大爱之人文时尚从儿童身心健康成长角度出发',
    			name1:'设计能充分满足儿童快乐成长需求的服装和产品拥有资深儿童养育文化专家多年服装品牌运营管理经验旗下运作众多品牌一经推出市场即刻受到广大消费者喜爱和众多投资商的青睐，堪称是行业内口碑企业。',
    			undecls3:'understandUs12-text-indent',
    			name2:'',
    			name3:'',
    			name4:'',
    			name5:'',
    			imgarr2:require('../img/nav@2x-4.png'),
    			undecls:'understandUs14-position-img',
				undecls2:'understandUs16-right-img'
    		},
    		{
    			imgarr: require('../img/understandUs@2x-1_16.jpg'),
    			name:'在魔法童话的展示终端里，流露着品牌所传达的一切风格与理念，充满着儿童快乐成长所需的梦幻、想象、探索、冒险、关爱的文化特点，魔法童话，不仅对孩子的现在负责，更对孩子的未来负责。'
    		},
    		{	
    			imgarr: require('../img/understandUs@2x-1_18_03.png'),
    			name8:'以充满关怀的设计和理念，呼吁大家尊重儿童爱玩好动天性，关心儿童身体与心理的双重健康，通过大力宣导儿童自主能力及亲子互动，魔法童话号召父母给予孩子更多陪伴与关爱，为孩子营造一个健康快乐的成长环境。',
    			name10:'以大格局浇灌财富之花',
    			name10class:'understandUs19-border',
    			name11class:'understandUs20-div-position',
    			name8cls:'understandUs17-box-positino',
    			name9class:'understandUs18-position-divmax',
    			imgarr2:require('../img/nav@2x-4.png'),
    			undecls:'understandUs14-position-img',
				undecls2:'understandUs16-align-img'
    		},
    		{
    			imgarr: require('../img/understandUs@2x-1_18_07.jpg'),
    			name:'魔法童话，立足服装、教育、影视三大领域，以大文化、大创意的大格局培育出具有深厚根基的品牌，同时整合多年的产业优势，集原材面料的研发与定制、高弹力再生植物物蛋白植物纤维萃取实验的展开，融合欧美的先进服装科技，利用企业自身雄厚的资金实力与市场运作优势，为魔法童话童装品牌奠定了优越的基础。魔法童话，倡导一切资源和利益永久共享原则，让每一位投资者不仅能分享到当下丰厚的胜利果实，更能预期未来的发展前景，早日布局。'
    			
    		}
    	],
    	understandUs:[
          {dete:'/brand'}
        ],
        understandcls:'',
        num:1,
        iconarr:'',
        showbuttoncls:'',
        showbuttoncls2:'',
        showbuttoncls3:'',
        showbuttoncls4:''
    }

  },
	methods: {
		toTab () {
        // console.log(this.understandUs[0].dete);
        this.$router.push({path: this.understandUs[0].dete})
        },
		handleChange (val) {
      this.bottomNav = val
    },
    understandUscls(){
    	this.num++;
    	if(this.num%2==0){
    	this.understandcls="understandUs29-margin-div";
    	this.iconarr="understandUs31-iconarr"
    }else{
    	this.understandcls="understandUs30-margin-bottom";
    	this.iconarr="understandUs32-iconarr"

    }
    },
   
    touchStart (ev) {
            ev = ev || event;
            if (ev.touches.length === 1) {
                this.startY = ev.touches[0].clientY;
            };
        },

    showbuttonclk(){
    	this.showbuttoncls="understandUs33-showbuttonTop"
    	this.showbuttoncls2="understandUs34-showbuttonTop"
    	this.showbuttoncls3="understandUs35-showbuttonTop"
    	this.showbuttoncls4="understandUs36-showbuttonTop"
    },
     showbuttonclk2(){
    	this.showbuttoncls4=""
    	this.showbuttoncls3=""
    	this.showbuttoncls2=""
    	this.showbuttoncls=""
    }
	},
	  mounted () {
      this.showbuttonclk();
    },

}
</script>
    