var firstList = document.querySelector(".first-list");
var pageTwo = document.querySelector(".second-list");
var thirdList = document.querySelector(".third-list");
var fourthList = document.querySelector(".fourth-list");
var pageOne = document.querySelector('.page-one');
var pageTwo = document.querySelector('.page-two');
var pageThree = document.querySelector('.page-three');
var pageFour = document.querySelector('.page-four');
var main = document.getElementsByTagName('main')[0];
var nav = document.getElementsByTagName('nav')[0];
var ul = document.getElementsByTagName('ul')[0];


document.addEventListener('click', clickHandler);

function clickHandler(event) {
  if (event.target.classList.contains('first-list')) {
    pageOne.classList.toggle('hidden');
    pageTwo.classList.add('hidden')
    pageThree.classList.add('hidden');
    pageFour.classList.add('hidden');
    console.log(event.target);
  } else if (event.target.classList.contains('second-list')) {
    pageOne.classList.add('hidden');
    pageTwo.classList.toggle('hidden')
    pageThree.classList.add('hidden');
    pageFour.classList.add('hidden');
    console.log(event.target);
  } else if (event.target.classList.contains('third-list')) {
    pageOne.classList.add('hidden');
    pageTwo.classList.add('hidden')
    pageThree.classList.toggle('hidden');
    pageFour.classList.add('hidden');  console.log(event.target);
  } else if (event.target.classList.contains('fourth-list')) {
    pageOne.classList.add('hidden');
    pageTwo.classList.add('hidden')
    pageThree.classList.add('hidden');
    pageFour.classList.toggle('hidden');  console.log(event.target);
}
}

// firstList.addEventListener('click', something);
// pageTwo.addEventListener('click', something1);
// thirdList.addEventListener('click', something2);
// pageFour.addEventListener('click', something3);
//
// function something() {
//   main.innerHTML = `<h2>Share Udemy with Friends!</h2>`
// }
//
// function something1() {
//   main.innerHTML = `<h2>second</h2>`
// }
//
// function something2() {
//   main.innerHTML = `<h2>third</h2>`
// }
//
// function something3() {
//   main.innerHTML = `<h2>fourth</h2>`
// }
