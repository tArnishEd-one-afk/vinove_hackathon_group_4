let joinToast = (msg) => {
  Toastify({
      text: msg,
      duration: 3000,
      className: 'join-toast',
      newWindow: true,
      close: true,
      gravity: "top", 
      position: "center", 
      stopOnFocus: true, 
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
      onClick: function(){} 
    }).showToast();
}

let leftToast = (msg) => {
Toastify({
    text: msg,
    duration: 3000,
    className: 'left-toast',
    newWindow: true,
    close: true,
    gravity: "top", 
    position: "center", 
    stopOnFocus: true, 
    style: {
      background: "linear-gradient(to right, #ee0979, #ff6a00)",
    },
    onClick: function(){} 
  }).showToast();
}



let calculateDistance = (lat1, lon1, lat2, lon2) => {
const R = 6371; 

const radLat1 = (lat1 * Math.PI) / 180;
const radLon1 = (lon1 * Math.PI) / 180;
const radLat2 = (lat2 * Math.PI) / 180;
const radLon2 = (lon2 * Math.PI) / 180;


const deltaLat = radLat2 - radLat1;
const deltaLon = radLon2 - radLon1;

const a =
    Math.sin(deltaLat / 2) ** 2 +
    Math.cos(radLat1) * Math.cos(radLat2) * Math.sin(deltaLon / 2) ** 2;

const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
const distance = R * c;

return distance*1000;
}



function getLocationByLatLon(latitude, longitude) {
const nominatimEndpoint = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;

return fetch(nominatimEndpoint)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(result => {
        const address = result.display_name;
        return address;
    })
    .catch(error => {
        console.error("Error during reverse geocoding:", error);
        return null;
    });
}



let mapClick = (e) => {
  console.log(e.latlng)
}