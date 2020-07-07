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
const email = document.querySelector("#email");
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');


// Ховер эффект фамилии при наведении на карточку игрока
$(".card")
.mouseover(function() {
    $(this).addClass('active');     
})
.mouseout(function(){           
    $(this).removeClass('active')  
});

// Цепочкка Ховер эффекта услуги при наведении на саму услугу

$(".service_item")
  .mouseover(function () {
    $(this).addClass('active');
  })
  .mouseout(function () {
    $(this).removeClass('active')
});



$('.data__leg').click(function (e) {
  $(this).toggleClass('active');
});

$('.data__position').click(function (e) {
  $(this).toggleClass('active');
});

// noUiSlider

document.addEventListener("DOMContentLoaded", () => {

    // ======== Slider with age handle
    
    const ageSlider = document.getElementById('age-slider');

    noUiSlider.create(ageSlider, {
        start: [14, 35],
        tooltips: true,
        connect: true,
        padding: 0,
        step: 1,
        range: {
            'min': 14,
            'max': 35
        },

    });

    // ageSlider.noUiSlider.on('change', (values, handle) => {
    //     goSearch();
    // });

    // ======== Slider with height handles
    
    const heightSlider = document.getElementById('height-slider');

    noUiSlider.create(heightSlider, {
        start: [140, 205],
        tooltips: true,
        connect: true,
        step: 5,
        padding: 0,
        range: {
            'min': 140,
            'max': 205
        },
        
    });

    // heightSlider.noUiSlider.on('change', (values, handle) => {
    //     goSearch();
    // });

     // ======== Slider with weight handles
    
    const weightSlider = document.getElementById('weight-slider');

    noUiSlider.create(weightSlider, {
        start: [45, 80],
        tooltips: true,
        connect: true,
        step: 1,
        padding: 0,
        range: {
            'min': 45,
            'max': 80
        },
        
    });

    // weightSlider.noUiSlider.on('change', (values, handle) => {
    //     goSearch();
    // });


   // Значение под слайдерами

    // var marginAgeMin = document.getElementsById('age-min'),
    //     marginAgeMax = document.getElementsById('age-max');
    //     marginHeightMin = document.getElementsById('height-min');
    //     marginHeightMax = document.getElementsById('height-max');
    //     marginWeightMin = document.getElementsById('weight-min');
    //     marginWeightMax = document.getElementsById('weight-max');

    // var ageValues = [
    //     document.getElementById('age-min'),
    //     document.getElementById('age-max')
    // ],
    // heightValues = [
    //     document.getElementById('height-min'),
    //     document.getElementById('height-max')
    // ],
    // weightValues = [
    //     document.getElementById('weight-min'),
    //     document.getElementById('weight-max')
    // ];

    // ageSlider.noUiSlider.on('update', function (values, handle) {
    //     ageValues[handle].innerHTML = values[handle];
    // });

    // heightSlider.noUiSlider.on('update', function (values, handle) {
    //     heightValues[handle].innerHTML = values[handle];
    // });

    // weightSlider.noUiSlider.on('update', function (values, handle) {
    //     weightValues[handle].innerHTML = values[handle];
    // });

// ageSlider.noUiSlider.on('update', function (value, handle) {
//     if (handle) {
//         marginAgeMax.innerHTML = value[handle];
//     } else {
//         marginAgeMin.innerHTML = value[handle];
//     }
// });

// heightSlider.noUiSlider.on('update', function (value, handle) {
//     if (handle) {
//         marginHeightMax.innerHTML = value[handle];
//     } else {
//         marginHeightMin.innerHTML = value[handle];
//     }
// });

// weightSlider.noUiSlider.on('update', function (value, handle) {
//     if (handle) {
//         marginWeightMax.innerHTML = value[handle];
//     } else {
//         marginWeightMin.innerHTML = value[handle];
//     }
// });



    // ======== Search filters
    
    // function goSearch() {
    //     let winHref = window.location.href.split('?')[0];
    //     winHref += `?age=${ageSlider.noUiSlider.get()}`;
    //     winHref += `?height=${heightSlider.noUiSlider.get()}`;
    //     winHref += `?weight=${weightSlider.noUiSlider.get()}`;
    //     window.location.href = winHref;
    // }

    // // ======== Slider set
    
    // const params = new URLSearchParams(window.location.search);
    // const heightRange = params.get("heightrange");
    // const ageRange = params.get("agerange");
    // const weightRange = params.get("weightrange");

    // if (heightRange) {
    //     heightSlider.noUiSlider.set(heightRange.split(','));
    // }
    // if (ageRange) {
    //     ageSlider.noUiSlider.set(ageRange.split(','));
    // }
    // if (weightRange) {
    //     weightSlider.noUiSlider.set(weightRange.split(','));
    // }
});


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
    $('.explorer_filters-button').click(function (e) {
        $(this).toggleClass('active').next().slideToggle(300);
    })
})


// Меню -бургер

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


// Добавление класса active элементам 

// for (let i = 0; i < elements.length; i++) {/*прокручиваем в цикле все элементы*/
//     elements[i].addEventListener('click', function() {  /*при клике на элемент */
//         for (let i = 0; i < elements.length; i++) {
//             elements[i].classList.remove('active'); /*удаляем у всех class active*/
//             slider.style.display = "none";
//             matchStatic.style.display = "none";
//         }
//         this.classList.add('active');/*добавляем class active по которому кликнули */
//         sliderActive.style.display = "block";
//     })
// }



// Скрипт для Шрифтов

// function testWebP(callback) {

//     var webP = new Image();
//     webP.onload = webP.onerror = function () {
//     callback(webP.height == 2);
//     };
//     webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
//     }
    
//     testWebP(function (support) {
    
//     if (support == true) {
//     document.querySelector('body').classList.add('webp');
//     }
// });


// Скрипт для фильтров полосок

$('input[type="range"]').change(function () {
    var val = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));
    
    $(this).css('background-image',
                '-webkit-gradient(linear, left top, right top, '
                + 'color-stop(' + val + ', rgba(254, 16, 32, 0.4)), '
                + 'color-stop(' + val + ', rgba(51, 51, 51, 0.2)'
                + ')'
                );
});