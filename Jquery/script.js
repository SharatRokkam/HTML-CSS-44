// $(selector).action(() =>{})

// const btn = document.querySelector("#btn");
// const text = document.querySelector("#text");

// btn.addEventListener("click", function () {
//   text.innerText = "Hello Javascript";
// });

$(document).ready(function () {
  $("#btn").click(function () {
    // $("#text").text("Hello World");
    // $("#text").html("<p>New</p> Content!");
    $("*").css("background-color", "blue");
    // $("#text").toggle();
    $("#text").fadeToggle(2000);
  });
});
