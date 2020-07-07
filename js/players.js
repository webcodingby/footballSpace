'use strict';

const modal = document.querySelector(".modal");
const buttonModal = document.querySelector(".button_modal");
const modalBg = document.querySelector('.modal_bg');
const modalSend = document.querySelector('.modal_send');
const buttonAbout = document.querySelector('.button_about');
const buttonModalPlayer = document.querySelector('.button_modal-player');
const subscribeButton = document.querySelector('.subscribe_button');
const buttonPlay = document.querySelector('.button-play');
const videoBg = document.getElementById("myModal");
const btn = document.getElementById("myBtn");
const btn2 = document.getElementById("myBtn2");
const span = document.getElementsByClassName("close")[0];
const elements = document.getElementsByClassName("match__tab");
const matchTab = document.getElementsByClassName("button_static");
const sliderActive = document.getElementById("slider__active");
const slider = document.getElementsByClassName("slider");
const matchStatic = document.getElementsByClassName("match-static");
const email = document.querySelector("#emal");
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
let rangeAge = document.querySelector('.number_age');
let rangeHeihgt = document.querySelector('.number_height');
let rangeWeight = document.querySelector('.number_weight');
let rangeNumAge = document.querySelector('.range-num_age');
let rangeNumWeight = document.querySelector('.range-num_weight');
let rangeNumHeihgt = document.querySelector('.range-num_height');


// Валидация E-mail 

function validate(form_id,email) {
    let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    let address = document.forms[form_id].elements[email].value;
    if(reg.test(address) == false) {
        alert('Введите корректный e-mail');
        return false;
    }alert('Все последние новости будут прихордить на ' + address);
}

// Плавный скрол

$("body").on('click', '[href*="#"]', function(e){
    var fixed_offset = 100;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
    e.preventDefault();
});



// Показ модального окна


buttonAbout.addEventListener('click', function () {
    modal.style.visibility ='visible';
    modalBg.style.visibility ='visible';
})


modalSend.addEventListener('click', function () {
    modal.style.visibility ='hidden';
    modalBg.style.visibility ='hidden';
})

document.addEventListener('click', function(e){
    let click = e.target.classList.value;
    if(click === 'modal_bg'){
        modal.style.visibility ='hidden';
        modalBg.style.visibility ='hidden';
    }
    
})

// Спойлеры статистика - открытие дивов

$(document).ready(function () {
    $('.match-info').click(function (e) {
        if($('.block').hasClass('one')) {
            $('.button_static').not($(this)).removeClass('active');
            $('.slider__active').not($(this).next()).slideUp(300);
        }
        $(this).toggleClass('active').next().slideToggle(300);
    })
})


$(document).ready(function () {
    $('.menu-btn').click(function (e) {
        $('.menu-btn,.menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});


$(document).ready(function() {
    $('.header_link').click(function(event) {
        $('.menu-btn,.menu').removeClass('active');
        $('body').removeClass('lock')
    });
});


// Кнопки с видео

btn.onclick = function() {
    videoBg.style.display = "block";
}

btn2.onclick = function() {
    videoBg.style.display = "block";
}

span.onclick = function() {
    videoBg.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == videoBg) {
        videoBg.style.display = "none";
    }
}