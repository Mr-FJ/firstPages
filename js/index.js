
$(document).ready(function () {
    $(".tab").click(function () {
        $(".tab .iconfont:first-child").toggleClass("hidden")
        $(".tab .iconfont:last-child").toggleClass("hidden")
        $(".login").toggleClass("hidden")
        $(".QRcode").toggleClass("hidden")
    })

    $("#user").click(function () {
        $("#user").addClass("selected")
        $("#pass").removeClass("selected")
        $("#item-user").removeClass("hidden")
        $("#item-pass").addClass("hidden")
    })
    $("#pass").click(function () {
        $("#pass").addClass("selected")
        $("#user").removeClass("selected")
        $("#item-user").addClass("hidden")
        $("#item-pass").removeClass("hidden")
    })
    
    $("#coutry").click(function(){
        $("#showcoutry").removeClass("hidden")
    })
    $("#off").click(function(){
        $("#showcoutry").addClass("hidden")
    })
    
//   if( $("#001").value){
//         $(".btn").addClass("select")
//   }
})