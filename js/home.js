//Loader Animation
// window.addEventListener("load", function () {
//     const pageLoader = document.getElementById("page-loader");
//     const content = document.getElementById("content");

//     setTimeout(() => {
//         pageLoader.style.opacity = "0";
//         pageLoader.style.transition = "opacity 0.5s ease";
//         content.style.opacity = "1";

//         setTimeout(() => {
//             pageLoader.style.display = "none";
//         }, 500);
//     }, 1100);
// });

//CCP TEAM CAROUSEL
var swiper = new Swiper(".teamswiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    centeredSlides: false,
    slidesPerGroupSkip: 1,
    grabCursor: true,
    loop: false,
    keyboard: {
        enabled: true,
    },
    breakpoints: {
        1100: {
            slidesPerView: 2,
            slidesPerGroup: 1,
        },
    },
    scrollbar: {
        el: ".swiper-scrollbar",
    },
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
});



//Disable the "Home" text when the screen is 340px or smaller
function toggleMerchText() {
    const merchText = document.getElementById("home-text");
    if (window.innerWidth <= 340) {
        merchText.style.display = "none";
    } else {
        merchText.style.display = "inline";
    }
}

// Run on page load and when resizing
window.addEventListener("load", toggleMerchText);
window.addEventListener("resize", toggleMerchText);


//HamBurger Menu animation
document.getElementById("menu-btn").addEventListener("click", function () {
    this.classList.toggle("active");
});


//Open mobile/tablet menu
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
    const isHidden = mobileMenu.classList.contains("max-h-0");

    mobileMenu.classList.toggle("max-h-0", !isHidden);
    mobileMenu.classList.toggle("opacity-0", !isHidden);
    mobileMenu.classList.toggle("-translate-y-2", !isHidden);

    mobileMenu.classList.toggle("max-h-[400px]", isHidden);
    mobileMenu.classList.toggle("opacity-100", isHidden);
    mobileMenu.classList.toggle("translate-y-0", isHidden);
});


// Back to Top Button
document.addEventListener('DOMContentLoaded', function () {
    const backToTopButton = document.getElementById('backToTop');

    if (!backToTopButton) {
        console.error("Back to Top button not found!");
        return;
    }

    let scrollTimeout;
    let isVisible = false;

    // Show or hide button based on scroll
    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            if (!isVisible) {
                backToTopButton.classList.remove('opacity-0', 'pointer-events-none');
                backToTopButton.classList.add('opacity-100', 'pointer-events-auto');
                isVisible = true;
            }

            clearTimeout(scrollTimeout);

            // Hide after 3 seconds of inactivity
            scrollTimeout = setTimeout(() => {
                backToTopButton.classList.remove('opacity-100', 'pointer-events-auto');
                backToTopButton.classList.add('opacity-0', 'pointer-events-none');
                isVisible = false;
            }, 3000);
        } else {
            if (isVisible) {
                clearTimeout(scrollTimeout);
                backToTopButton.classList.remove('opacity-100', 'pointer-events-auto');
                backToTopButton.classList.add('opacity-0', 'pointer-events-none');
                isVisible = false;
            }
        }
    });

    // Smooth scroll to top when clicked
    backToTopButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});












// Language Mega Menu
document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('languageToggle');
    const menu = document.getElementById('languageMenu');
    const arrow = document.getElementById('dropdownArrow');

    toggleButton.addEventListener('click', function () {
        const isHidden = menu.classList.contains('hidden');

        if (isHidden) {
            menu.classList.remove('hidden', 'opacity-0', 'translate-y-1');
            menu.classList.add('opacity-100', 'translate-y-0');
            arrow.classList.add('rotate-180'); // Rotate arrow
        } else {
            menu.classList.add('opacity-0', 'translate-y-2');
            menu.classList.remove('opacity-100', 'translate-y-0');

            setTimeout(() => {
                menu.classList.add('hidden'); // Hide after transition
            }, 200);

            arrow.classList.remove('rotate-180');
        }
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (event) {
        if (!toggleButton.contains(event.target) && !menu.contains(event
            .target)) {
            menu.classList.add('opacity-0', 'translate-y-2');
            menu.classList.remove('opacity-100', 'translate-y-0');

            setTimeout(() => {
                menu.classList.add('hidden');
            }, 200);

            arrow.classList.remove('rotate-180');
        }
    });
});
