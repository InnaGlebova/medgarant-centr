const scrollTop = document.querySelector(".scroll-top");

if (scrollTop) {
    function toggleScrollTopButton() {
        if (window.scrollY > 600) {
            scrollTop.style.opacity = "1";
            scrollTop.style.pointerEvents = "auto";
        } else {
            scrollTop.style.opacity = "0";
            scrollTop.style.pointerEvents = "none";
        }
    }

    toggleScrollTopButton();
    window.addEventListener("scroll", toggleScrollTopButton);

    scrollTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}


let scrollWidthFunc = () => {
    let scrollWidth = window.innerWidth - document.body.clientWidth;
    document.querySelector('html').style.paddingRight = scrollWidth + 'px';
    document.querySelector('header').style.paddingRight = scrollWidth + 'px';

}

const burgerMenu = document.querySelector('.header-burger-js');
if (burgerMenu) {
    const headerMobile = document.querySelector('.header__wrapper-js');
    const svg = burgerMenu.querySelector('svg');
    const headerTop = document.querySelector('.header__center');
    const headerMobileItem = document.querySelector('.header__mobile');
    const headerSticky = document.querySelector('.header__sticky');

    burgerMenu.addEventListener("click", () => {
        if (headerMobile.classList.contains("active")) {
            headerMobile.removeAttribute('style');
        }
        headerMobile.classList.toggle("active");
        burgerMenu.classList.toggle("active");

        if (svg) {
            svg.classList.toggle("active");
        }

        document.querySelector('body').classList.toggle('burger-lock');

        if (headerSticky) {
            headerSticky.classList.toggle("active");
        }
    });
}
function counterSearch(wrapper) {

}
const headerPlashkaBtn = document.querySelector('.header__plashka-close-js');
if (headerPlashkaBtn) {
    headerPlashkaBtn.addEventListener('click', () => {
        headerPlashkaBtn.closest('.header__plashka').classList.add('hide');
    })
}
const counterStocks = document.querySelector('.stock-date-js');
const currentCounterStocks = document.querySelector('.stock-future-js');
if (counterStocks && currentCounterStocks) {
    function timeStocks(countDownDate, intervalName) {
        let now = new Date().getTime();
        let distance = countDownDate - now;
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
        counterStocks.innerHTML = days + "д: " + hours + "ч: " +
            minutes + " мин: " + seconds + " сек ";
        if (intervalName) {
            if (distance < 0) {
                clearInterval(intervalName);
                document.querySelector(".stock-date-js").innerHTML = "Завершена";
            }
        }
    }
    let date = new Date();
    date.setDate(date.getDate() + 5);
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const monthNamesRus = ["января", "февраля", "марта", "апреля", "мая", "июня",
        "июля", "августа", "сентября", "октября", "ноября", "декабря"
    ];
    let monthNumber = date.getMonth();
    const month = monthNames[monthNumber];
    currentCounterStocks.innerHTML = date.getDate() + ' ' + monthNamesRus[monthNumber];
    const countDownDate = new Date(month + ' ' + date.getDate() + ', ' + date.getFullYear() + ' 00:00:00').getTime();
    timeStocks(countDownDate, '');
    const x = setInterval(function () {
        timeStocks(countDownDate, x);
    }, 1000);

}

const headerMenus = document.querySelectorAll('.header-menu-js');
if (headerMenus.length > 0) {
    const allBtns = document.querySelectorAll('.header-menu-btn-js');
    const allItems = document.querySelectorAll('.header-menu-item-js');
    headerMenus.forEach(element => {
        const btn = element.querySelector('.header-menu-btn-js');
        const item = element.querySelector('.header-menu-item-js');
        btn.addEventListener('click', () => {
            if (btn.classList.contains('active')) {
                btn.classList.remove('active');
                item.classList.remove('active');
                if (btn.querySelector('svg')) {
                    btn.querySelector('svg').classList.remove('active');
                }
                document.querySelector('body').classList.remove('menu-lock');
                document.querySelector('html').removeAttribute('style');
                document.querySelector('header').removeAttribute('style');
            }
            else {
                allBtns.forEach(elem => {
                    elem.classList.remove('active');
                    if (elem.querySelector('svg')) {
                        elem.querySelector('svg').classList.remove('active');
                    }
                })
                allItems.forEach(elem => {
                    elem.classList.remove('active');
                })
                btn.classList.add('active');
                item.classList.add('active');
                if (btn.querySelector('svg')) {
                    btn.querySelector('svg').classList.add('active');
                }
                scrollWidthFunc();
                document.querySelector('body').classList.add('menu-lock');

            }
        })
    });
}


/* Mask phone */
[].forEach.call(document.querySelectorAll('input[type=tel]'), function (input) {
    let keyCode;
    function mask(event) {
        event.keyCode && (keyCode = event.keyCode);
        let pos = this.selectionStart;
        if (pos < 3) event.preventDefault();
        let matrix = "+7 (___) ___ ____",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, ""),
            new_value = matrix.replace(/[_\d]/g, function (a) {
                return i < val.length ? val.charAt(i++) || def.charAt(i) : a
            });
        i = new_value.indexOf("_");
        if (i != -1) {
            i < 5 && (i = 3);
            new_value = new_value.slice(0, i)
        }
        let reg = matrix.substr(0, this.value.length).replace(/_+/g,
            function (a) {
                return "\\d{1," + a.length + "}"
            }).replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
        if (event.type == "blur" && this.value.length < 5) this.value = ""
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false)

});
/* End Mask phone */


// Popups

function popupClose(popupActive) {
    popupActive.classList.remove('open');
    setTimeout(() => {
        if (!popupActive.classList.contains('open')) {
            popupActive.classList.remove('active');
        }
    }, 400);
    document.body.classList.remove('lock');
    document.querySelector('html').style.paddingRight = 0;
    document.querySelector('html').classList.remove('lock');
    document.querySelector('header').removeAttribute('style');


}
const popupOpenBtns = document.querySelectorAll('.popup-btn');
const popups = document.querySelectorAll('.popup');
const originalTitlePopup2 = document.querySelector('.original-title').innerHTML;
const closePopupBtns = document.querySelectorAll('.close-popup');
closePopupBtns.forEach(function (el) {
    el.addEventListener('click', function (e) {
        popupClose(e.target.closest('.popup'));
    });
});
popupOpenBtns.forEach(function (el) {
    el.addEventListener('click', function (e) {
        e.preventDefault();
        const path = e.currentTarget.dataset.path;
        const currentPopup = document.querySelector(`[data-target="${path}"]`);
        if (currentPopup) {
            popups.forEach(function (popup) {
                popupClose(popup);
                popup.addEventListener('click', function (e) {
                    if (!e.target.closest('.popup__content')) {
                        popupClose(e.target.closest('.popup'));
                    }
                });
            });
            currentPopup.classList.add('active');
            setTimeout(() => {
                currentPopup.classList.add('open');
            }, 10);
            if (currentPopup.getAttribute('data-target') == 'popup-change') {

                let originaTitle = currentPopup.querySelector('.original-title');
                if (el.classList.contains('change-item__btn')) {

                    if (el.classList.contains('doctors__btn-js')) {
                        let currentItem = el.closest('.change-item');
                        let currentTitile = currentItem.querySelector('.change-item__title');
                        originaTitle.innerHTML = 'Записаться на приём к врачу: ' + currentTitile.innerHTML
                    }
                    else {
                        if (el.classList.contains('change-item__btn_current')) {
                            originaTitle.textContent = el.textContent;
                        }
                        else {
                            let currentItem = el.closest('.change-item');
                            let currentTitile = currentItem.querySelector('.change-item__title');
                            originaTitle.innerHTML = currentTitile.innerHTML
                        }
                    }
                }
                else {
                    originaTitle.innerHTML = originalTitlePopup2;
                }
            }
            scrollWidthFunc();
            document.querySelector('html').classList.add('lock');
        }
    });
});

/* end popups */

/* tabs */
class Tabs {
    container;
    tab_button_class;
    tab_content_class;
    tab_attribute_key;
    tab_attribute_target;
    tab_navigation_next;
    tab_navigation_prev;
    tab_active_name;

    constructor({
        container = ".tabs-container",
        tabs_wrapper_class = ".tabs__wrapper",
        button_class = ".tab",
        content_class = ".tab-content",
        attribute_key = "path",
        attribute_target = "target",
        nav_next = ".tabs__arrow_next",
        nav_prev = ".tabs__arrow_prev",
        name_active = ".tabs__active",
    } = {}) {
        this.container = container;
        this.tabs_wrapper_class = tabs_wrapper_class;
        this.tab_button_class = button_class;
        this.tab_content_class = content_class;
        this.tab_attribute_key = attribute_key;
        this.tab_attribute_target = attribute_target;
        this.tab_navigation_next = nav_next;
        this.tab_navigation_prev = nav_prev;
        this.tab_active_name = name_active;
    }

    initTabs() {
        document.querySelectorAll(this.container).forEach((wrapper) => {
            this.initTabsWrapper(wrapper);
        });
    }

    initTabsWrapper(wrapper) {
        const tabsWrapper = wrapper.querySelector(this.tabs_wrapper_class);
        const tabsButtonList = wrapper.querySelectorAll(this.tab_button_class);
        const tabsContentList = wrapper.querySelectorAll(this.tab_content_class);
        const tabsNavigationNext = wrapper.querySelector(
            this.tab_navigation_next
        );
        const tabsNavigationPrev = wrapper.querySelector(
            this.tab_navigation_prev
        );
        const tabActiveName = wrapper.querySelector(this.tab_active_name);
        const tabsClose = document.querySelectorAll(".tabs__close");
        let currentTab = 0;
        if (tabActiveName) {
            const pElement = tabsButtonList[currentTab].querySelector('p');
            tabActiveName.querySelector(".tabs__active-text").textContent =
                pElement ? pElement.textContent : tabsButtonList[currentTab].textContent;
        }

        for (let index = 0; index < tabsButtonList.length; index++) {
            if (tabsButtonList[index].dataset.start === true) {
                currentTab = index;
            }

            tabsButtonList[index].addEventListener("click", () => {
                if (tabsContentList[index]) {
                    currentTab = index;
                    this.showTabsContent({
                        list_tabs: tabsContentList,
                        list_buttons: tabsButtonList,
                        index: currentTab,
                    });
                    if (tabActiveName) {
                        const pElement = tabsButtonList[index].querySelector('p');
                        tabActiveName.querySelector(".tabs__active-text").textContent =
                            pElement ? pElement.textContent : tabsButtonList[index].textContent;
                        tabActiveName.closest(".tabs").classList.remove("active");
                        document.querySelector("html").classList.remove("lock");
                    }
                }
            });
        }

        this.showTabsContent({
            list_tabs: tabsContentList,
            list_buttons: tabsButtonList,
            index: currentTab,
        });

        if (tabsNavigationNext) {
            tabsNavigationNext.addEventListener("click", () => {
                if (currentTab + 1 < tabsButtonList.length) {
                    currentTab += 1;
                } else {
                    currentTab = 0;
                }

                const tabsWrapperPositionX = tabsWrapper.getBoundingClientRect().left;
                const currentTabPositionX =
                    tabsButtonList[currentTab].getBoundingClientRect().left;
                const currentTabPositionXRegardingParent =
                    currentTabPositionX - tabsWrapperPositionX;

                tabsWrapper.scrollBy({
                    left: currentTabPositionXRegardingParent,
                    behavior: "smooth",
                });

                this.showTabsContent({
                    list_tabs: tabsContentList,
                    list_buttons: tabsButtonList,
                    index: currentTab,
                });
            });
        }

        if (tabsNavigationPrev) {
            tabsNavigationPrev.addEventListener("click", () => {
                if (currentTab - 1 >= 0) {
                    currentTab -= 1;
                } else {
                    currentTab = tabsButtonList.length - 1;
                }

                const tabsWrapperPositionX = tabsWrapper.getBoundingClientRect().left;
                const currentTabPositionX =
                    tabsButtonList[currentTab].getBoundingClientRect().left;
                const currentTabPositionXRegardingParent =
                    currentTabPositionX - tabsWrapperPositionX;

                tabsWrapper.scrollBy({
                    left: currentTabPositionXRegardingParent,
                    behavior: "smooth",
                });

                this.showTabsContent({
                    list_tabs: tabsContentList,
                    list_buttons: tabsButtonList,
                    index: currentTab,
                });
            });
        }

        if (tabActiveName) {
            tabActiveName.addEventListener("click", function () {
                tabActiveName.closest(".tabs").classList.add("active");
                document.querySelector("html").classList.add("lock");
            });
        }

        if (tabsClose.length > 0) {
            for (let i = 0; i < tabsClose.length; i += 1) {
                const tabClose = tabsClose[i];
                tabClose.addEventListener("click", function () {
                    tabClose.closest(".tabs").classList.remove("active");
                    document.querySelector("html").classList.remove("lock");
                });
            }
        }

        tabsWrapper
            .closest(".tabs__container")
            .addEventListener("click", function (e) {
                if (!e.target.closest(".tabs__wrapper")) {
                    tabsWrapper.closest(".tabs").classList.remove("active");
                    document.querySelector("html").classList.add("lock");
                }
            });
    }

    hideTabsContent({ list_tabs, list_buttons }) {
        list_buttons.forEach((el) => {
            el.classList.remove("active");
        });
        list_tabs.forEach((el) => {
            el.classList.remove("active");
        });
    }

    showTabsContent({ list_tabs, list_buttons, index }) {
        this.hideTabsContent({
            list_tabs,
            list_buttons,
        });

        if (list_tabs[index]) {
            list_tabs[index].classList.add("active");
        }

        if (list_buttons[index]) {
            list_buttons[index].classList.add("active");
        }

        // Обновляем контент при смене вкладки
        // setTimeout(() => {
        //     reviewsHide();
        //     refreshShowMoreAll();
        // }, 50);
    }
}
new Tabs().initTabs();
/* End tabs */
// animation 
const animationItems = document.querySelectorAll('.animation-item');
if (animationItems.length > 0) {
    function onEntry(e) {
        e.forEach(e => {
            e.isIntersecting && e.target.classList.add("animation-active")
        }
        )
    }
    let options = {
        threshold: [.5]
    }, observer = new IntersectionObserver(onEntry, options)
    for (let e of animationItems)
        observer.observe(e);
}
// end animation
Fancybox.bind("[data-fancybox]", {
    // Your custom options
});

// sliders

const stocksSliderCheck = document.querySelectorAll('.stocks');
if (stocksSliderCheck.length > 0) {
    stocksSliderCheck.forEach((slider) => {
        const swiperStocks = new Swiper(slider.querySelector('.swiper'), {
            direction: 'horizontal',
            navigation: {
                nextEl: slider.querySelector('.stocks-swiper__button-next'),
                prevEl: slider.querySelector('.stocks-swiper__button-prev'),
            },
            effect: "slide",
            slidesPerView: 1,
            spaceBetween: 20,
            breakpoints: {
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
                1300: {
                    slidesPerView: 4,
                },

            }
        });
    })
}

const servicesSliderCheck = document.querySelectorAll('.services');
if (servicesSliderCheck.length > 0) {
    servicesSliderCheck.forEach((slider) => {
        const swiperservices = new Swiper(slider.querySelector('.swiper'), {
            direction: 'horizontal',
            navigation: {
                nextEl: slider.querySelector('.services-swiper__button-next'),
                prevEl: slider.querySelector('.services-swiper__button-prev'),
            },
            effect: "slide",
            slidesPerView: 1,
            spaceBetween: 20,
            breakpoints: {
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
                1300: {
                    slidesPerView: 4,
                },

            }
        });
    })
}

const doctorsSliderCheck = document.querySelectorAll('.doctors');
if (doctorsSliderCheck.length > 0) {
    doctorsSliderCheck.forEach((slider) => {
        const swiperdoctors = new Swiper(slider.querySelector('.swiper'), {
            direction: 'horizontal',
            loop: true,
            navigation: {
                nextEl: slider.querySelector('.doctors-swiper__button-next'),
                prevEl: slider.querySelector('.doctors-swiper__button-prev'),
            },
            pagination: {
                el: slider.querySelector('.doctors__pagination'),
                type: 'bullets',
                clickable: true,
            },
            effect: "slide",
            slidesPerView: 1.2,
            spaceBetween: 20,
            breakpoints: {
                500: {
                    slidesPerView: 1.2,
                },
                840: {
                    slidesPerView: 2,
                },
                1100: {
                    slidesPerView: 3,
                },
                1500: {
                    slidesPerView: 4,
                },

            }
        });
    })
}

const advantagesSliderCheck = document.querySelectorAll('.advantages');
if (advantagesSliderCheck.length > 0 && window.innerWidth < 1500) {
    advantagesSliderCheck.forEach((slider) => {
        const swiperElement = slider.querySelector('.advantages-swiper.swiper');
        if (swiperElement) {
            const swiperAdvantages = new Swiper(swiperElement, {
                direction: 'horizontal',
                navigation: {
                    nextEl: slider.querySelector('.advantages-swiper__button-next'),
                    prevEl: slider.querySelector('.advantages-swiper__button-prev'),
                },
                effect: "slide",
                slidesPerView: 1,
                spaceBetween: 20,
                breakpoints: {
                    1499: {
                        slidesPerView: 3,
                        spaceBetween: 24,
                    },
                    1100: {
                        slidesPerView: 2,
                        spaceBetween: 24,
                    },
                    700: {
                        slidesPerView: 1,
                        spaceBetween: 24,
                    },
                }
            });
        }
    })
}

const licensesSliderCheck = document.querySelectorAll('.licenses');
if (licensesSliderCheck.length > 0) {
    licensesSliderCheck.forEach((slider) => {
        const swiperlicenses = new Swiper(slider.querySelector('.swiper'), {
            direction: 'horizontal',
            loop: true,
            navigation: {
                nextEl: slider.querySelector('.licenses-swiper__button-next'),
                prevEl: slider.querySelector('.licenses-swiper__button-prev'),
            },
            pagination: {
                el: slider.querySelector('.licenses__pagination'),
                type: 'bullets',
                clickable: true,
            },
            effect: "slide",
            slidesPerView: 1.2,
            spaceBetween: 20,
            breakpoints: {
                500: {
                    slidesPerView: 2,
                },
                700: {
                    slidesPerView: 3,
                },
                1100: {
                    slidesPerView: 4,
                },
                1300: {
                    slidesPerView: 5,
                },
                1500: {
                    slidesPerView: 6,
                },

            }
        });
    })
}




const gallerySliderCheck = document.querySelectorAll('.gallery');
if (gallerySliderCheck.length > 0) {
    gallerySliderCheck.forEach((slider) => {
        const swipergallery = new Swiper(slider.querySelector('.swiper'), {
            direction: 'horizontal',
            loop: true,
            navigation: {
                nextEl: slider.querySelector('.gallery-swiper__button-next'),
                prevEl: slider.querySelector('.gallery-swiper__button-prev'),
            },
            pagination: {
                el: slider.querySelector('.gallery__pagination'),
                type: 'bullets',
                clickable: true,
            },
            effect: "slide",
            slidesPerView: 1.2,
            spaceBetween: 20,
            breakpoints: {
                500: {
                    slidesPerView: 1.2,
                },
                840: {
                    slidesPerView: 2,
                },
                1100: {
                    slidesPerView: 3,
                },
                1500: {
                    slidesPerView: 4,
                },

            }
        });
    })
}

const reviewsSliderCheck = document.querySelectorAll('.reviews');
if (reviewsSliderCheck.length > 0) {
    reviewsSliderCheck.forEach((slider) => {
        const swiperreviews = new Swiper(slider.querySelector('.swiper'), {
            direction: 'horizontal',
            loop: true,
            navigation: {
                nextEl: slider.querySelector('.reviews-swiper__button-next'),
                prevEl: slider.querySelector('.reviews-swiper__button-prev'),
            },
            pagination: {
                el: slider.querySelector('.reviews__pagination'),
                type: 'bullets',
                clickable: true,
            },
            effect: "slide",
            slidesPerView: 1,
            spaceBetween: 20,
            breakpoints: {
                500: {
                    slidesPerView: 1.2,
                },
                840: {
                    slidesPerView: 2,
                },
                1100: {
                    slidesPerView: 3,
                },
            }
        });
    })
}



/* yandex map */
const map = document.querySelectorAll('#map');
if (map.length > 0) {
    function onEntryMap(e) {
        e.forEach(e => {
            e.isIntersecting && loadMap() && initMap();
        })
    }
    let options = {
        threshold: [0.5],
    },
        observer = new IntersectionObserver(onEntryMap, options)
    for (let e of map) observer.observe(e)
}
function loadMap() {
    if (!document.querySelector('[src="https://api-maps.yandex.ru/2.1/?lang=ru_RU"]')) {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU';
        script.onload = initMap;
        document.head.appendChild(script);
    }
}
function initMap() {
    ymaps.ready(function () {
        const myMap = new ymaps.Map('map', {
            center: [47.228163, 39.714641],
            zoom: 18,
            controls: []
        });
        var myPlacemark = new ymaps.Placemark([47.228163, 39.714641],
            {
                balloonContentHeader: "<p class='yandex-city'>Ростов-на-Дону</p>",
                balloonContentBody: "<p class='yandex-clinic'>«Название клиники»</p>",
                hintContent: "Посмотреть Адрес"
            }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/icons/map-marker.svg',
            iconImageSize: [36, 36],
        });

        myMap.geoObjects.add(myPlacemark);
        myMap.behaviors.disable(['scrollZoom']);
    });
}
/* end yandex map */

document.addEventListener("DOMContentLoaded", function () {
    const hideItems = document.querySelectorAll('.hide-items');
    if (hideItems.length > 0) {
        hideItems.forEach((elem) => {
            const hideItem = elem.querySelectorAll('.hide-item');
            const hideTitles = elem.querySelectorAll('.hide-item__title');
            const hideContents = elem.querySelectorAll('.hide-item__content');
            hideItem.forEach((item) => {
                let title = item.querySelector('.hide-item__title');
                let content = item.querySelector('.hide-item__content');
                if (title && content) { // Check if title and content are not null
                    title.addEventListener('click', () => {
                        if (title.classList.contains('active')) {
                            title.classList.remove('active');
                            content.classList.remove('active');
                            content.removeAttribute('style');
                        } else {
                            hideTitles.forEach((element) => {
                                element.classList.remove('active');
                            });
                            hideContents.forEach((element) => {
                                element.classList.remove('active');
                                element.removeAttribute('style');
                            });
                            let height = content.querySelector('.hide-item_max-height').offsetHeight;
                            title.classList.add('active');
                            content.classList.add('active');
                            content.style.maxHeight = height + 'px';
                        }
                    });
                }
            });
        });
    }

    // footer nav panel

    const buttons = document.querySelectorAll('.footer-nav-panel-btn');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const list = this.closest('.nav-column').querySelector('.footer-nav-panel-list');
            const isActive = list.classList.toggle('active');
            this.classList.toggle('active', isActive);
        });
    });

    // end footer nav panel
});

const buttonBadseeDuplicate = document.querySelector('.badseeDuplicate');
if (buttonBadseeDuplicate) {
    buttonBadseeDuplicate.addEventListener('click', () => {
        if (document.getElementById("specialButton")) {
            document.getElementById("specialButton").click();
        }
    })
}



const filters = document.querySelectorAll('.filter-js');
if (filters) {
    filters.forEach(filter => {
        const selects = filter.querySelectorAll('.filter-select-js');
        const items = filter.querySelectorAll('.filter-item-js');
        const counter = filter.querySelector('.filter-counter-js');
        for (let i = 0; i < selects.length; i++) {
            selects[i].addEventListener('change', () => {
                const value = selects[i].value;
                items.forEach(item => {
                    const atribute = item.querySelector(`[data-filterItem-${i}]`);
                    if (atribute && atribute.textContent != '') {
                        if (value != atribute.textContent.trim()) {
                            item.classList.add('hide');
                        }
                        else {
                            let checkedOtherSelect = false;
                            for (let j = 0; j < selects.length; j++) {
                                if ((i != j) && (selects[j].value != 'default')) {
                                    if (item.querySelector(`[data-filterItem-${j}]`)) {
                                        if (!(selects[j].value == item.querySelector(`[data-filterItem-${j}]`).textContent.trim())) {
                                            checkedOtherSelect = true;
                                            break;
                                        }
                                    }
                                }
                            }
                            if (checkedOtherSelect == false) {
                                item.classList.remove('hide');
                            }
                        }
                    }
                    else {
                        item.classList.add('hide');
                    }
                });
                if (counter) {
                    const counterItems = filter.querySelectorAll('.filter-item-js:not(.hide)');
                    counter.innerHTML = counterItems.length
                }
            })
        }
        if (counter) {
            counter.innerHTML = items.length
        }
    });
}

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener('click', function (e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);
        const scrollTarget = document.getElementById(href);

        if (!scrollTarget) {
            return; // Элемент не найден, выходим из функции
        }

        const topOffset = 180;
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

// function search(wrapper) {
//     let inputSearch = wrapper.querySelector(".search-input-js");

//     if (inputSearch) {
//         let filter = inputSearch.value.toUpperCase();
//         let items = wrapper.querySelectorAll(".search-item-js");
//         for (let i = 0; i < items.length; i++) {
//             let name = items[i].querySelector(".search-elem-js");
//             if (name.innerHTML.toUpperCase().indexOf(filter) > -1) {
//                 items[i].removeAttribute('style');
//             } else {
//                 items[i].style.display = "none";
//             }
//         }

//     }
// }
// const searchs = document.querySelectorAll('.search-js');
// if (searchs.length > 0) {
//     searchs.forEach(wrapper => {
//         let inputSearch = wrapper.querySelector(".search-input-js");
//         if (inputSearch) {
//             inputSearch.addEventListener('keyup', () => {
//                 let filter = inputSearch.value.toUpperCase();
//                 let items = wrapper.querySelectorAll(".search-item-js");
//                 for (let i = 0; i < items.length; i++) {
//                     let name = items[i].querySelector(".search-elem-js");
//                     if (name.innerHTML.toUpperCase().indexOf(filter) > -1) {
//                         items[i].removeAttribute('style');
//                     } else {
//                         items[i].style.display = "none";
//                     }
//                 }
//             });
//         }
//     })
// }
// const articlesFilter = document.querySelectorAll('.articles-filter-js');
// if (articlesFilter.length > 0) {
//     articlesFilter.forEach(elem => {
//         const btns = elem.querySelectorAll('.articles-filter-tab-js');
//         const items = elem.querySelectorAll('.articles-filter-item-js');
//         if (elem.querySelector('.counter-js')) {
//             elem.querySelector('.counter-js').innerHTML = items.length;
//         }
//         btns.forEach(btn => {
//             btn.addEventListener('click', () => {
//                 if (!btn.classList.contains('active')) {
//                     btns.forEach(item => {
//                         item.classList.remove('active');
//                     })
//                     btn.classList.add('active');
//                     let a = 0;
//                     items.forEach(element => {
//                         const tags = element.querySelector('.articles-filter-list-js');
//                         if (tags) {
//                             let tagsArray = [];
//                             const tag = tags.querySelectorAll('li');
//                             tag.forEach(item => {
//                                 tagsArray.push(item.textContent.trim());
//                                 return tagsArray;
//                             });
//                             if (tagsArray.indexOf(btn.textContent.trim()) >= 0) {
//                                 element.classList.remove('hide');
//                                 a++;
//                             }
//                             else {
//                                 element.classList.add('hide')
//                             }
//                             return a;
//                         }
//                     })
//                     if (elem.querySelector('.counter-js')) {
//                         elem.querySelector('.counter-js').innerHTML = a;
//                     }
//                 }
//             })
//         })
//     })
// }



// select menu
const optionMenus = document.querySelectorAll(".select-menu");

optionMenus.forEach(optionMenu => {
    const selectBtn = optionMenu.querySelector(".select-btn");
    const options = optionMenu.querySelectorAll(".option");
    const sBtn_text = optionMenu.querySelector(".select-btn__text");

    if (selectBtn) {
        selectBtn.addEventListener("click", () => {
            optionMenu.classList.toggle("active");
        });
    }

    options.forEach((option) => {
        if (option) {
            option.addEventListener("click", () => {
                let selectedOption = option.querySelector(".option-text").innerText;
                sBtn_text.innerText = selectedOption;
                sBtn_text.classList.add("selected");
                optionMenu.classList.remove("active");
            });
        }
    });
});
// select menu end

/* navigation */

const articleNavigation = document.querySelector(".navigation");
if (articleNavigation) {
    const jsScrollBlockList = document.querySelectorAll(
        ".text__content h1, .text__content h2, .text__content h3, .text__content h4, .text__content h5"
    );

    if (jsScrollBlockList.length > 0) {
        for (let i = 0; i < jsScrollBlockList.length; i += 1) {
            const jsScrollBlock = jsScrollBlockList[i];
            const titleBlock = jsScrollBlock.textContent;
            const articleNavigationList =
                document.querySelector(".navigation__list");
            const articleNavigationItem = document.createElement("li");
            const articleNavigationLink = document.createElement("a");
            articleNavigationItem.classList.add("navigation__item");
            if (jsScrollBlock.tagName == "H1") {
                articleNavigationItem.classList.add("title-h1");
            }
            if (jsScrollBlock.tagName == "H2") {
                articleNavigationItem.classList.add("title-h2");
            } else if (jsScrollBlock.tagName == "H3") {
                articleNavigationItem.classList.add("title-h3");
            } else if (jsScrollBlock.tagName == "H4") {
                articleNavigationItem.classList.add("title-h4");
            } else if (jsScrollBlock.tagName == "H5") {
                articleNavigationItem.classList.add("title-h5");
            } else if (jsScrollBlock.tagName == "H6") {
                articleNavigationItem.classList.add("title-h6");
            }
            articleNavigationLink.classList.add("navigation__link");
            jsScrollBlock.setAttribute("id", `${i}`);
            articleNavigationLink.setAttribute("href", `$${i}`);
            articleNavigationLink.textContent = " " + titleBlock;
            articleNavigationItem.append(articleNavigationLink);
            articleNavigationList.append(articleNavigationItem);
        }
        document.querySelectorAll('a[href^="$"').forEach((link) => {
            link.addEventListener("click", function (e) {
                e.preventDefault();
                let href = this.getAttribute("href").substring(1);
                const scrollTarget = document.getElementById(href);
                const topOffset = 280;
                const elementPosition = scrollTarget.getBoundingClientRect().top;
                const offsetPosition = elementPosition - topOffset;
                window.scrollBy({
                    top: offsetPosition,
                    behavior: "smooth",
                });
            });
        });
    } else {
        articleNavigation.querySelector(".navigation").remove();
    }
}

/* end navigation */



const panelItems = document.querySelectorAll('.panels');
if (panelItems.length > 0) {
    panelItems.forEach((elem) => {
        let panelItem = elem.querySelectorAll('.panel-title');
        if (panelItem.length > 0) {
            bodyItem = elem.querySelectorAll('.panel-body');
            panelItem.__proto__.forEach = [].__proto__.forEach;
            let activePanel;

            panelItem.forEach(function (item, i, panelItem) {
                item.addEventListener('click', function (e) {
                    this.classList.add('panel-active');
                    this.nextElementSibling.classList.add('active');
                    if (activePanel) {
                        activePanel.classList.remove('panel-active');
                        activePanel.nextElementSibling.classList.remove('active');
                    }
                    activePanel = (activePanel === this) ? 0 : this;
                });
            });
        }
    })
}

// Поиск

const searchForms = document.querySelectorAll(".search");

searchForms.forEach((form) => {
    const input = form.querySelector(".search__input");
    const results = form.querySelector(".form__wrapper");

    input.addEventListener("input", () => {
        if (input.value.trim() !== "") {
            results.classList.add("active");
        } else {
            results.classList.remove("active");
        }
    });

    document.addEventListener("click", (evt) => {
        if (!form.contains(evt.target)) {
            results.classList.remove("active");
        }
    });
});

// Генерация звезд рейтинга для врачей
function initDoctorsRating() {
    const ratingBlocks = document.querySelectorAll('.raiting-inner[data-rating]');
    
    ratingBlocks.forEach((block) => {
        const rating = parseFloat(block.getAttribute('data-rating'));
        const starsContainer = block.querySelector('.raiting__stars');
        
        if (!starsContainer) return;
        
        // Очищаем контейнер
        starsContainer.innerHTML = '';
        
        // Генерируем 5 звезд
        // Округляем рейтинг: если дробная часть >= 0.5, округляем вверх, иначе вниз
        const fullStars = Math.round(rating);
        
        for (let i = 0; i < 5; i++) {
            const star = document.createElement('span');
            
            if (i < fullStars) {
                star.classList.add('active');
            }
            
            starsContainer.appendChild(star);
        }
    });
}

// Инициализация при загрузке страницы
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDoctorsRating);
} else {
    initDoctorsRating();
}