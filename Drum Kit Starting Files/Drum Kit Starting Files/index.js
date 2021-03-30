// document.querySelector("button").addEventListener("click", clickHandle);

// function clickHandle() {
//     alert("I got Clicked");
// }

// for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {  // button tag can be . but drum class is more specific.
//     document.querySelectorAll(".drum")[i].addEventListener("click", function () {  // anonymous function
//         //alert("I got Clicked");
//         //this.innerHtml = "A";
//        // querySelectorAll(".drum")[i].style.color = "white";
//         //this.style.color = "blue";
//         //document.querySelector(".drum")[i].style.color = "white";
//         //this.style.color = "white";
//         //if(this.innerH)
//         //this.innerHTML  = "M";
//         var text = this.innerHTML;
       
//         switch (text) {
//             case "w":
//                  new Audio("sounds/tom-1.mp3").play();
//                 break;
//                 case "a":
//                     var audio = new Audio("sounds/tom-2.mp3").play();
//                 break;
//                 case "s":
//                     var audio = new Audio("sounds/tom-3.mp3").play();
//                 break;
//                 case "d":
//                     var audio = new Audio("sounds/tom-4.mp3").play();
//                 break;
//                 case "j":
//                     var audio = new Audio("sounds/crash.mp3").play();
//                 break;
            
//                 case "k":
//                     var audio = new Audio("sounds/snare.mp3").play();
//                 break;
//                 case "l":
//                     var audio = new Audio("sounds/kick-bass.mp3").play();
//                     break;
//             default:
//                 break;
//         }
        
        
//     });
// }

//  Lower part is testing.

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {  // button tag can be . but drum class is more specific.
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var sound = this.innerHTML;
        makeSound(sound);
        buttonAnimation(sound);
    });
}// anonymous function
        
document.addEventListener("keypress",function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
})
       
function makeSound(alphabet) {
    
    var text = alphabet;
       
    switch (text) {
        case "w":
            new Audio("sounds/tom-1.mp3").play();
            break;
            case "a":
            new Audio("sounds/tom-2.mp3").play();
            break;
            case "s":
                new Audio("sounds/tom-3.mp3").play();
            break;
            case "d":
                new Audio("sounds/tom-4.mp3").play();
            break;
            case "j":
                new Audio("sounds/crash.mp3").play();
            break;
        
            case "k":
                new Audio("sounds/snare.mp3").play();
            break;
            case "l":
                new Audio("sounds/kick-bass.mp3").play();
                break;
        default:console.log(alphabet);
            break;
    }
}
//alert(document.querySelectorAll("button").length);
// document.querySelectorAll("button")[i].addEventListener("click", function () {  // anonymous function
//     alert("I got Clicked");
//     i++;
// });

// var audio = new Audio("sounds/tom-1.mp3");
//         audio.play();

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    },100)
}