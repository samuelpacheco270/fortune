$("button").click(function(){
    var name=$(".beverage").val();
    var drink=parseInt($(".week").val());
    var time=parseInt($(".year").val());
    var multiply=drink*time;
    var sent=("In The Year 2020 you will have drunk "+name+" "+multiply+" times.");
    console.log(sent);
    $(".liquid").text(sent);
});
$("button").keydown(function (e){
    var name=$(".beverage").val();
    var drink=parseInt($(".week").val());
    var time=parseInt($(".year").val());
    var multiply=drink*time;
    var sent=("In The Year 2020 you will have drunk "+name+" "+multiply+" times.");
    console.log(sent);
    $(".liquid").text(sent);
});