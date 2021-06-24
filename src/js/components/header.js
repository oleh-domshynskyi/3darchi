$(document).ready(function () { 
    if (document.querySelector('.c-main-menu') != null) {
        let btnOpenMenu = document.querySelector('.JS-open-mob-menu');
        let mainMenuContainer = document.querySelector('.JS-main-menu-container');
        let btnCloseMenu = document.querySelector('.JS-close-mob-menu');
        let windowWidth = window.innerWidth;
      
        btnOpenMenu.addEventListener('click', ()=> {
          mainMenuContainer.classList.add('open-menu');
          document.querySelector('body').style.overflow = "hidden";
        });
      
        btnCloseMenu.addEventListener('click', ()=> {
          mainMenuContainer.classList.remove('open-menu');
          document.querySelector('body').style.overflow = "initial";
        });
      
      
        let checkIsOpenMenu = function(windowWidth) { 
          if (windowWidth > 1200) { 
            document.querySelector('body').style.overflow = "initial";
            mainMenuContainer.classList.remove('open-menu');
          } 
        };
        
        checkIsOpenMenu(windowWidth);
      
        window.addEventListener("resize", () => {
          windowWidth = window.innerWidth; 
          checkIsOpenMenu(windowWidth);
        }); 
      }
})