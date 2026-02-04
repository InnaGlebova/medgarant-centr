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
/* sliders */
// const introSliderCheck = document.querySelectorAll('.intro');
// ['resize', 'load'].forEach((event) => {
//     window.addEventListener(event, function () {

//         if (introSliderCheck.length > 0) {
//             introSliderCheck.forEach((slider) => {
//                 if (slider.querySelector('.intro-swiper-js')) {

//                     if (window.innerWidth > 1023) {
//                         const sliderIntro = slider.querySelector('.intro-swiper-js');
//                         const sliderWrapper = slider.querySelector('.intro-swiper-wrapper-js');
//                         const introSlides = slider.querySelectorAll('.intro-swiper-slide-js');

//                         sliderIntro.classList.add('swiper');
//                         sliderWrapper.classList.add('swiper-wrapper');
//                         introSlides.forEach((slide) => {
//                             slide.classList.add('swiper-slide');
//                         });

//                         var swiperintro = new Swiper(slider.querySelector('.swiper'), {
//                             direction: 'horizontal',
//                             grabCursor: true,
//                             pagination: {
//                                 el: slider.querySelector('.intro__pagination'),
//                                 type: 'bullets',
//                                 clickable: true,
//                             },
//                             slidesPerView: 1,
//                             effect: "creative",
//                             creativeEffect: {
//                                 prev: {
//                                     translate: ["-20%", 0, -1],
//                                 },
//                                 next: {
//                                     translate: ["100%", 0, 0],
//                                 },
//                             },


//                         });
//                     }
//                     else {


//                         const sliderIntro = slider.querySelector('.intro-swiper-js');
//                         const sliderWrapper = slider.querySelector('.intro-swiper-wrapper-js');
//                         const introSlides = slider.querySelectorAll('.intro-swiper-slide-js');
//                         sliderIntro.classList.remove('swiper');
//                         sliderWrapper.classList.remove('swiper-wrapper');

//                         const deleteItems = sliderIntro.querySelectorAll('.swiper-notification');
//                         if (deleteItems.length > 0) {
//                             deleteItems.forEach(elem => {
//                                 elem.remove();
//                             })
//                         }
//                         introSlides.forEach((slide) => {
//                             slide.removeAttribute("style");
//                         });
//                     }

//                 }
//             });
//         }

//     });
// });


const introSliderCheck = document.querySelectorAll('.intro');
if (introSliderCheck.length > 0) {
    introSliderCheck.forEach((slider) => {
        const swiperIntro = new Swiper(slider.querySelector('.swiper'), {
            direction: 'horizontal',
            pagination: {
                el: slider.querySelector('.intro__pagination'),
                type: 'bullets',
                clickable: true,
            },
            effect: "slide",
            slidesPerView: 1,
        });
    })
}

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
            spaceBetween: 22,
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

const advantagesSliderCheck = document.querySelectorAll('.advantages');
if (advantagesSliderCheck.length > 0) {
    advantagesSliderCheck.forEach((slider) => {
        const swiperAdvantages = new Swiper(slider.querySelector('.swiper'), {
            direction: 'horizontal',
            pagination: {
                el: slider.querySelector('.advantages__pagination'),
                type: 'bullets',
                clickable: true,
            },
            effect: "slide",
            slidesPerView: 1.3,
            spaceBetween: 16,
            breakpoints: {
                1400: {
                    slidesPerView: 5,
                    spaceBetween: 24,
                },
                1150: {
                    slidesPerView: 4,
                    spaceBetween: 24,
                },
                900: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                },
                550: {
                    slidesPerView: 2,
                    spaceBetween: 16,
                },

            }
        });
    })
}


const garantSliderCheck = document.querySelectorAll('.garant');
if (garantSliderCheck.length > 0) {
    garantSliderCheck.forEach((slider) => {
        const swiperGarant = new Swiper(slider.querySelector('.swiper'), {
            direction: 'horizontal',
            pagination: {
                el: slider.querySelector('.garant__pagination'),
                type: 'bullets',
                clickable: true,
            },
            effect: "slide",
            slidesPerView: 1.3,
            spaceBetween: 16,
            breakpoints: {
                1400: {
                    slidesPerView: 5,
                    spaceBetween: 24,
                },
                1150: {
                    slidesPerView: 4,
                    spaceBetween: 24,
                },
                900: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                },
                550: {
                    slidesPerView: 2,
                    spaceBetween: 16,
                },

            }
        });
    })
}


const howSliderCheck = document.querySelectorAll('.how');
if (howSliderCheck.length > 0) {
    howSliderCheck.forEach((slider) => {
        const swiperHow = new Swiper(slider.querySelector('.swiper'), {
            direction: 'horizontal',
            pagination: {
                el: slider.querySelector('.how__pagination'),
                type: 'bullets',
                clickable: true,
            },
            spaceBetween: 24,
            effect: "slide",
            slidesPerView: 1,
            grid: {
                rows: 1,
                fill: "row"
            },
            breakpoints: {
                600: {
                    slidesPerView: 2,
                    grid: {
                        rows: 1,
                    }
                },
                1200: {
                    slidesPerView: 3,
                    grid: {
                        rows: 2,
                    }
                }
            }
        });
    })
}

const faqSliderCheck = document.querySelectorAll('.faq');
if (faqSliderCheck.length > 0) {
    faqSliderCheck.forEach((slider) => {
        const swiperFaq = new Swiper(slider.querySelector('.swiper'), {
            direction: 'horizontal',
            pagination: {
                el: slider.querySelector('.faq__pagination'),
                type: 'bullets',
                clickable: true,
            },
            slidesPerView: 2,
            spaceBetween: 20,
            effect: "slide",
            grabCursor: true,

        });
    })
}

const therapySliderCheck = document.querySelectorAll('.therapy');
if (therapySliderCheck.length > 0) {
    therapySliderCheck.forEach((slider) => {
        const swipertherapy = new Swiper(slider.querySelector('.swiper'), {
            direction: 'horizontal',
            pagination: {
                el: slider.querySelector('.therapy__pagination'),
                type: 'bullets',
                clickable: true,
            },
            slidesPerView: 1,
            spaceBetween: 24,
            effect: "slide",
            grabCursor: true,
            breakpoints: {
                600: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
            }

        });
    })
}

const stagesSliderCheck = document.querySelectorAll('.stages');
if (stagesSliderCheck.length > 0) {
    stagesSliderCheck.forEach((slider) => {
        const swiperstages = new Swiper(slider.querySelector('.swiper'), {
            direction: 'horizontal',
            pagination: {
                el: slider.querySelector('.stages__pagination'),
                type: 'bullets',
                clickable: true,
            },
            slidesPerView: 1.2,
            spaceBetween: 24,
            effect: "slide",
            grabCursor: true,
            breakpoints: {
                600: {
                    slidesPerView: 2,
                    spaceBetween: 16,
                },
                800: {
                    slidesPerView: 3,
                    spaceBetween: 16,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 24,
                },
                1224: {
                    slidesPerView: 5,
                    spaceBetween: 24,
                },
            }

        });
    })
}




const diplomsSliderCheck = document.querySelectorAll('.diploms');
if (diplomsSliderCheck.length > 0) {
    diplomsSliderCheck.forEach((slider) => {
        const swiperDiploms = new Swiper(slider.querySelector('.swiper'), {
            direction: 'horizontal',
            navigation: {
                nextEl: slider.querySelector('.slider-button_next'),
                prevEl: slider.querySelector('.slider-button_prev'),
            },
            pagination: {
                el: slider.querySelector('.diploms__pagination'),
                type: 'bullets',
                clickable: true,
            },
            slidesPerView: 2,
            spaceBetween: 18,
            effect: "slide",
            grabCursor: true,

        });
    })
}

const gallerySliderCheck = document.querySelectorAll('.gallery');
if (gallerySliderCheck.length > 0) {
    gallerySliderCheck.forEach((slider) => {
        const swiperGallery = new Swiper(slider.querySelector('.swiper'), {
            direction: 'horizontal',
            slidesPerView: "1",
            spaceBetween: 24,
            grabCursor: true,
            pagination: {
                el: slider.querySelector('.gallery__pagination'),
                type: 'bullets',
                clickable: true,
            },
            breakpoints: {
                1024: {
                    slidesPerView: "auto",
                },
                650: {
                    slidesPerView: "2",
                }
            }

        });
    })
}


const doctorsSliderCheck = document.querySelectorAll('.doctors');
if (doctorsSliderCheck.length > 0) {
    doctorsSliderCheck.forEach((slider) => {
        const swiperDoctors = new Swiper(slider.querySelector('.swiper'), {
            direction: 'horizontal',
            pagination: {
                el: slider.querySelector('.doctors__pagination'),
                type: 'bullets',
                clickable: true,
            },
            slidesPerView: 1,
            spaceBetween: 24,
            effect: "slide",
            grabCursor: true,
            breakpoints: {
                650: {
                    slidesPerView: 2,
                },
                1100: {
                    slidesPerView: 3,
                }
            }
        });
    })
}



const reviewsSliderCheck = document.querySelectorAll('.reviews');
if (reviewsSliderCheck.length > 0) {
    reviewsSliderCheck.forEach((slider) => {
        const swiperReviews = new Swiper(slider.querySelector('.swiper'), {
            direction: 'horizontal',
            pagination: {
                el: slider.querySelector('.reviews__pagination'),
                type: 'bullets',
                clickable: true,
            },
            spaceBetween: 16,
            effect: "slide",
            slidesPerView: 1,
            grabCursor: true,
            breakpoints: {
                850: {
                    slidesPerView: 2,
                    spaceBetween: 24,
                },
            }
        });
    })
}

const articlesSliderCheck = document.querySelectorAll('.articles');
if (articlesSliderCheck.length > 0) {
    articlesSliderCheck.forEach((slider) => {
        const swiperArticles = new Swiper(slider.querySelector('.swiper'), {
            direction: 'horizontal',
            pagination: {
                el: slider.querySelector('.articles__pagination'),
                type: 'bullets',
                clickable: true,
            },
            spaceBetween: 16,
            effect: "slide",
            slidesPerView: 1.1,
            grabCursor: true,
            breakpoints: {
                650: {
                    slidesPerView: 2,
                    spaceBetween: 16,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                },
                1400: {
                    slidesPerView: 4,
                    spaceBetween: 24,
                },
            }
        });
    })
}

const certificatesSliderCheck = document.querySelectorAll('.certificates');
if (certificatesSliderCheck.length > 0) {
    certificatesSliderCheck.forEach((slider) => {
        const swiperCertificates = new Swiper(slider.querySelector('.swiper'), {
            direction: 'horizontal',
            spaceBetween: 16,
            effect: "slide",
            slidesPerView: 1.2,
            loop: true,
            grabCursor: true,
            pagination: {
                el: slider.querySelector('.certificates__pagination'),
                type: 'bullets',
                clickable: true,
            },
            breakpoints: {
                650: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                },
                360: {
                    slidesPerView: 2,
                    spaceBetween: 16,
                }
            }
        });
    })
}

const textDocLicSliderCheck = document.querySelectorAll('.text-doc-lic');
if (textDocLicSliderCheck.length > 0) {
    textDocLicSliderCheck.forEach((slider) => {
        const swiperTextDocLic = new Swiper(slider.querySelector('.swiper'), {
            direction: 'horizontal',
            spaceBetween: 5,
            effect: "slide",
            slidesPerView: 7,
            loop: true,
            grabCursor: true,
            pagination: {
                el: slider.querySelector('.text-doc-lic__pagination'),
                type: 'bullets',
                clickable: true,
            },
        });
    })
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

                    if (el.classList.contains('doctor__btn-js')) {
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
        setTimeout(() => {
            reviewsHide();
            refreshShowMoreAll();
        }, 50);
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