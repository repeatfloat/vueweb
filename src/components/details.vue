<template>
  <div class="details" :class="detailscls2">
    <img src="../img/public@2x.jpg" alt="">
   <div class="details-nav-bg">
    <p class="details-togo-url" @click="toarr(0)" :class="toarrurl[0].detailscls">湘约今生</p>
    <p class="details-togo-url" @click="toarr(1)" :class="toarrurl[1].detailscls">莫丹娜</p>
    <p class="details-togo-url" @click="toarr(2)" :class="toarrurl[2].detailscls">欧德堡</p>
    <p class="details-togo-url" @click="toarr(3)" :class="toarrurl[3].detailscls">乌龙蜜语</p>
    <p class="details-togo-url" @click="toarr(4)" :class="toarrurl[4].detailscls">彼岸果茶</p>
    <p class="details-togo-url" @click="toarr(5)" :class="toarrurl[5].detailscls">爱斯芭蒂</p>
  </div>
    <router-view></router-view>
  </div>
</template>
<script>
	export default {
  name: 'details',
  data () {
  	return {
      toarrurl:[
        {tourl:'aboutxyjs',detailscls:''},
        {tourl:'aboutmdn',detailscls:''},
        {tourl:'aboutodb',detailscls:''},
        {tourl:'aboutwlmy',detailscls:''},
        {tourl:'aboutpanc',detailscls:''},
        {tourl:'aboutasbd',detailscls:''}
      ],
      detailscls2:''

}},
  methods: {
      toarr(indexs){
        for(var i =0;i<this.toarrurl.length;i++){
            this.toarrurl[i].detailscls=""
        }
        this.toarrurl[indexs].detailscls="detailscls"
        window.scrollTo(0, 0);
        this.$router.push({path: this.toarrurl[indexs].tourl})
      },
      getid(){
        if(this.$route.params.id==undefined||null||""){
              this.toarrurl[0].detailscls="detailscls"
          }else{
              this.toarrurl[this.$route.params.id].detailscls="detailscls"
          }  
      }
},
mounted () {
 this.detailscls2="detailscls2"
 this.getid()
  // window.scrollTo(0, 0);
}


}
</script>