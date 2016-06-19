$("#passwordfield").on("keyup",function(){
    if($(this).val())
        $(".pwd-visiblity").show();
    else
        $(".pwd-visiblity").hide();
    });
$(".pwd-visiblity").mousein(function(){
                $("#passwordfield").attr('type','text');
            }).mouseup(function(){
            	$("#passwordfield").attr('type','password');
            }).mouseout(function(){
            	$("#passwordfield").attr('type','password');
            });

function sayHello() {
   alert("Hello World");
}
$(".pwd-visiblity").onclick('sayHello');
