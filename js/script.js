/* Scroll section */
window.onscroll = () =>{
  // Header BackGround
  let header = document.querySelector('header')

  header.classList.toggle('bg', window.scrollY > 100)
}