/* Scroll section */
let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () =>{
  sections.forEach(sec => {
    let top = window.scrollY
    let offset = sec.offsetTop - 150 // offsetTop: Retorna la distancia del elemento actual respecto al borde superior del nodo
    let height = sec.offsetHeight // offsetHeight: Devuelve el alto de un elemento
    let id = sec.getAttribute('id')

    if(top >= offset && top < offset + height){
      // Active Navbar Links
      navLinks.forEach(links => {
        links.classList.remove('active')
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
      })
      // Active section for animation scroll
      sec.classList.add('show-animate')
    }
    // For repeat on scroll
    else{
      sec.classList.remove('show-animate')
    }
  })
  // Header BackGround
  let header = document.querySelector('header')
  header.classList.toggle('bg', window.scrollY > 100)

  // Remove toggle icon and navbar when click navbar links (scroll)
  menuIcon.classList.remove('bx-x')
  navbar.classList.remove('active')

  // Animation footer on scroll
  let footer = document.querySelector('footer')
  footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight)
}

// Toggle Icon Navbar
let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x')
  navbar.classList.toggle('active')
}

// Skills icons animation
let skillsIcons = document.querySelectorAll('.skill i')

skillsIcons.forEach(icon => {
  icon.addEventListener("mouseover", function(){
    icon.classList.add('bx-tada')

    let milliseconds = 1500;

    setTimeout(function() {
      icon.classList.remove('bx-tada')
    }, milliseconds);
    })
})