var firstList = document.querySelector(".first-list");
var secondList = document.querySelector(".second-list");
var thirdList = document.querySelector(".third-list");
var fourthList = document.querySelector(".fourth-list");
var main = document.getElementsByTagName('main')[0];
var nav = document.getElementsByTagName('nav');

document.addEventListener('click', clickHandler);

function clickHandler(event) {
  if (event.target === firstList) {
    main.innerHTML = `<h2>Share Udemy with Friends!</h2>`
    console.log(event.target)
  }
}
