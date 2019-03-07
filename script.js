

$("button").click(function(){
    $(".results").show();
     var a=$(".Namey").val();
    var b=$(".agey").val();
    var c=$(".yeare").val();
    var yeoV;
    console.log(a);
    console.log(b);
    console.log(c);
    var finalage=2070-c;
    $(".AgeV").text(finalage + " ");
    $(".yeoV").text(a);
    
    
});
