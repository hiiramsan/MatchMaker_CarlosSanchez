window.onload = function () {

    cargarInfo();
    const data = recuperarInfo();
}   

function recuperaInfo() {
    return JSON.parse(localStorage.getItem("match"));
}


function cargarInfo() {
  const query = window.location.search;
  const urlParams = new URLSearchParams(query);

  const nac = urlParams.get("nac");
  const genero = urlParams.get("genero");

  const request = new Request(
    `https://randomuser.me/api/?nat=${nac}&gender=${genero}`,
    {
      method: "get",
      headers: new Headers({
        "Content-Type": "application/json",
      })
    }
  );

fetch(request)
  .then(function(response) {
    return response.json();    
  }).then(function(data){
    console.log(data);
    llenarInfo(data.results[0]);
  }).catch(function(error){
    console.log(error);
  });
}

function llenarInfo(data) {
    const img = document.getElementById("img");
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const age = document.getElementById("age");
    const country = document.getElementById("country");
    const city = document.getElementById("city");
    const phone = document.getElementById("phone");
    const gender = document.getElementById("gender");
    const dob = document.getElementById("dob");
    const state = document.getElementById("state");
    const cell = document.getElementById("cellphone");
    const address = document.getElementById("address");

    img.src = data.picture.large;
    name.innerHTML = `${data.name.first} ${data.name.last}`;
    email.innerHTML = data.email;
    dob.innerHTML = data.dob.age;
    country.innerHTML = data.location.country;
    city.innerHTML = data.location.city;
    phone.innerHTML = data.phone;
    age.innerHTML = data.dob.age;
    email.innerHTML = data.email;
    cell.innerHTML = data.cell;
    address.innerHTML = `${data.location.street.number} ${data.location.street.name}`;
    gender.innerHTML = data.gender;
    state.innerHTML = data.location.state;
}
