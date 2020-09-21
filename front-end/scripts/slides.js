var productContainer = document.querySelector(".slides")

fetch (`http://localhost:8000/products`)
.then (response => {
    return response.json()
})
.then (data => {
  var imgs = []
  for(i = 0; imgs.length < 3; i++) { 
    var x = Math.floor(Math.random() * data.length)
    if (!imgs.includes(x)) {
      productContainer.innerHTML += `<div class="slide"><img class="slide[i]" src="${data[x].img}" alt="Image not found"></div>`
      imgs.push(x)
    }
  }
});

//slideshow button functionality *******************************************

var slideIndex = 1;
setTimeout(showDivs,50,);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slide");
  if (n > x.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = x.length
  };
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";

};