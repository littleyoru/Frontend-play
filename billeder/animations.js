$(document).ready(function() {
    // ex 1
    $(".img_set").click(function() {
        $(this).fadeOut("slow")
        $(this).parent().css("background-color", "#E58F09")
    })
    
    $("#show").click(function() {
        var pTag = $(".img_set").parent().get(0).className
        $("." + pTag).css("background-color", "#fff")

        $(".img_set").fadeIn("slow")
    })

    // ex 2
    $("#shake").click(function() {
        console.log(this.getAttribute('value'))
        $('#dogA').stop()
        $('#dogB').stop()
        if (this.getAttribute('value') === 'Shake left') {
            $("#dogA").fadeOut("slow")
            $("#dogB").fadeIn("slow")
            $(this).prop('value', 'Shake right')
        } else {
            $("#dogB").fadeOut("slow")
            $("#dogA").fadeIn("slow")
            $(this).prop('value', 'Shake left')
        }
    })
})

