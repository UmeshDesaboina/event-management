let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");

menu.onclick = () =>{
    menu.classliist.toggle("fa-times");
    navbar.classList.toggle("active");

}

window.onscroll = () =>{
    menu.classliist.remove("fa-times");
    navbar.classList.remove("active");
    
}

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true,
    },
   loop:true,
   autoplay:{
    delay: 3000,
    disableonInteraction:false,
   }
  });



  let themeToggler = document.querySelector('.theme-toggler');
let toggleBtn = document.querySelector('.toggle-Btn');

toggleBtn.onclick = () =>{
    themeToggler.classList.toggle('active');
}

document.querySelectorAll('.theme-toggler .theme-btn').forEach(btn =>{

    btn.onclick = () =>{
        let color = btn.computedStyleMap.background;
        document.querySelector(':root').computedStyleMap.setProperty('--main-color',color);
    }
})