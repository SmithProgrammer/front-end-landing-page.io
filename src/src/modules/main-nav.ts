export function openNav () {

  const navOpenButton = document.querySelector('.nav-open-button') as HTMLElement;
  const mainNav = document.querySelector('.main-nav') as HTMLElement;
  const navLinks = mainNav.querySelectorAll('a');
  const overlay = document.querySelector('.overlay') as HTMLElement;

  let isNavOpen = false;
  let touchStartX = 0;
  let touchEndX = 0;
  let isSwiping = false;

  navOpenButton.addEventListener('click', function() {
    toggleNav();
  });

  for (const link of navLinks) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      
      if (isNavOpen) {
        if(event.target == 'A'){
          closeNav();
          window.location.href = link.href;
        } 

      }
    });
  }

  window.addEventListener('resize', function() {
    if (!isNavOpen) return;
    
    if (window.innerWidth < 1028) {
      openNav();
      overlay.style.display = 'block';
    } else {
      closeNav();
      overlay.style.display = 'none';
    }


  });

  document.addEventListener('touchstart', function(event) {
    touchStartX = event.touches[0].clientX;
    isSwiping = false;
  });

  document.addEventListener('touchmove', function(event) {
    touchEndX = event.touches[0].clientX;
    isSwiping = true;
  });

  document.addEventListener('touchend', function() {
    if (!isSwiping) return;

    const swipeDistance = touchEndX - touchStartX;

    if (swipeDistance > 50) {
      openNav();
    } else if (swipeDistance < -50) {
      closeNav();
    }

    isSwiping = false;
  });

  document.addEventListener('touchstart', function(event) {
    const target = event.target as HTMLElement;
    
    if (!mainNav.contains(target) && !navOpenButton.contains(target)) {
      closeNav();
    }
  });

  function toggleNav() {
    if (isNavOpen) {
      closeNav();
    } else {
      openNav();
    }
  }

  function openNav() {
    if (window.innerWidth < 1028) {
      mainNav.style.marginLeft = '0';
      overlay.style.display = 'block';
      navOpenButton.style.opacity = '0';
      isNavOpen = true;
    }
  }

  function closeNav() {
    if (window.innerWidth < 1028) {
      mainNav.style.marginLeft = '';
      overlay.style.display = 'none';
      navOpenButton.style.opacity = '1';
      isNavOpen = false;
    }
  }
}

export function mob_dropdown(){
  console.log('1111');
  let headerNav: HTMLElement | null = document.querySelector('.mob-site-header__top-nav-list');
  let liElements: NodeListOf<HTMLLIElement> | null = headerNav?.querySelectorAll('li');

  document.addEventListener('click', (event) => {

        if (headerNav && !headerNav.contains(event.target as Node)) {
            liElements?.forEach((liItem: HTMLLIElement) => {
                let nestedUl: HTMLElement | null = liItem.querySelector('ul');
                if (nestedUl) {
                    nestedUl.style.display = 'none';
                }
            });
        }
    });

if (liElements) {
    liElements.forEach((liItem: HTMLLIElement) => {
        let chevron: HTMLElement | null = liItem.querySelector('.open-nested-menu');
        let nestedUl: HTMLElement | null = liItem.querySelector('ul');
        let doubleNestedUl: HTMLElement | null = liItem.querySelector('.double-nested-menu');

        if (chevron) {
            chevron.addEventListener('click', (event) => {
                event.stopPropagation();

                headerNav.querySelectorAll('.double-nested-menu').forEach((double: HTMLLIElement) => {
                    if (double !== doubleNestedUl) {
                        double.style.display = "none";
                      // double.style.left = '0';
                      // double.style.right = '0';

                    }
                });

                if (nestedUl) {
                    if (nestedUl.style.display === 'flex') {
                       nestedUl.style.display = 'none';
                      // nestedUl.style.left = '0';
                      // nestedUl.style.right = '0';


                    } else {
                     nestedUl.style.display = 'flex';
                      nestedUl.style.left = 'auto';
                       nestedUl.style.right = '-200px';
                    }
                }
            });
        }

        if (doubleNestedUl) {
            let doubleChevron: HTMLElement | null = liItem.querySelector('.open-double-nested-menu');
            if (doubleChevron) {
                doubleChevron.addEventListener('click', (event) => {
                    event.stopPropagation();
                    if(event.target == 'A'){
                        doubleNestedUl.style.display = doubleNestedUl.style.display === 'flex' ? 'none' : 'flex';
                    }
                    
                });
            }
        }
    });
}
}

