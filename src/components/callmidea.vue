<template>
<div class="callmidea6-box-bg">
	<div class="callmidea1-img-align">
		<img src="../img/home@2x-1.png" alt="">
	</div>
	<div class="callmidea-bg-box">
         <div class="callmidea7-border-bg">
            这一次，你离功成功只差一个留言！
            <p class="callmidea9-border-position"></p>
        </div>
        <p>
            <p class="callmidea8-text-size">Test the success rate of entrepreneurship and win new surprises</p>
        </p>
    </div>

 	<form method="post">
		<div class="callmidea15-div-margin callmidea27-text-color">
			<label class="callmidea14-label-box callmidea15-text-indent">
				姓<span class="callmidea16-text-indent">联 系</span>名：<input class="callmidea17-input-border" type="text" ref='name' v-model="userinfo.username"/>
			</label>
			<label class="callmidea14-label-box callmidea15-text-indent">
				联系 电话：<input class="callmidea17-input-border" type="text"  ref='mobile' v-model="userinfo.userphone"/>
			</label>
			<label class="callmidea14-label-box callmidea15-text-indent">
				投资 预算：<input class="callmidea17-input-border" type="text" ref='content'>
			</label>
			<label class="callmidea14-label-box">
				资 料邮 寄地 址 ：<input class="callmidea17-input-border" type="text" ref='address' v-model="userinfo.useraddres"/>
			</label>
		</div>
	</form>

	<div class="callmidea2-bottom-bg">
		<div class="callmidea3-icon-align">
			<button class="callmidea5-text-align"  @click="arrs" onclick="window.scrollTo(0, 0);">点击提交</button>
			<!-- <img src="../img/callmidea@2x-2.png" alt=""> -->
		</div>
			<!-- <div class="callmidea4-footer-addres">
			<p>联系我们</p>
			<p>公司：武汉艾克妮服饰有限公司</p>
			<p>地址：武汉市江汉区常青路49号恒大中心</p>
			<p>电话：400-805-9356</p>
		</div> -->
	</div>

	



</div>

</template>

<style>
	 .callmidea7-border-bg{position: relative; letter-spacing: 2px; font-size: 16px; color: #fff; background-color: #1d2088; border-radius: 15px; text-indent: 10px; z-index: 2; margin: 0px 0 10px 5%; font-weight: bold; line-height: 1rem;}
        .callmidea8-text-size{font-size: 0.4rem; color: #1d2088; padding-left: 20px;}
        .callmidea9-border-position{width: 26px; position: absolute; -webkit-transform: rotate(-145deg); transform: rotate(-206deg); height: 19px; 
        border-right: none; border-bottom: none; background-color: #1d2088; left: 8%; top: 5px; z-index: -1;}
	    .callmidea-bg-box{width: 95%;margin: 0 auto;}
	    .callmidea1-img-align{width: 100%;margin-bottom: 30px;}
    .callmidea1-img-align img{width: 150px;}

    .callmidea14-label-box{display: block;margin-top: 20px; line-height: 25px; font-size: 16px;}
		.callmidea15-div-margin{width: 95%; margin: 0 auto;}
		.callmidea16-text-indent{display: inline-block; color: #f5b61d;background-color: #f5b61d;}
		.callmidea17-input-border{border:1px solid #777; border-radius: 10px; height: 30px; width: 55%; text-indent: 1em;}
	.callmidea15-text-indent{letter-spacing: 6px;}

	.callmidea2-bottom-bg{background-image: url('../img/callmidea@2x-1.png');background-size: cover;background-repeat: no-repeat;}
		.callmidea5-text-align{width: 120px; line-height: 30px; border: 1px solid #000; border-radius: 10px; color: #fff; background-color: #fff100; text-align: center; font-size: 0.6rem; letter-spacing: 2px; margin: 15% auto; display: block;}
	.callmidea6-box-bg{background-color: #f5b61d; height: 100%;width: 100%; padding-top: 20px;}
</style>

<script>
export default {
	name: 'callmidea',

data () {
    return {
  	xyjscls:'',
  	userinfo:{
  		username:'',
  		userpwd:'',
  		userphone:'',
  		useraddres:''
  	}
}
},
    methods: {
        send () {
            // Qudao51.questionnaire.finish();
            // Qudao51.feedback.content({
            //     name: this.$refs.name.value,
            //     mobile: this.$refs.mobile.value,
            //     content: this.$refs.content.value,
            //     address: this.$refs.address.value
            // }).update();
            
        },
        arrs(){
        	console.log(this.userinfo)
	    // var data={
	    // 	name:this.userinfo.username,
	    // 	phone:this.userinfo.userphone,
	    // 	addrres:this.userinfo.useraddres
	    // };
	    // $(document).ready(function(){
	    //     var url="http://case.qudao51.com/php/index.php";
	    //     $.post(url,data,function (dete){
	    //     	console.log(dete);
	    //     }) }) 
		},
    },



};






</script>