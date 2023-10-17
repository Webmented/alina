gsap.registerPlugin(ScrollTrigger);

  // On page load animations
  document.addEventListener("DOMContentLoaded", () => {
    gsap.to('[animation="load"]', {
      opacity: 1,
      translateY: 0,  
      duration: 1,
      stagger: 0.2,  
      ease: 'power2.out',
    });
  });

  // Scroll into view animations
  gsap.utils.toArray('[animation="scroll"]').forEach((element) => {
    gsap.fromTo(element, 
      { opacity: 0, translateY: 20 },  
      { 
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          end: 'bottom 20%',
        },
        opacity: 1,
        translateY: 0,  
        duration: 1,
        ease: 'power2.out',
      }
    );
  });
    // Shows the current year in footer
    window.onload = function() {
    const year = new Date().getFullYear();
    document.querySelector('span[show="year"]').textContent = year;
  }



      //Navbar Animation
      let navbar = document.querySelector('.navbar_component');
      let lastScrollTop = 0;
      
      window.addEventListener('scroll', function() {
          let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
          if (scrollTop > lastScrollTop && scrollTop > 50) {
              navbar.classList.add('hide-navbar');
          } else {
              navbar.classList.remove('hide-navbar');
          }
      
          lastScrollTop = scrollTop;
      });
      
