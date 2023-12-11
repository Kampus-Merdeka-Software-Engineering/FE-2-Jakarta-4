document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('hotelForm').addEventListener('submit', async function (event) {
      event.preventDefault();

      const city = document.getElementById('city').value;
      try {
          const response = await fetch(`http://localhost:3000/hotel?city=${city}`);
          const hotels = await response.json();


          console.log('Response from server:', hotels);

          const hotelHasil = document.getElementById('hotelHasil');
          hotelHasil.innerHTML = '';

          hotels.forEach(hotel => {
              const hotelBox = document.createElement('div');
              hotelBox.className = 'hotelbox';

              hotelBox.innerHTML = `
                  <div class="info-box" id="infohotel">
                      <img src="${hotel.image}" alt="hotel">
                      <div class="info-content">
                          <h2>${hotel.hotel_name}</h2>
                          <p>Rating : ${hotel.rating}</p>
                          <p class="lokasi">${hotel.city}, ${hotel.address}</p>
                          <p>Fasilitas:</p>
                          <div class="fasilitas-container">
                              <div class="fasilitas-item">
                                  <span class="fasilitas-text">${hotel.fasilitas}</span>
                              </div>
                          </div>
                          <p class="harga">Rp.700.000 /malam/kamar</p>
                          <button class="button-booking" onclick="showPopup('Reservasi berhasil dipesan')">Pesan Sekarang</button>
                      </div>
                  </div>
              `;

              hotelHasil.appendChild(hotelBox);
          });
      } catch (error) {
          console.error('Error fetching hotels:', error);
      }
  });
});