// alert("hi")
var textWrapper = document.getElementById('buy-book-header');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
var anime = anime({
    targets: '.buy-book-header .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 500,
    delay: (el, i) => 50 * (i+1)
  })
// anime.timeline({loop: true})
//   .add({
//     targets: '.buy-book-header .letter',
//     opacity: [0,1],
//     easing: "easeInOutQuad",
//     duration: 500,
//     delay: (el, i) => 50 * (i+1)
//   }).add({
//     targets: '.buy-book-header',
//     opacity: 0,
//     duration: 10,
//     easing: "easeOutExpo",
//     delay: 200
//   });