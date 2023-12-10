// Fungsi untuk fetch data dari API berdasarkan ID dan tipe
async function fetchDataById(id, type) {
    try {
      const apiUrl = `https://api.example.com/${type}/${id}`;
      const response = await fetch(apiUrl);
  
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
  
    const data = await response.json();
      return data;
    } catch (error) {
        console.error('Fetch error:', error);
        return null;
    }
}
  
// Contoh penggunaan untuk infohotel
async function getInfoHotel() {
    const hotelId = 'infohotel';
    const hotelData = await fetchDataById(hotelId, 'infohotel');
  
    if (hotelData) {
      // Lakukan sesuatu dengan data hotel yang diperoleh
      console.log('Info Hotel:', hotelData);
    }
}
  
// Contoh penggunaan untuk infoliburan
async function getInfoLiburan() {
    const liburanId = 'infoliburan';
    const liburanData = await fetchDataById(liburanId, 'infoliburan');
  
    if (liburanData) {
      // Lakukan sesuatu dengan data liburan yang diperoleh
      console.log('Info Liburan:', liburanData);
    }
}
  
// Panggil fungsi untuk mendapatkan data
getInfoHotel();
getInfoLiburan();
  