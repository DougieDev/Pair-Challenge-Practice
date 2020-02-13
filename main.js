var firstList = document.querySelector(".first-list");
var secondList = document.querySelector(".second-list");
var thirdList = document.querySelector(".third-list");
var fourthList = document.querySelector(".fourth-list");
var main = document.getElementsByTagName('main')[0];
var nav = document.getElementsByTagName('nav');

// document.addEventListener('click', clickHandler);
//
// function clickHandler(event) {
//   if (event.target === firstList) {
//     main.innerHTML = `<h2>Share Udemy with Friends!</h2>`
//     console.log(event.target);
//   } else if (event.target.classList.contains('secondList')) {
//     main.innerHTML = `<h2>Share Udemy with Friends!</h2>`
//     console.log(event.target);
// } else if (event.target.classList.contains('thirdList')) {
//   main.innerHTML = `<h2>Share Udemy with Friends!</h2>`
//   console.log(event.target);
// } else if (event.target.classList.contains('fourthList')) {
//   main.innerHTML = `<h2>Share Udemy with Friends!</h2>`
//   console.log(event.target);
// }
// }

firstList.addEventListener('click', something);
secondList.addEventListener('click', something1);
thirdList.addEventListener('click', something2);
fourthList.addEventListener('click', something3);

function something() {
  main.innerHTML = `<h2>Share Udemy with Friends!</h2>`
}

function something1() {
  main.innerHTML = `<h2>second</h2>`
}

function something2() {
  main.innerHTML = `<h2>third</h2>`
}

function something3() {
  main.innerHTML = `<h2>fourth</h2>`
}
