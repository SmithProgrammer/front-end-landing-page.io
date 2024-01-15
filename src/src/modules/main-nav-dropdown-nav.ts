 export default function dropdown_menu(){
 
let headerNav: HTMLElement | null = document.querySelector('.site-header__top-nav-list');
let liElements: NodeListOf<HTMLLIElement> | null = headerNav?.querySelectorAll('li');

document.addEventListener('click', (event) => {
    if (liElements) {
        liElements.forEach((liItem: HTMLLIElement) => {
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
                    }
                });

                if (nestedUl) {
                    if (nestedUl.style.display === 'block') {
                        nestedUl.style.display = 'none';
                    } else {
                        nestedUl.style.display = 'block';
                    }
                }
            });
        }

        if (doubleNestedUl) {
            let doubleChevron: HTMLElement | null = liItem.querySelector('.open-double-nested-menu');
            if (doubleChevron) {
                doubleChevron.addEventListener('click', (event) => {
                    event.stopPropagation();
                    doubleNestedUl.style.display = doubleNestedUl.style.display === 'block' ? 'none' : 'block';
                });
            }
        }
    });
}

}