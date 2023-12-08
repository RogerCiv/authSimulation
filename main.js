/**
 *@author: Rogelio Sánchez
  @description: Simulación de autentificación de usuarios a traves de API, al validar usuarios el formulario
  desaparece y se muestra un card con información del usuario y un mapa con su geolocalización.
 */
import { cardUserInfo } from "./src/components/cardUserInfo";
import { fecthUsersApi } from "./src/helper/fetchUsersApi";
import "./style.css";

const app = document.querySelector("#app");

const inputUsername = document.getElementById("inputUsername");
const inputPassword = document.getElementById("inputPassword");
const submit = document.getElementById("submit");

const usersURL = "https://jsonplaceholder.org/users";
const map = document.getElementById("map")

console.log(inputUsername.value);

fecthUsersApi(usersURL).then((data) => {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(inputUsername.value);

    let encontrado = data.find(
      (user) =>
        inputUsername.value === user.login.username &&
        inputPassword.value === user.login.password
    );
    if (encontrado) {
      console.log("Correcto");
      cardUserInfo(app,encontrado,map)
    } else {
      console.log("falso");
    }
  });
});

