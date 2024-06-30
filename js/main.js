const carData = [
  {
    name: "BMW M340i",
    type: "Sedan",
    price: 53,
    image: "slike/BMW3.png",
    tag: "Besplatno Otkazivanje",
  },
  {
    name: "Mazda 6",
    type: "Sedan",
    price: 27,
    image: "slike/MAZDA.png",
    tag: "Besplatno Otkazivanje",
  },
  {
    name: "Mercedes C Klasa",
    type: "Sedan",
    price: 42,
    image: "slike/MERCEDESC.png",
    tag: "Besplatno Otkazivanje",
  },
  {
    name: "Nissan GTR",
    type: "Sportski",
    price: 60,
    image: "slike/NISSAN.png",
    tag: "Besplatno Otkazivanje",
  },
  {
    name: "Porsche Cayenne",
    type: "SUV",
    price: 40,
    image: "slike/PORSCHE.png",
    tag: "Besplatno Otkazivanje",
  },
  {
    name: "Renault Megane",
    type: "Hatchback",
    price: 23,
    image: "slike/RENAULT.png",
    tag: "Besplatno Otkazivanje",
  },
  {
    name: "Škoda Octavia RS",
    type: "Sedan",
    price: 32,
    image: "slike/SKODA.png",
    tag: "Besplatno Otkazivanje",
  },
  {
    name: "Toyota Corolla GR",
    type: "Hatchback",
    price: 38,
    image: "slike/TOYOTA.png",
    tag: "Besplatno Otkazivanje",
  },
];
const createCarBox = (car) => `
<div class="cars-box">
                <img src="${car.image}" alt="" class="box-img">
                <div class="title-price">
                    <div class="title-data">
                        <h2>${car.name}</h2>
                        <p>${car.type}</p>
                    </div>
                    <h3 class="car-price">${car.price}<span>€/dan</span></h3>
                </div>
                <a href="#" class="book-btn">Rentiraj Auto</a>
                <span class="tag">${car.tag}</span>
            </div>
`;
const carContent = document.querySelector('.cars-content');

carData.forEach((car) =>{
  const carBoxHtml = createCarBox(car);
  carContent.insertAdjacentHTML('beforeend', carBoxHtml);
})
// script.js

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}
