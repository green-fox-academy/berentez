const map = document.querySelector('#map');
const btn = document.querySelector('#btn');
const search = document.querySelector('#input');

const googleMaps = 'https://www.google.com/maps/embed/v1/place?key=AIzaSyCpc-OlKPSeJq6Sc8wCRdEg-t2CzPPilXQ&q=city:';

btn.addEventListener('click', function () {
  const http = new XMLHttpRequest();
  http.open('GET', `http://api.ipapi.com/api/${search.value}?access_key=5b57032686c8df4fee442a23c4c7fc55`);
  http.onload = function () {
    if (http.status >= 200 && http.status < 400) {
      const myData = JSON.parse(http.responseText);
      mapCoordinate(myData);
    } else {
      console.log('IP address not found');
    }
  };
  http.send();
});

function mapCoordinate(data) {
  map.src = `${googleMaps}${data.city}`;
}
