$(document).ready(function() {
  $("#hydro form").submit(function() {
    var firstNameInput = $("input#firstName").val();
    var lastNameInput = $("input#lastName").val();
    var streetAddressInput = $("input#streetAddress").val();
    var cityNameInput = $("input#cityName").val();
    var stateNameInput = $("input#stateName").val();
    var zipCodeInput = $("input#zipCode").val();


    $(".firstName").text(firstNameInput);
    $(".lastName").text(lastNameInput);
    $(".streetAddress").text(streetAddressInput);
    $(".cityName").text(cityNameInput);
    $(".stateName").text(stateNameInput);
    $(".zipCode").text(zipCodeInput);

    $("#hydro").hide();
    $("#survey").show();

    event.preventDefault();
  });


    $("#survey form").submit(function() {
      var favoritePizzaToppingInput = $("input:radio[name=flavor]:checked").val();
      var favoriteTunesInput = $("input#favoriteTunes").val();
      var favoriteMovieInput = $("input#favoriteMovie").val();
      var favoriteDrinkInput = $("#favoriteDrink").val();
      var favoriteColorInput = $("#color").val();


      $(".favoritePizzaTopping").text(favoritePizzaToppingInput);
      $(".favoriteTunes").text(favoriteTunesInput);
      $(".favoriteMovie").text(favoriteMovieInput);
      $(".favoriteDrink").text(favoriteDrinkInput);


        $("#receipt").css('background-color', favoriteColorInput);
      $("#receipt").show();
      $("#survey").hide();


      event.preventDefault();
  });
});
