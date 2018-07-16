<template>
<div class="market-maxbox-bg"  @touchstart="touchStart" :class="understandcls">
	<div class="market2-div-bg">
		<div class="market3-box-pposition">
			<div class="market5-bg-left"></div>
			<div class="market6-bg-right"></div>

			<div class="market9-text-align">
				<div class="market7-line-left">
					<p class="market8-line"></p>
					<p class="market8-line"></p>
					<p class="market8-line"></p>
				</div>
				<p class="market10-display-align">攻占市场</p>
				<div class="market11-line-right">
					<p class="market8-line"></p>
					<p class="market8-line"></p>
					<p class="market8-line"></p>
				</div>

			</div>
			<h1 class="market12-text-color">魔法童话引领大势</h1>
			<div class="market4-img-size"><img src="../img/markwt@2x-1.jpg" alt=""></div>
		</div>
		<p class="market-position-top">
	    	了解市场
	    	<p class="market5-line-position"></p>
	    </p>
	    <p class="market3-text-position" @click="understandUscls()">精彩继续
            <img :class="iconarr" class="market4-img-width" src="../img/brand@2x-2_06.png" alt="">
        </p>
	</div>

<div class="market13-div-margin">
<div v-for="item in marketarr">
	<div :class="item.marketcls">
			<p :class="item.marketcls2">{{item.name}}</p>
			<h2 :class="item.marketcls3">{{item.name2}}</h2>
			<div :class="item.marketcls4">
				<p :class="item.market8">{{item.name7}}</p>
				{{item.name3}}
				<p :class="item.marketcls5"></p>
			</div>
			<p>
				<p :class="item.marketcls6">{{item.name4}}</p>
				<p :class="item.marketcls6">{{item.name5}}</p>
			</p>
	</div>
	<div :class="item.marketcls9">
		<img :src="item.imgurl" :class="item.marketcls7" />
		<p :class="item.market26cls">
			{{item.name6}}
		</p>
		<div :class="item.marketcls10">
			<img :src="item.imgurl2" :class="item.marketcls11">
			{{item.name8}}
			<img :src="item.imgurl2" :class="item.marketcls12">
			<div :class="item.marketcls16">
				<p :class="item.marketcls13"></p>
				<p :class="item.margincls14">{{item.name9}}</p>
				<p :class="item.margincls15">{{item.name10}}</p>
			</div>
		</div>

		<div :class="item.marketcls17">
			<p :class="item.marketcls18">
				{{item.name11}}
			</p>
			<p :class="item.marketcls18">{{item.name12}}</p>
			<p :class="item.marketcls19">{{item.name13}}</p>
			<img :src="item.imgurl3" :class="item.marketcls20"/>

			<div>
				<p :class="item.marketcls21">
					<img :src="item.imgurl4" :class="item.marketcls23"/>{{item.name14}}
				</p>
				<p :class="item.marketcls22">{{item.name15}}</p>
				<p :class="item.marketcls24">
					<img :src="item.imgurl5" :class="item.marketcls25"/>{{item.name16}}
				</p>
			</div>
		</div>
		
	</div>
</div>
</div>

	  <div class="market22-div-footer">
                <ul class="market24-footer-ul">
                    <li class="market25-footer-li fl">
                        <a href="tel:4008059356">
                        <img class="market23-img-align" src="../img/understandUs2x-4.png" alt="">
                        <p class="market26-text-align">联系我们</p></a>
                    </li>
                    <li class="market25-footer-li fl" @click="toTab()" onclick="window.scrollTo(0, 0);">
                        <img class="market23-img-align" src="../img/understandUs2x-5_03.jpg" alt="">
                        <p class="market26-text-align" noclick="scrollWindow()">下一页</p>
                    </li>
                    <li class="market25-footer-li fl market27-box-border">
                        <a href="http://tb.53kf.com/code/client/10174246/1/" rel="nofollow" target="_blank">
                        <img class="market23-img-align" src="../img/understandUs2x-5_05.png" alt="">
                        <p class="market26-text-align">在线客服</p></a>
                    </li>
                </ul>
        </div>
</div>
</template>



<script>



	export default {
  name: 'market',
  data () {
    return {
       		
    	marketarr:[
    		{name:'market situation',name2:'市场现状',name3:'小童装，大市场，消费实力不容小觑',
    		name4:'Childrens wear, big market, consumer',name5:'strength can not be underestimated',
    		marketcls:'market31-margin-top',marketcls2:'market8-text-color',
    		marketcls3:'market9-text-size',marketcls4:'market7-border-bg',
    		marketcls5:'market9-border-position',marketcls6:'market8-text-size',
    		imgurl:require('../img/market@2x-_05.jpg'),
    		marketcls7:'market14-img-margin',name6:'自二胎政策实施，我国童装市场将又迎来一个发展高潮，在未来5年内，国内童装市场预计将拥有400亿元左右的发展空间，2017年将会是童装行业一个加速发展的“黄金时期”。',
            market26cls:'market32-text-size'
    		},
    		{name7:'抓住一家三代的消费心理，想不买买买都难！',
    		name4:'Grasping a three-generation consumer psychology,it is dif ficult to buy or buy!',marketcls2:'market8-text-color',
    		marketcls3:'market9-text-size',marketcls4:'market7-border-bg',
    		marketcls5:'market9-border-position',marketcls6:'market8-text-size',
    		imgurl:require('../img/market@2x-_08.jpg'),market8:'market15-text-size',
    		marketcls9:'market16-position-div',marketcls10:'market17-positionmin-bottom',
    		imgurl2:require('../img/market@2x-1-2.png'),marketcls11:'market18-img-left',
    		marketcls12:'market19-img-right',name8:'望子成龙消费多'
    		},
    		{
    		imgurl:require('../img/market@2x-_10.jpg'),market8:'market15-text-size',
    		marketcls9:'market16-position-div',marketcls10:'market17-positionmin-bottom',
    		imgurl2:require('../img/market@2x-1-2.png'),marketcls11:'market18-img-left',
    		marketcls12:'market19-img-right',name8:'喜新厌旧变化快'
    		},
    		{
    		imgurl:require('../img/market@2x-_13.jpg'),market8:'market15-text-size',
    		marketcls9:'market16-position-div',marketcls10:'market17-positionmin-bottom',
    		imgurl2:require('../img/market@2x-1-2.png'),marketcls11:'market18-img-left',
    		marketcls12:'market19-img-right',name8:'随机购买忍不住'
    		},
    		{
    		imgurl:require('../img/market@2x-_17.jpg'),market8:'market15-text-size',
    		marketcls9:'market16-position-div',marketcls10:'market17-positionmin-bottom',
    		imgurl2:require('../img/market@2x-1-2.png'),marketcls11:'market18-img-left',
    		marketcls12:'market19-img-right',name8:'相互攀比心理强'
    		},
    		{
    		imgurl:require('../img/market@2x-_20.jpg'),market8:'market15-text-size',
    		marketcls9:'market16-position-div',marketcls10:'market17-positionmin-bottom',
    		imgurl2:require('../img/market@2x-1-2.png'),marketcls11:'market18-img-left',
    		marketcls12:'market19-img-right',name8:'成长潮流需求多'
    		},
    		{
    		imgurl:require('../img/market@2x-_22.jpg'),market8:'market15-text-size',
    		marketcls9:'market16-position-div'},

    		{name7:'六大优势重击市场，童装事业就选魔法童话',
    		name4:'ix major advantages hit the market, children',
    		name5:'s clothing business will choose magic fairy',
    		marketcls2:'market8-text-color',
    		marketcls3:'market9-text-size',marketcls4:'market7-border-bg',
    		marketcls5:'market9-border-position',marketcls6:'market8-text-size',
    		imgurl:require('../img/market@2x-_25.jpg'),market8:'market15-text-size',
    		marketcls9:'market16-position-div',marketcls16:'market23-div-bottom',
    		marketcls13:'market20-position-border',name9:'实力雄厚',margincls14:'market21-text-top',
    		name10:'雄厚的企业实力，远见性的战略规划；',margincls15:'market22-text-bottom'
    		},
    		{
    		imgurl:require('../img/market@2x-_28.jpg'),market8:'market15-text-size',
    		marketcls9:'market16-position-div',marketcls16:'market23-div-bottom',
    		marketcls13:'market20-position-border',name9:'专业设计',margincls14:'market21-text-top',
    		name10:'多年的运营经验，出色的设计团队，新颖的设计风格；',margincls15:'market22-text-bottom'
    		},
    		{
    		imgurl:require('../img/market@2x-_30.jpg'),market8:'market15-text-size',
    		marketcls9:'market16-position-div',marketcls16:'market23-div-bottom',
    		marketcls13:'market20-position-border',name9:'强大物流',margincls14:'market21-text-top',
    		name10:'强大的物流配送中心，保障各个地区经销商无后顾之忧；',margincls15:'market22-text-bottom'
    		},
    		{
    		imgurl:require('../img/market@2x-_31.jpg'),market8:'market15-text-size',
    		marketcls9:'market16-position-div',marketcls16:'market23-div-bottom',
    		marketcls13:'market20-position-border',name9:'精准定位',margincls14:'market21-text-top',
    		name10:'精准的市场定位，独具的品牌特色，规范完善的市场管理；',
    		margincls15:'market22-text-bottom'
    		},
    		{
    		imgurl:require('../img/market@2x-_33.jpg'),market8:'market15-text-size',
    		marketcls9:'market16-position-div',marketcls16:'market23-div-bottom',
    		marketcls13:'market20-position-border',name9:'完善售后',margincls14:'market21-text-top',
    		name10:'专业的售后服务，随时解决客户疑难，有呼必应；',
    		margincls15:'market22-text-bottom'
    		},
    		{
    		imgurl:require('../img/market@2x-_36.jpg'),market8:'market15-text-size',
    		marketcls9:'market16-position-div',marketcls16:'market23-div-bottom',
    		marketcls13:'market20-position-border',name9:'新营销模式',margincls14:'market21-text-top',
    		name10:'全渠道经营模式，互联网+新思维，线上线下圈住财富；',
    		margincls15:'market22-text-bottom'
    		},
    		{name7:'新文化经济崛起，开店无往不利',
    		name4:'he rise of a new cultural economy',
    		name5:'has always beea disadvantage',
    		marketcls2:'market8-text-color',marketcls9:'market16-position-div',
    		marketcls3:'market9-text-size',marketcls4:'market7-border-bg',
    		marketcls5:'market9-border-position',marketcls6:'market8-text-size',
    		imgurl:require('../img/market@2x-_39.jpg'),
    		marketcls17:'market24-position-box',name11:'打造潮爸潮妈社交圈',
    		marketcls18:'market25-text-top',name12:'畅享粉丝经济福利',
    		name13:'魔法童话总部打造“潮爸潮妈”公众账号平台，网聚超量人气，仅推出3个月，单月成交量就突破了5000万。玩转“潮爸潮妈”圈子。',marketcls19:'market26-botton-width',
    		imgurl3:require('../img/market@2x-1-3.png'),marketcls20:'market27-right-icon'
    		},
    		{
    		marketcls9:'market16-position-div',
    		// marketcls3:'market9-text-size',marketcls4:'market7-border-bg',
    		// marketcls5:'market9-border-position',
             marketcls6:'market8-text-size',
    		imgurl:require('../img/market@2x-_43.jpg'),
    		marketcls17:'market24-position-box',name11:'孩子来了不想走',
    		marketcls18:'market25-text-top',name12:'反复消费财富源源不断',
    		name13:'魔法童话终端统一打造魔法游戏体验区，免费提供儿童游戏工具和空间，是专属新时代儿童的社交空间，让儿童来了不想走，走了还想来，反复消费财富不断',marketcls19:'market26-botton-width',
    		imgurl3:require('../img/market@2x-1-3.png'),marketcls20:'market27-right-icon'
    		},
    		{name7:'六大销售渠道，灵活创业，定制你的成功',
    		name4:'Six sales channels, flexible entrepreneurship,',
    		name5:'customize your success',    	
    		marketcls2:'market8-text-color',marketcls9:'market16-position-div',
    		marketcls3:'market9-text-size',marketcls4:'market7-border-bg',
    		marketcls5:'market9-border-position',marketcls6:'market8-text-size',
    		market8:'market15-text-size',
    		imgurl:require('../img/market@2x-_46.jpg'),
    		imgurl4:require('../img/market@2x-1-1.png'),
    		marketcls23:'market30-img-left',
    		name14:'实体店自主经营',marketcls21:'market28-box-left',
    		marketcls22:'market29-box-right',
    		name15:'Stores operate independently'
    		},
    		{
    		marketcls9:'market16-position-div',
    		imgurl:require('../img/market@2x-_48.jpg'),
    		imgurl4:require('../img/market@2x-1-1.png'),
    		marketcls23:'market30-img-left',
    		name14:'店中店植入合作',marketcls21:'market28-box-left',
    		marketcls22:'market29-box-right',
    		name15:'In-store shop cooperati'
    		},
    		{
    		marketcls9:'market16-position-div',
    		imgurl:require('../img/market@2x-_51.jpg'),
    		imgurl4:require('../img/market@2x-1-1.png'),
    		marketcls23:'market30-img-left',
    		name14:'自有渠道进商超',marketcls21:'market28-box-left',
    		marketcls22:'market29-box-right',
    		name15:'tsownchannelinto thesupermarket'
    		},
    		{
    		marketcls9:'market16-position-div',
    		imgurl:require('../img/market@2x-_55.jpg'),
    		imgurl5:require('../img/market@2x-1-1.png'),
    		marketcls25:'market32-img-position',
    		marketcls21:'market28-box-left',
    		marketcls22:'market29-box-right',
    		name16:'有学校资源的个人定制式合作',
    		marketcls24:'market31-text-with'
    		},
    		{
    		marketcls9:'market16-position-div',
    		imgurl:require('../img/market@2x-_57.jpg'),
    		imgurl4:require('../img/market@2x-1-1.png'),
    		marketcls23:'market30-img-left',
    		name14:'童装卖场',marketcls21:'market28-box-left',
    		marketcls22:'market29-box-right',
    		name15:'Children sclothingstore '
    		},
    		{
    		marketcls9:'market16-position-div',
    		imgurl:require('../img/market@2x-_59.jpg'),
    		imgurl4:require('../img/market@2x-1-1.png'),
    		marketcls23:'market30-img-left',
    		name14:'电商平台',marketcls21:'market28-box-left',
    		marketcls22:'market29-box-right',
    		name15:'lectronic businessplatform'
    		}
    	],
        market:[
            {url:'/markettwo'}
        ],
        understandcls:'',
        num:1,
        iconarr:''

    } },
  methods: {
       touchStart (ev) {
                ev = ev || event;
                if (ev.touches.length === 1) {
                    this.startY = ev.touches[0].clientY;
                };
            },
  	  toTab () {
            
        this.$router.push({path: this.market[0].url})     
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
    }

  }
    
}
</script>

