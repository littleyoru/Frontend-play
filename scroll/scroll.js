$(document).ready(function() {
    // reset scroll
    // $(window).scrollTop(0)
    $('html', 'body').animate({scrollTop:0}, 1)
    $('body').scrollTop(0)
    $('#bar').css('width', '0%')

    // pictures
    $('#show').click(function() {
        $('img').fadeIn('slow')
    })
    $('input').not('#show').click(function() {
        var parent = $(this).parent('.quarter')
        $(this).clone().appendTo(parent)
        $(this).siblings().children('img').fadeOut('slow')
    })

})

// scroll progress bar
$(window).scroll(function() {
    scrollProgress()
})

function scrollProgress() {
    // var scrollableHeight = $('body').height()
    // console.log(scrollableHeight)
    var winScroll = $('body').scrollTop() || $(document.documentElement).scrollTop()
    // var windowHeight = $(document).height()
    var height = $('body')[0].scrollHeight - $('body')[0].clientHeight
    var scrolled = (winScroll / height) * 100
    $('#bar').css('width', scrolled + '%')
}
