$(function(){
    var index = 0;
    setInterval(function(){
        if(index == 5){
            index = 0;
            $(".rotation_img").css("opacity","0");
            $(".rotation_img").eq(index).css("opacity","0");
        }else{
            index++;
            $(".rotation_img").css("opacity","0");
            $(".rotation_img").eq(index).css("opacity","0");
        }
    },2000)
})