
function tab() {
    let tabs = document.querySelectorAll('.skills__list'),
        tabsContent = document.querySelectorAll('.tab'),
        tabsParent = document.querySelector('.skills__title');

    function hideTabContent() {

        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove('skills__active');
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('skills__active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('mousemove', function (event) {
        const target = event.target;
        if (target && target.classList.contains('skills__list')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
}
tab();

function navActive() {
    window.addEventListener('scroll', () => {
        let scrollDistance = window.scrollY;

        if (window.innerWidth > 768) {
            document.querySelectorAll('.section').forEach((el, i) => {
                if (el.offsetTop - document.querySelector('.nav__menu').clientHeight <= scrollDistance) {
                    document.querySelectorAll('.nav__menu a').forEach((el) => {
                        if (el.classList.contains('active')) {
                            el.classList.remove('active');
                        }
                    });

                    document.querySelectorAll('.nav__menu li')[i].querySelector('a').classList.add('active');
                }
            });
        }
    });
}
navActive();

function snowScroll() {
    document.querySelectorAll('a[href^="#"').forEach(link => {

        link.addEventListener('click', function (e) {
            e.preventDefault();

            let href = this.getAttribute('href').substring(1);

            const scrollTarget = document.getElementById(href);

            const topOffset = document.querySelector('.header').offsetHeight;
            const elementPosition = scrollTarget.getBoundingClientRect().top;
            const offsetPosition = elementPosition - topOffset;

            window.scrollBy({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });
    });
}
snowScroll();
