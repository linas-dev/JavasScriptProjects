// function selectColor() {
//     var colorOutput;
//     var colors = document.getElementById('color-input').value; 
//     var colorString = " is a great color"

//     switch (colors) {
//         case 'Red':
//             colorOutput = 'Red' + colorString;
//             break;
//         case 'Green':
//             colorOutput = 'Green' + colorString;
//             break;
//         case 'Blue':
//             colorOutput = 'Blue' + colorString;
//             break;
//         case 'Yellow':
//             colorOutput = 'Yellow' + colorString;
//             break;
//         case 'Grey':
//             colorOutput = 'Grey' + colorString;
//             break;    
//         default:
//             colorOutput = 'Enter a color exactly as written on the above list';
//     }    
//     document.getElementById('output').innerHTML += colorOutput;
// }



// function change_me(){
//     var changeMe = document.getElementsByClassName('click');
//     changeMe[1].innerHTML = 'Text has changed';
// }

var c = document.getElementById("idName");
var ctx = c.getContext("2d");

var grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");

ctx.fillStyle = grd;
ctx.fillRect(20, 20, 150, 100);
