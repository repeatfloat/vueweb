<template>
<div class="markettwo-maxbox-bg"  @touchstart="touchStart" :class="understandcls">
	<div class="markettwo2-div-bg">
		<div class="markettwo3-box-pposition">
			<div class="markettwo5-bg-left"></div>
			<div class="markettwo6-bg-right"></div>

			<div class="markettwo9-text-align">
				<div class="markettwo7-line-left">
					<p class="markettwo8-line"></p>
					<p class="markettwo8-line"></p>
					<p class="markettwo8-line"></p>
				</div>
				<p class="markettwo10-display-align">攻占市场</p>
				<div class="markettwo11-line-right">
					<p class="markettwo8-line"></p>
					<p class="markettwo8-line"></p>
					<p class="markettwo8-line"></p>
				</div>

			</div>
			<h1 class="markettwo12-text-color">魔法童话引领大势</h1>
			<div class="markettwo4-img-size"><img src="../img/markettwo@2x-1.jpg" alt=""></div>
		</div>
		<p class="markettwo-position-top">
	    	了解市场
	    	<p class="markettwo5-line-position"></p>
	    </p>
	    <p class="markettwo3-text-position"  @click="understandUscls()">
	    	政策支持<img :class="iconarr" class="markettwo4-img-width" src="../img/brand@2x-2_06.png" alt="">
	    </p>
	</div>
	<div class="markettwo13-div-margin">
<div v-for="item in markettwoarr">
	<div :class="item.markettwocls">
			<p :class="item.markettwocls2">{{item.name}}</p>
			<h2 :class="item.markettwocls3">{{item.name2}}</h2>
			<div :class="item.markettwocls4">
				<p :class="item.markettwocls28"></p>
				<p :class="item.markettwo8">{{item.name7}}</p>
				{{item.name3}}
				<p :class="item.markettwocls5"></p>
			</div>
			<p>
				<p :class="item.markettwocls6">{{item.name4}}</p>
				<p :class="item.markettwocls6">{{item.name5}}</p>
			</p>
	</div>
	<div :class="item.markettwocls9">
		<img :src="item.imgurl" :class="item.markettwocls7" />
		<div :class="item.markettwocls26">
			<p :class="item.markettwocls24">
				<img :src="item.imgurl6" :class="item.markettwocls23">{{item.name17}}
			</p>
			<p :class="item.markettwocls24">
				<img :src="item.imgurl6" :class="item.markettwocls23">{{item.name18}}
			</p>
			<p :class="item.markettwocls27">
				<img :src="item.imgurl7" :class="item.markettwocls23">{{item.name19}}
			</p>
			<p :class="item.markettwocls29">
				<img :src="item.imgurl8" :class="item.markettwocls23">{{item.name20}}
			</p>
			<p :class="item.markettwocls29">
				<img :src="item.imgurl8" :class="item.markettwocls23">{{item.name21}}
			</p>
		</div>
		<p>
			{{item.name6}}
		</p>
		<div :class="item.markettwocls10">
			<img :src="item.imgurl2" :class="item.markettwocls11">
			{{item.name8}}
			<img :src="item.imgurl2" :class="item.markettwocls12">
			<div :class="item.markettwocls16">
				<p :class="item.markettwocls13"></p>
				<p :class="item.margincls14">{{item.name9}}</p>
				<p :class="item.margincls15">{{item.name10}}</p>
			</div>
		</div>

		<div :class="item.markettwocls17">
			<p :class="item.markettwocls18">
				{{item.name11}}
			</p>
			<p :class="item.markettwocls18">{{item.name12}}</p>
			<p :class="item.markettwocls19">{{item.name13}}</p>
			<img :src="item.imgurl3" :class="item.markettwocls20"/>

			<div>
				<p :class="item.markettwocls21">
					<img :src="item.imgurl4" :class="item.markettwocls23"/>{{item.name14}}
				</p>
				<p :class="item.markettwocls22">{{item.name15}}</p>
				<p :class="item.markettwocls24">
					<img :src="item.imgurl5" :class="item.markettwocls25"/>{{item.name16}}
				</p>
			</div>
		</div>
		
	</div>


</div>


	<div>
		<div class="markettwo3-table-box">
			<p class="fl"><span>1.</span>资格确定</p>
			<p class="fl"><span>2.</span>预约考察</p>
			<p class="fl"><span>3.</span>了解洽谈</p>
			<p class="fl"><span>4.</span>签定合约</p>
			<p class="fl"><span>5.</span>领取相关证件</p>
			<p class="fl"><span>6.</span>领取赠送品</p>
			<p class="fl"><span>7.</span>员工培训</p>
			<p class="fl"><span>8.</span>店面装修</p>
			<p class="fl"><span>9.</span>开业准备</p>
			<p class="fl"><span>10.</span>确认货品总发货</p>
			<p class="fl"><span>11.</span>开业宣传</p>
			<p class="fl"><span>12.</span>正式营业</p>
			<p class="fl"><span>13.</span>后期配送</p>
		</div>
		<!-- <div class="markettwo3-table-box">
			
		</div>
			<div class="markettwo3-table-box">
			
		</div>
			<div class="markettwo3-table-box">
			
		</div> -->
	</div>


	<div>
		<img class="markettwo40-img-size" src="../img/markettwo@2x-2_31.jpg">
	</div>

	<div class="markettwo7-border-bg">
			专业团队，24h为你待命
			<p class="markettwo9-border-position"></p>
	</div>
	<p class="markettwo8-text-size">Professional team, 24h stand by for you</p>
<div>
	<div class="markettwo43-box-ovflow">
		<img class="markettwo41-img-align fl" src="../img/markettwo@2x-2_34.jpg">
		<p class="fr markettwo44-text"><span class="markettwo42-box-riduas fl"></span>BusinessConsulting Team</p>
		<p class="fl markettwo45-text-line-height">
			<img class="fl markettwo46-img-size" src="../img/nav@2x-4.png">
			创业顾问团队
		</p>
	</div>
	<div class="markettwo43-box-ovflow">
		<img class="markettwo41-img-align fr" src="../img/markettwo@2x-2_38.jpg">
		<p class="markettwo47-left-text"><span class="markettwo42-box-riduas fl"></span>TechnicalTraining Team</p>
		<p class="fl markettwo45-text-line-height">
			<img class="fl markettwo46-img-size" src="../img/nav@2x-4.png">
			技术培训团队
		</p>
	</div>
</div>
<div>
	<div class="markettwo43-box-ovflow">
		<img class="markettwo41-img-align fl" src="../img/markettwo@2x-2_41.jpg">
		<p class="fr markettwo44-text"><span class="markettwo42-box-riduas fl"></span>OperationsMana gem ent Team</p>
		<p class="fl markettwo45-text-line-height">
			<img class="fl markettwo46-img-size" src="../img/nav@2x-4.png">
			运营管理团队
		</p>
	</div>
	<div class="markettwo43-box-ovflow">
		<img class="markettwo41-img-align fr" src="../img/markettwo@2x-2_45.jpg">
		<p class="markettwo47-left-text"><span class="markettwo42-box-riduas fl"></span>Logisticsteam</p>
		<p class="fl markettwo45-text-line-height">
			<img class="fl markettwo46-img-size" src="../img/nav@2x-4.png">
			物流运输团队
		</p>
	</div>
</div>
<div>
	<div class="markettwo43-box-ovflow">
		<img class="markettwo41-img-align fl" src="../img/markettwo@2x-2_48.jpg">
		<p class="fr markettwo44-text"><span class="markettwo42-box-riduas fl"></span>BrandPackaging Team</p>
		<p class="fl markettwo45-text-line-height">
			<img class="fl markettwo46-img-size" src="../img/nav@2x-4.png">
			品牌包装团队
		</p>
	</div>
	<div class="markettwo43-box-ovflow">
		<img class="markettwo41-img-align fr" src="../img/markettwo@2x-2_53.jpg">
		<p class="markettwo47-left-text"><span class="markettwo42-box-riduas fl"></span>ProductDevelopm ent Team</p>
		<p class="fl markettwo45-text-line-height">
			<img class="fl markettwo46-img-size" src="../img/nav@2x-4.png">
			产品研发团队
		</p>
	</div>
</div>

</div>


		<div class="markettwo22-div-footer">
                <ul class="markettwo24-footer-ul">
                    <li class="markettwo25-footer-li fl">
                    	<a href="tel:4008059356">
                        <img class="markettwo23-img-align" src="../img/understandUs2x-4.png" alt="">
                        <p class="markettwo26-text-align">联系我们</p></a>
                    </li>
                    <li class="markettwo25-footer-li fl" @click="toTab()" onclick="window.scrollTo(0, 0);">
                        <img class="markettwo23-img-align" src="../img/understandUs2x-5_03.jpg" alt="">
                        <p class="markettwo26-text-align">下一页</p>
                    </li>
                    <li class="markettwo25-footer-li fl markettwo27-box-border">
                    	<a href="http://tb.53kf.com/code/client/10174246/1/" rel="nofollow" target="_blank">
                        <img class="markettwo23-img-align" src="../img/understandUs2x-5_05.png" alt="">
                        <p class="markettwo26-text-align">在线客服</p></a>
                    </li>
                </ul>
        </div>



</div>
</template>





<script>
	export default {
  name: 'markettwo',
  data () {
    return {
       	
        markettwo:[
            {url:'/imageDisplay'}
        ],
    	markettwoarr:[
    		{name3:'创业前后全程支持，护航事业迈向成功',
    		name4:'Full support before and after the start of business',
    		markettwocls:'markettwo31-margin-top',markettwocls2:'markettwo8-text-color',
    		markettwocls3:'markettwo9-text-size',markettwocls4:'markettwo7-border-bg',
    		markettwocls5:'markettwo9-border-position',markettwocls6:'markettwo8-text-size',
    		imgurl:require('../img/markettwo@2x-2_07.jpg')
    		},
    		{
    		imgurl:require('../img/markettwo@2x-2_11.jpg'),markettwo8:'markettwo15-text-size',
    		markettwocls9:'markettwo16-position-div',markettwocls10:'markettwo17-positionmin-bottom'
    		},
    		{
    		imgurl:require('../img/markettwo@2x-2_15.jpg'),markettwo8:'markettwo15-text-size',
    		markettwocls9:'markettwo16-position-div',markettwocls10:'markettwo17-positionmin-bottom'
    		},
    		{
    		imgurl:require('../img/markettwo@2x-2_19.jpg'),markettwo8:'markettwo15-text-size',
    		markettwocls9:'markettwo16-position-div',markettwocls10:'markettwo17-positionmin-bottom'
    		},

    		{name7:'合作模式',
    		markettwocls3:'markettwo9-text-size',markettwocls4:'markettwo32-border-width',
    		markettwocls5:'markettwo9-border-position',markettwocls6:'markettwo8-text-size',
    		imgurl:require('../img/markettwo@2x-2_22.jpg'),markettwo8:'markettwo15-text-size',
    		name17:'区域代理：（省市级代理/区县级代理）',
    		name18:'代理要求：具有自营实体店一家以上；',
    		name19:'尊享权利：享有本区域保护特权；允以招收分销商资格。',
    		imgurl6:require('../img/market@2x-1-1.png'),
    		imgurl7:require('../img/market@2x-1-1.png'),
    		markettwocls23:'markettwo30-img-left',
    		markettwocls24:'markettwo31-text-with',
    		markettwocls27:'markettwo31-text-with',
    		markettwocls26:'markettwo33-div-bg'
    		},
    		{name7:'经销合作',
    		markettwocls3:'markettwo9-text-size',markettwocls4:'markettwo32-border-width',
    		markettwocls5:'markettwo9-border-position',markettwocls6:'markettwo8-text-size',
    		imgurl:require('../img/markettwo@2x-2_25.jpg'),markettwo8:'markettwo15-text-size',
    		name17:'经销要求：预存固定进货金额；',
    		name18:'享受权利：享有优先折扣进货价格。',
    		imgurl6:require('../img/market@2x-1-1.png'),
    		markettwocls23:'markettwo30-img-left',
    		markettwocls24:'markettwo31-text-with',
    		markettwocls26:'markettwo33-div-bg',
    		markettwocls27:'markettwo34-p-ovflow',
    		markettwocls28:'markettwo35-border-top'
    		},
    		{name7:'合作要求',
    		markettwocls3:'markettwo9-text-size',markettwocls4:'markettwo32-border-width',
    		markettwocls5:'markettwo9-border-position',markettwocls6:'markettwo8-text-size',
    		imgurl:require('../img/markettwo@2x-2_28.jpg'),markettwo8:'markettwo15-text-size',
    		name17:'1、具有独立承担民事责任能力的自然人或企业法人。',
    		name18:'2、具有一定的创业启动资金。',
    		name20:'3、接受总部的督导培训，遵守总部的经营管理规范，具有良好的为顾客提供服务的意识，自觉维护魔法童话品牌声誉。',
    		name21:'4、认同魔法童话的经营理念和发展目标，愿与总部携手，共同开拓中国市场。',
    		imgurl6:require('../img/market@2x-1-1.png'),
    		imgurl8:require('../img/market@2x-1-1.png'),
    		markettwocls23:'markettwo30-img-left',
    		markettwocls24:'markettwo31-text-with',
    		markettwocls26:'markettwo33-div-bg',
    		markettwocls27:'markettwo34-p-ovflow',
    		markettwocls28:'markettwo35-border-top',
    		markettwocls29:'markettwo31-text-with'
    		},
    		{name7:'合作流程',markettwo8:'markettwo15-text-size',
    		markettwocls3:'markettwo9-text-size',markettwocls4:'markettwo32-border-width',
    		markettwocls5:'markettwo9-border-position',markettwocls6:'markettwo8-text-size',
    		},
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
        this.$router.push({path: this.markettwo[0].url})
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