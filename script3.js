//page 1//

var quesEl = document.querySelector(".page-content")

// quesEl.textContent = "Are you a human?"

var quesOle = quesEl.querySelector("#quesOl");

quesOle.textContent = "Are you an Animal?"


var bt1 = document.createElement("button")
bt1.textContent = "1- Yes";
quesOle.appendChild(bt1);
bt1.classList.add('button-class')
bt1.className="button-class";

var bt2 = document.createElement("button");
bt2.textContent = "2- no";
quesOle.appendChild(bt2);
bt2.className="button-class";

var bt3 = document.createElement("button");
bt3.textContent = "3- Perhaps";
quesOle.appendChild(bt3);
bt3.className="button-class";

var bt4 = document.createElement("button");
bt4.textContent = "4- I Don't know!";
quesOle.appendChild(bt4);
bt4.className="button-class";


  bt1.addEventListener("click", function() {
    alert("Wrong answer, Try again");
  });

  bt2.addEventListener("click", function() {
    alert("Right Answer");
    location.href = "/Users/kareemmagdy/Desktop/challenge-4/index2.html";
  });

  bt3.addEventListener("click", function() {
    alert("Wrong answer, Try again");
  });

  bt4.addEventListener("click", function() {
    alert("Wrong answer, Try again");
  });

setInterval(myTimer, 90000);

function myTimer( )
{alert("Time out, You lose");
location.href = "script2.js";
}





//   function startTimer(duration, display) {
//     var timer = duration, minutes, seconds;
//     setInterval(function () {
//         minutes = parseInt(timer / 60, 10);
//         seconds = parseInt(timer % 60, 10);

//         minutes = minutes < 10 ? "0" + minutes : minutes;
//         seconds = seconds < 10 ? "0" + seconds : seconds;

//         display.textContent = minutes + ":" + seconds;

//         if (--timer < 0) {
//             timer = duration;
//             alert("Time out, you lose!")
//         }
//     }, 1000);
// }

// window.onload = function () {
//     var fiveMinutes = 60 * 5,
//         display = document.querySelector('#time');
//     startTimer(fiveMinutes, display);
// };