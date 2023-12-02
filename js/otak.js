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

  const dataPenerbangan = [
    { maskapai: 'Garuda Indonesia', logo: 'garuda.jpg' },
    { maskapai: 'AirAsia', logo: 'airasia.jpg' },
    { maskapai: 'Lion Air', logo: 'lionair.jpg' },
  ];

  // Menampilkan data di halaman
  const daftarPenerbangan = document.getElementById('daftarPenerbangan');

  dataPenerbangan.forEach(penerbangan => {
    const card = document.createElement('div');
    card.classList.add('card');

    // Menambahkan gambar
    const logo = document.createElement('img');
    logo.src = penerbangan.logo;
    card.appendChild(logo);

    // Menambahkan nama maskapai
    const namaMaskapai = document.createElement('p');
    namaMaskapai.textContent = penerbangan.maskapai;
    card.appendChild(namaMaskapai);

    // Menambahkan card ke container
    daftarPenerbangan.appendChild(card);
});






