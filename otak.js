// NAVBAR STICKY SCROLL
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});

// // Tuker Posisi
// const bandaraAsalSelect = document.getElementById('bandaraAsal');
// const bandaraTujuanSelect = document.getElementById('bandaraTujuan');
// const swapButton = document.getElementById('swapButton');

// swapButton.addEventListener('click', function() {
//   const tempValue = bandaraAsalSelect.value;
//   bandaraAsalSelect.value = bandaraTujuanSelect.value;
//   bandaraTujuanSelect.value = tempValue;
// });

//navbar 
const navbarItems = document.querySelectorAll('.navbar nav ul li a');

  navbarItems.forEach(item => {
    item.addEventListener('click', function () {
      navbarItems.forEach(item => {
        item.classList.remove('active');
      });

      item.classList.add('active');
    });
  });





