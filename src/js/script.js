var swiper1 = new Swiper('.warp', {
    direction: 'vertical', 
    speed:700,
    resistanceRatio:0,
    slidesPerView :'auto',
    onSlideChangeStart: function(swiper){ 
        if(swiper.activeIndex == swiper.slides.length - 1){
            $(".arrow").fadeOut();
        } else {
            $(".arrow").fadeIn();
        };
      $('html,body').animate({
        scrollTop:0       
      },0);
    },   
});
$(document).ready(function (){
    var music = document.getElementById("music");
    setTimeout(function() {
        $('.enter').off('touchend').on('touchend',
        function() {
            $(".home").fadeOut();
            $("#audio").show();     
            $('html,body').animate({
              scrollTop:0       
            },0);              
            music.play();
        });
    }, 0);
    music.volume = .6;
    $('#audio').off('touchend').on('touchend',
    function() {
        if (music.paused) {
            music.play();
            $('#audio').addClass('play');
            console.log("播放中")
            $('#audio').attr('src', '../img/music-min.png');
        } else {
            music.pause();
            console.log("停止播放")
            $('#audio').removeClass('play');
            $('#audio').attr('src', '../img/stop_music-min.png');
        };
    });
});