/* Scroollbar */
(function($){
    $(window).on("load",function(){
        $(".content-description").mCustomScrollbar({
            axis:"y",
            theme:"3d", 
            scrollInertia: 2000,
                scrollButtons:{
                    enable:true,
                }
        });
    });
  })
  (jQuery);
 
 $(document).ready(function(){ 	
    $(".down-up").on("click","a", function (event) {    	
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href

        var id  = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь

            top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1500 мс

        $('body,html').animate({scrollTop: top}, 1500);

    });

});