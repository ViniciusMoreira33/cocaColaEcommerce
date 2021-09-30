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

















