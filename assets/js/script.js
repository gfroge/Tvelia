//slide for mobile
$(document).ready(function () {
    $('.slider__slick-wrap').slick({
        slidesToShow: 3,
        speed: 450,
        easing: 'ease',
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnFocus: false,
        waitForAnimate: false,
        responsive: [
            {
                breakpoint: 600,
                settings:{
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 450,
                settings:{
                    slidesToShow: 1,
                }
            }
        ]
    });
});

window.addEventListener('DOMContentLoaded', (event) => {
    calcHeight();
});

const video = document.querySelector('.intro__picture-frame');
window.addEventListener("resize", calcHeight);
function calcHeight() {
    let screenWidth = document.documentElement.clientWidth;
    if (screenWidth <= 1010) {
        let h = screenWidth / 1.7777;
        video.style.height = `${h}px`;
    }
}

let playEl1 = document.querySelector('.intro__button');
let playEl2 = document.querySelector('.intro__play-text');
let playWrap = document.querySelector('.intro__play');
let playArr = [playEl1, playEl2];
let pic = document.querySelector('.intro__picture--img');
playArr.forEach(element => {
    element.addEventListener('click', function (e) {
        video.classList.toggle('invisible');
        pic.classList.toggle('invisible');
        playWrap.style.cssText = 'opacity:0;pointer-events:none;';
    });
});

//Touch screen?
const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    IOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.IOS() ||
            isMobile.Opera() ||
            isMobile.Windows());
    }
};

if (isMobile.any()) {
    //Show slider after click
    const targetArr = document.getElementsByClassName('places__filter');
    for (let i = 0; i < targetArr.length; i++) {
        targetArr[i].addEventListener('click', function (e) {
            const parent = targetArr[i].parentElement;
            if (parent.classList.contains('places__s-pic')) {
                parent.parentElement.classList.toggle('active');

            }
            else {
                parent.classList.toggle('active');
            }
        });
    }
}
