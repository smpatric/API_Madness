$(document).ready(function() {
  $('form').on('submit', function(e){
    e.preventDefault()
    var zip = $('input').val();
    console.log(zip);
    $.ajax({
        url: 'http://api.wunderground.com/api/95b6176667512b45/conditions/q/' + zip + '.json',
        type: 'GET',
        dataType: 'JSON',
      })
      .done(function(reply) {
        // debugger
        console.log(reply);
        $('.panel-heading').html('<h4>' + reply.current_observation.display_location.full + ' (' + reply.current_observation.display_location.zip + ')</h4>');
        $('.panel-body').html('Current Conditions: ' + reply.current_observation.weather + '<hr>Temperature: ' + reply.current_observation.temperature_string + '<hr>Feels Like: ' + reply.current_observation.feelslike_string + '<hr>Winds: ' + reply.current_observation.wind_string );
        console.log("success");
      })
      .fail(function() {
        console.log("error");
      })
      .always(function() {
        console.log("complete");
      });
    $('#forcast').removeClass('hidden');
  });
});

// 95b6176667512b45