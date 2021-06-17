$(function(){

    $("#MOBILE_MENU_BTN").click(function() {
        $("#MOBILE_MENU_BTN").toggleClass("active");
        
        
            if($("#MOBILE_MENU_LIST").hasClass('off')){
              $("#MOBILE_MENU_LIST").removeClass('off');
              $("#MOBILE_MENU_LIST").animate({'paddingTop':'380px'},300);
            }else{
              $("#MOBILE_MENU_LIST").addClass('off');
              $("#MOBILE_MENU_LIST").animate({'paddingTop':'70px'},300);
            }
          

    });

});