// NAVBAR STICKY SCROLL
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});

//swiper js
var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerview: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
});

document.addEventListener("DOMContentLoaded", function () {
    var hotelForm = document.getElementById("hotelForm");
    var pesawatForm = document.getElementById("pesawatForm");
    var keretaForm = document.getElementById("keretaForm");
    var liburanForm = document.getElementById("liburanForm");

    hotelForm.addEventListener("submit", function (event) {
        if (!validateForm(hotelForm)) {
            event.preventDefault();
        }
    });

    pesawatForm.addEventListener("submit", function (event) {
        if (!validateForm(pesawatForm)) {
            event.preventDefault();
        }
    });

    keretaForm.addEventListener("submit", function (event) {
        if (!validateForm(keretaForm)) {
            event.preventDefault();
        }
    });

    liburanForm.addEventListener("submit", function (event) {
        if (!validateForm(liburanForm)) {
            event.preventDefault();
        }
    });

    function validateForm(form) {
        var elements = form.elements;
        for (var i = 0; i < elements.length; i++) {
            if (elements[i].type !== "submit" && elements[i].hasAttribute("required") && elements[i].value === "") {
                alert("Harap isi semua field formulir.");
                return false; 
            }
        }
        return true;
    }
});

function swapAirports() {
    var bandaraAsalValue = document.getElementById("bandaraAsal").value;
    var bandaraTujuanValue = document.getElementById("bandaraTujuan").value;

    document.getElementById("bandaraAsal").value = bandaraTujuanValue;
    document.getElementById("bandaraTujuan").value = bandaraAsalValue;
}

function swapStations() {
    var stasiunAsalValue = document.getElementById("stasiunAsal").value;
    var stasiunTujuanValue = document.getElementById("stasiunTujuan").value;

    document.getElementById("stasiunAsal").value = stasiunTujuanValue;
    document.getElementById("stasiunTujuan").value = stasiunAsalValue;
}

function showPopup(message) {
    document.getElementById('popup-container').style.display = 'flex';
    document.getElementById('popup-title').innerText = message;
}

function closePopup() {
    document.getElementById('popup-container').style.display = 'none';
}




