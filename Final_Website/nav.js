const navSlide= () => {
  const burger=document.querySelector(".burger");
  const nav=document.querySelector(".nav-links");
  const navLinks=document.querySelectorAll(".nav-links li");


  burger.addEventListener("click",()=>
      {
        //toggle nav
        nav.classList.toggle("nav-active");

        //animate navLinks
        navLinks.forEach((link,index)=>
        {

              if(link.style.animation)
              {
                link.style.animation="";
              }
              else {
                link.style.animation= `navLinkFade 2s ease forwards 0.25s`;
              }

        });
      });



}

navSlide();
