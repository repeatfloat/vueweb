<template>
<div class="brand-bg-color"  @touchstart="touchStart"  :class="showbuttoncls4" @click="showbuttonclk2()">
	<mu-card style="height:100%" :class="understandcls">
	  <mu-card-media class="brand-box-max">
	  	<p class="brand8-text-color">B<span class="brand9-color-text">R</span>AND</p>
	    <p class="brand6-img-top"><img src="../img/brand@2x-1.png" /></p>
	    <p class="brand2-position-top">
	    	品牌特色
	    	<p class="brand5-line-position"></p>
	    	<p class="brand7-position-icon"><img src="../img/brand@2x-2_04.png" alt=""></p>
	    </p>
	    <p  :class="showbuttoncls5" class="brand3-text-position" @click="understandUscls()">精彩继续<img :class="iconarr" class="brand4-img-width" src="../img/brand@2x-2_07.png" alt=""></p>
	    <p class="brand10-icon-align"><img src="../img/brand@2x-2_08.png" alt=""></p>
	    <p class="brand11-img-position"><img src="../img/brand@2x-2_12.png" alt=""></p>
	    <p class="brand12-icon-right"><img src="../img/brand@2x-2_12.png" alt=""></p>
	    <p class="brand13-icon-left"><img src="../img/brand@2x-2_09.png" alt=""></p>
	    <p class="brand14-icon-center"><img src="../img/brand@2x-2_10.png" alt=""></p>
	  </mu-card-media>
	</mu-card>


	<div class="brand10-box-margin">
		<p class="brand28-text-color">CHARA CTERISTICE</p>
		<h2 class="brand29-text-size">产品特色</h2>
		<div class="brand7-border-bg">
			这件童装，晒爆潮爸潮妈朋友圈！
			<p class="brand9-border-position"></p>
		</div>
		<p>
			<p class="brand8-text-size">This children's clothing, Sun boomer</p>
			<p class="brand8-text-size"> Daddy Chao mother circle of friends</p>
		</p>

		<div class="brand15-content-box"  v-for="item in brandarr">
			<img :src="item.imgur2" alt="">
			<div class="brand16-border-lfat">
				<div class="brand17-border-line"></div>
				<p class="brand22-left-color">{{item.name2}}
					<span class="brand23-text-margin">{{item.name3}}</span>
					<img class="fr brand18-img-right" src="../img/brand@2x-2_13.png" alt="">
				</p>
				<p class="brand30-text-size"><b>{{item.name4}}</b></p>
			</div>

			<div class="brand19-bottom-text">
				<div class="brand20-text-width">
					{{item.name}}
				</div>
				<div class="brand20-text-width">
					<p class="brand21-right-icon"><img :src="item.imgurl" alt=""></p>
				</div>
			</div>
			<div :class="item.brandcls3">
				<p :class="item.brandcls">
					{{item.name5}} <img :src="item.imgur3" :class="item.brandcls2" alt="">
				</p>
			</div>
		</div>

		<div class="brand31-margin-top">
			<p class="brand28-text-color">product value</p>
			<h2 class="brand29-text-size">产品价值</h2>
			<div class="brand7-border-bg">
				炫外“惠”中，做无限增值的童装品牌
				<p class="brand9-border-position"></p>
			</div>
			<p>
				<p class="brand8-text-size">Hyun Wai Wai "Hui", do unlimited value-added </p>
				<p class="brand8-text-size">children's clothing brand</p>
			</p>
		</div>
		
		<div class="brand15-content-box"  v-for="item in brandarr2">
			<img :src="item.imgur2" alt="">
			<div class="brand26-left-text">
				<div class="brand28-text-size"><b>{{item.name}}</b></div>
				<div class="brand20-text-width">
					<p class="brand27-right-img"><img :src="item.imgurl" alt=""></p>
				</div>
			</div>
		</div>
	</div>

	<div class="brand22-div-footer">
				<ul class="brand24-footer-ul">
					<li class="brand25-footer-li fl">
						<a href="tel:4008059356">
						<img class="brand23-img-align" src="../img/understandUs2x-4.png" alt="">
						<p class="brand26-text-align">联系我们</p></a>
					</li>
					<li class="brand25-footer-li fl" @click="toTab()" onclick="window.scrollTo(0, 0);">
						<img class="brand23-img-align" src="../img/understandUs2x-5_03.jpg" alt="">
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
	mode: 'history',
  	name: 'brand',
  data () {
    return {
       		
       		brandarr:[
       		{
       			name:'所有产品均采用德国、日本、欧美等地进口棉、麻、毛等面料，高档奥代尔棉面料，高档质感，生态环保，健康呵护，妈妈放心。',
       			imgurl:require('../img/nav@2x-4.png'),
       			name2:'health',
       			name3:'健康',
       			name4:'进口面料，天然呵护',
       			imgur2:require('../img/brand@2x-1_04.jpg')
       		},
       		{
       			
       			imgur2:require('../img/brand@2x-1_07.jpg'),
       			name2:'fashion',
       			name3:'时尚',
       			name4:'国际潮流，晒娃利器',
       			imgurl:require('../img/brand@2x-2_14.png'),
       			name:'个性品牌融入新概念，引入国际流行时尚元素和剪裁理念，给童装世界带来全新着装理念，是舒适与时尚的完美结合。'
       		},
       		{
       			
       			imgur2:require('../img/brand@2x-1_10.jpg'),
       			name2:'novel',
       			name3:'新奇',
       			name4:'百变潮牌，新鲜无限',
       			imgur3:require('../img/brand@2x-2_15.png'),
       			name5:'魔法童话注重款式的多样性，崇尚简约个性，终端每隔2~3天架上货品大更新，给儿童以无限的新鲜感，一站解决潮童需求。',
       			brandcls:'brand24-text-align',
       			brandcls2:'brand25-right-icon',
       			brandcls3:'brand25-boxposition'

       		},
       		{
       			
       			imgur2:require('../img/brand@2x-1_13.jpg'),
       			name2:'interesting',
       			name3:'有趣',
       			name4:'魔法元素，个性体验',
       			imgurl:require('../img/brand@2x-2_16.png'),
       			name:'以梦幻炫酷、欧美潮范儿的童装为主打，搭配各类有魔法元素的童饰、童鞋、魔法棒等新奇特物件，打造充满智趣的“完美潮童”！'
       		}
       		],
       		brandarr2:[
       		{
       			name:'国内外顶尖设计师联合打造潮范童装',
       			imgur2:require('../img/brand@2x-1_16.jpg'),
       			imgurl:require('../img/home@2x-1.png')
       		},
       		{
       			name:'足不出户当代理商零成本走财富大道',
       			imgur2:require('../img/brand@2x-1_20.jpg'),
       			imgurl:require('../img/home@2x-1.png')
       		},
       		{
       			name:'成长魔法定制童装创造孩子乐趣童年',
       			imgur2:require('../img/brand@2x-1_23.jpg'),
       			imgurl:require('../img/home@2x-1.png')
       		},
       		{
       			name:'代言人全国海选每个孩子都能当童星',
       			imgur2:require('../img/brand@2x-1_27.jpg'),
       			imgurl:require('../img/home@2x-1.png')
       		},
       		{
       			name:'首创魔法在线衣橱亲子互动趣味多多',
       			imgur2:require('../img/brand@2x-1_31.jpg'),
       			imgurl:require('../img/home@2x-1.png')
       		},
       		{
       			name:'终端魔法社交空间童装也能探索成长',
       			imgur2:require('../img/brand@2x-1_34.jpg'),
       			imgurl:require('../img/home@2x-1.png')
       		}
       		],
       		brandarr3:[
       			{url:'/banner'}
       		],
       		understandcls:'',
        num:1,
        iconarr:'',
        showbuttoncls:'',
        showbuttoncls2:'',
        showbuttoncls3:'',
        showbuttoncls4:'',
        showbuttoncls5:''

    } },
  methods: {
  	 touchStart (ev) {

            ev = ev || event;
            if (ev.touches.length === 1) {
                this.startY = ev.touches[0].clientY;
            };
        },
  	  toTab () {
        this.$router.push({path: this.brandarr3[0].url})
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
     showbuttonclk(){
      this.showbuttoncls="understandUs33-showbuttonTop"
      this.showbuttoncls2="understandUs34-showbuttonTop"
      this.showbuttoncls3="understandUs35-showbuttonTop"
      this.showbuttoncls4="understandUs36-showbuttonTop"
      this.showbuttoncls5="understandUs37-showbuttonTop"
      console.log('55555555')
    },
     showbuttonclk2(){
      this.showbuttoncls5=""
      this.showbuttoncls4=""
      this.showbuttoncls3=""
      this.showbuttoncls2=""
      this.showbuttoncls=""
    }
  },

  mounted () {
     this.showbuttonclk();
    }
}

</script>