<template>
    <div class="index">
      <div :class="indexmaxbox">
        <div class="index-boximage-center">
            <img :class="indeximgcls" src="../img/index@2x_01.png" alt="">
            <div class="index-icon-position" @click="iconclk()"><img :src="indeximgurl[indeximgnum].imagesurl" alt=""></div>
        </div>
    </div>
  </div>
</template>
<script>
	export default {
  name: 'index',
  data () {
  	return {
  	indexcscls:'',
    showindex:false,
  	indextoarr:[
  		{tourl:'/cases'},
      {tourl:'about'}
  	],
    indexmaxbox:'',
    slide:"",
    indeximgcls:'',
    indeximgnum:0,
    indeximgurl:[
      {imagesurl:require('../img/index@2x_04.png')},
      {imagesurl:require('../img/index@2x_05.png')}
    ]
}},
  methods: {
    iconclk(){
      this.indeximgnum++;
      if(this.indeximgnum%2==0){
          this.indexmaxbox="";
          this.indeximgcls=""
         this.indeximgnum=0
      }else{
        this.indexmaxbox="indexmaxbox";
        this.indeximgcls="indeximgcls"
        this.indeximgnum=1
      }
      
    },
  showslide(){
     this.slide="showslide"
     this.showindex=true;
  },
    arr(){
    var list=this;
    $(document).ready(function(){
        var url="http://case.qudao51.com/php/index.php";
        $.post(url,function (dete){
        console.log(dete);//JSON转JS对象
        // var datarr=JSON.parse(dete);
        // console.log(datarr);
        // for(var i=0;i<datarr.length;i++){
          // list.understandUs.push(datarr[i])
        // }
        // console.log(list.understandUs[0]);
    })
  }) },

  greets: function () {
    // console.log(window);
    //   var xhr=null;
    //  if(window.XMLHttpRequest){
    //    xhr=new XMLHttpRequest();
    //  }else{
    //    xhr=new ActiveXObject("Microsoft.XMLHttp");
    //  };
    // xhr.open("GET","./c/wamp/www/sql.php",false);
    //  // xhr.onreadystatecsange=function(){
    //    // if(xhr.readyState=4&&xhr.status==200){
         
    //    // }
    //  // }
    //  xhr.send(xhr.open());
    //  var hyq=xhr.responseText;
    // console.log(hyq);
},

getTxt:function(){

     
},


  // 		indexcsclk(){
  // 			this.indexcscls="indexcs-box-img"
  // 		},
  		toabout(indexs){
        window.scrollTo(0, 0);
  			this.$router.push({path: this.indextoarr[indexs].tourl})
  		},

//     tocss(){
//        // $.post(url, opts, function (res) {
//        //      self.data = res.data;
//        //  }, 'json')
//       console.log(this);
//       console.log('222');
//       setTimeout(() => {  
//                 console.log('111');
//                  this.toabout();
//             }, 5000); 
// },

},
 mounted () {
      this.showslide();
     this.iconclk();
    }
}



</script>
