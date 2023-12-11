document.getElementById('hotelForm').addEventListener('submit', async function (event) {
  event.preventDefault();

  const city = document.getElementById('city').value;

  try {
    // Kirim permintaan pencarian ke backend
    const response = await fetch(`http://localhost:3000/hotel?city=${city}`);
    const hotels = await response.json();

    // Tampilkan hasil pencarian di dalam elemen dengan id "hotelContainer"
    const hotelContainer = document.getElementById('hotelContainer');
    hotelContainer.innerHTML = '';

    hotels.forEach(hotels => {
      const hotelBox = document.createElement('div');
      hotelBox.className = 'hotelbox';

      hotelBox.innerHTML = `
        <div class="info-box" id="infohotel">
          <img src="${hotels.image}" alt="hotel">
          <div class="info-content">
              <h2>${hotels.hotel_name}</h2>
              <p>Rating : ${hotels.rating}</p>
              <p class="lokasi">${hotels.city}, ${hotels.address}</p>
              <p>Fasilitas:</p>
              <div class="fasilitas-container">
                <div class="fasilitas-item">
                  <span class="fasilitas-text">${hotels.fasilitas}</span>
                </div>
              </div>
              <p class="harga">Rp.700.000 /malam/kamar</p>
              <button class="button-booking" onclick="showPopup('Reservasi berhasil dipesan')">Pesan Sekarang</button>
          </div>
        </div>
      `;

      hotelContainer.appendChild(hotelBox);
    });
  } catch (error) {
    console.error('Error fetching hotels:', error);
  }
});