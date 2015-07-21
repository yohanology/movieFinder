$(document).ready(function(){

$(document).on('keydown','input[name="movie-title"]',function(e){
    if (e.keyCode === 13) {
        console.log('keyDown')

        $(document).ajaxStart(function() {
          $("#loading-gif").show();
        });

        $(document).ajaxStop(function() {
          $("#loading-gif").hide();
        });

        var query = $('input[name="movie-title"]').val();
        
        $.ajax({
            type: "GET",
            url: "http://www.omdbapi.com/?t=" + query + "&y=&plot=short&r=json",
            dataType: "JSON",
            success: function(response) {
                $('.movie-poster').attr('src', response.Poster);
                $('.movie-title').text('Title ' + response.Title);
                $('.movie-year').text('Year ' + response.Year);
                $('.movie-rated').text('Rated ' + response.Rated);
                $('.movie-released').text('Released ' + response.Released);
                $('.movie-runtime').text('Runtime ' + response.Runtime);
                $('.movie-genre').text('Genre ' + response.Genre);
                $('.movie-director').text('Director ' + response.Director);
                $('.movie-writer').text('Writer ' + response.Writer);
                $('.movie-actors').text('Actors ' + response.Actors);
                $('.movie-language').text('Language ' + response.Language);
                $('.movie-country').text('Country ' + response.Country);
                $('.movie-awards').text('Awards ' + response.Awards);

            }
        })
    }
})





})