const side = document.querySelector(".side-menu")
const overlay = document.querySelector(".overlay")
const burger = document.querySelector(".burger")
const closeIcon = document.querySelector(".close-icon")
const menuItems = document.querySelectorAll(".menuLink")

menuItems.forEach(menuItem => {
  menuItem.addEventListener("click", toggleHamburger)
})

burger.addEventListener("click", toggleHamburger)
closeIcon.addEventListener("click", toggleHamburger)
overlay.addEventListener("click", toggleHamburger)

function toggleHamburger() {
  overlay.classList.toggle("showOverlay")
  side.classList.toggle("showNav")
}



const swiper = new Swiper('.store-carousel', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const coloredFont = document.querySelector('.colored-font')

swiper.on('activeIndexChange', function () {

  if (this.activeIndex === 0) {
    coloredFont.style.color = '#fdbb04'
  }


  if (this.activeIndex === 1) {
    coloredFont.style.color = '#000000'
  }

  if (this.activeIndex === 2) {
    coloredFont.style.color = '#D2B293'
  }

  if (this.activeIndex === 3) {
    coloredFont.style.color = '#8C2753'
  }


  if (this.activeIndex === 4) {
    coloredFont.style.color = '#ECDBB5'
  }

  if (this.activeIndex === 5) {
    coloredFont.style.color = '#090909'
  }

})




// let modalDetails = document.querySelector(".modal-details")
// let btnDetails = document.querySelector(".btn-details")
// let closeModal = document.getElementsByClassName("close-modal")[0];





// btnDetails.onclick = function() {
//   modalDetails.style.display = "block";
// }

// closeModal.onclick = function() {
//   modalDetails.style.display = "none";
// }

// window.onclick = function(e) {
//   if (e.target == modalDetails) {
//     modalDetails.style.display = "none";
//   }
// }



// let modalNutrients = document.querySelector(".modal-nutrients")
// let btnNutrients = document.querySelector(".btn-nutrients")
// let closeModal2 = document.getElementsByClassName("close-modal2")[0];

// btnNutrients.onclick = function() {
//   modalNutrients.style.display = "block";
// }

// closeModal2.onclick = function() {
//   modalNutrients.style.display = "none";
// }


// window.addEventListener("click", function(e) {
//   if (e.target == modalNutrients) {
//     modalNutrients.style.display = "none";
//   }
// })















