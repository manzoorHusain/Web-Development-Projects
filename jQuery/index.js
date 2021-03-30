// $(document).ready(function name(params) {
// $("h1").css("color", "green");
    
// })   // if we write code like this then there is no importance of putting javaScript tags in html . We can put int everywhere

// document.querySelectorAll("button")[0].addEventListener("click",function () {
//     alert("Button Clicked");
// })

// $("button").addEventListener("click",function () {
//         alert("Button Clicked jQuery");
//      })

// $("button").addEventListener("click",function () {
//         alert("Button Clicked jQuery");
//      })   bu kodu calistiramadim.


// dogrusu bu sekilde olacaktir.
$("button").click(function name(params) {
    alert("button clicked!");
    $("h1").css("color", "purple");
})
$("h1").addClass("heading font"); // can add single and multiple classes 

$("h1").removeClass("font heading"); // alse can remove  single or multiple classes.

$(document).keypress(function name(params) {
    
    $("h1").text(params.key);
})