

export function cardUserInfo(container,userData){
//console.log(userData);
    container.innerHTML = `
    <div class="card text-white bg-primary mb-3" style="max-width: 30rem;">
  <div class="card-header">Bienvenido ${userData.firstname} ${userData.lastname} </div>
  <div class="card-body">
    <h4 class="card-title text-warning">Tus datos:</h4>
    <p class="card-text">Email : ${userData.email}</p>
  </div>
  <div id="map"></div>
</div>
    `
    let map = L.map('map').setView([userData.address.geo.lat, userData.address.geo.lng], 13);
    console.log(userData.address.geo);
  
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

}