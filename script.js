//page 1//

var quesEl = document.querySelector(".page-content")

var quesOle = quesEl.querySelector("#quesOl");

// let timeLeft = 90;
// let clockTick;
// let timerEl = document.querySelector(".timer");


quesOle.textContent = "Arrays in Javascript can be used to store ?"


var bt1 = document.createElement("button")
bt1.textContent = "1- All";
quesOle.appendChild(bt1);
bt1.classList.add('button-class')
bt1.className="button-class";

var bt2 = document.createElement("button");
bt2.textContent = "2- other arrays";
quesOle.appendChild(bt2);
bt2.className="button-class";

var bt3 = document.createElement("button");
bt3.textContent = "3- booleans";
quesOle.appendChild(bt3);
bt3.className="button-class";

var bt4 = document.createElement("button");
bt4.textContent = "4- numbers and strings";
quesOle.appendChild(bt4);
bt4.className="button-class";

bt1.addEventListener("click", function() {
    alert("Right Answer");
    location.href = "index3.html";
  });

  bt2.addEventListener("click", function() {
    alert("Wrong answer, Try again");
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
location.href = "/Users/kareemmagdy/Desktop/challenge-4/index2.html";
}

// let points = [];

// if (bt1) {points.push(10)}


//  function startTimer () {
//    timerEl.textContent = "Time Remaining " + timeLeft;
//    if (timeLeft === 0) {
//      clearInterval(clockTick);
//      alert("Time out, You lose");
// location.href = "/Users/kareemmagdy/Desktop/challenge-4/index3.html";
//     }
//     timeLeft--;
//  }

//  clockTick = setInterval (startTimer, 90000);
//  startTimer();
