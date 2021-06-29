$(document).ready(function() {
    var url = 'https://api.nasa.gov/planetary/apod?api_key=VDg4wnM7SjvNfMM2SLur2NuMV7xBbHITGht3uvH8'

    $('#apod').hide()
    $('.apod').click(function() {
        // print the json
        // $(this).load(url)

        $.get(url, function(data) {
            console.log(data)
        }, 'json')

        $.get(url, function(data) {
            $('.apod').fadeOut()
            $('#apod').fadeIn()
            $('#apod_image').attr('src', data.url)
            $('#apod_header').text(data.title)
            $('#apod_des').text(data.explanation)
        }, 'json')
    })

})