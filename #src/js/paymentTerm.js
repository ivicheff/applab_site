const switcherTerm = document.getElementsByClassName('switcher-1');
const offerTerm = document.getElementsById('term')

// switcherTerm.addEventListener('click', function() {
//   offerTerm.innerHTML =
//     (offerTerm.innerHTML === "&#36 month") ? offerTerm.innerHTML = "&#36 annually" : offerTerm.innerHTML = "&#36 month";
// })


function changeText() {
  offerTerm.innerHTML=('annually')
}