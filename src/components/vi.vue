<template>
    <transition name="slideRight">
        <div class="loading vi">
            <canvas id="canvas" class="can" width="560" height="560"></canvas>
        </div>
    </transition>
</template>
 


<script>
  export default {
  name: 'vi',

data () {
  return {
}
},

methods: {

	canvasarr(){
	var canvas = document.getElementById('canvas');

	//获取canvas上下文环境
	var context = canvas.getContext('2d');	

	console.log(canvas)

	context.moveTo(50,10);
	context.lineTo(200,10);
	context.lineTo(200,200);
	context.lineTo(50,200);
  context.lineTo(50,10);

  context.lineTo(70,100);
  context.lineTo(220,100);
  context.lineTo(200,10);
  context.lineTo(220,100);
  context.lineTo(220,240);
  context.lineTo(200,200);
  context.lineTo(220,240);
  context.lineTo(70,240);
  context.lineTo(50,200);
  context.lineTo(70,240);
  context.lineTo(70,100);


    //设置样式
    context.lineWidth = 2;
    context.strokeStyle = "#F5270B";
    //绘制
    context.stroke();
	}

},

mounted () {

	this.canvasarr()



  }
}


</script>


<style>
  











.can{animation:appbreath3 5s linear 0s infinite ;}


   @keyframes appbreath3 {
      0% {
        transform: rotateY(10deg);
      }

      20% {
        transform: rotateY(20deg);
      }

      40% {
        transform: rotateY(30deg);
      }

      60% {
        transform: rotateY(40deg);
      }

      80% {
        transform: rotateY(50deg);
      }

      100% {
        transform: rotateY(60deg);
      }

    }
</style>






