import {
  debounceTime,
  fromEvent,
  map,
  tap,
  pluck,
  merge,
  mergeAll,
  Observable,
} from "rxjs";
import { ajax } from "rxjs/ajax";
import {
  GithubUser,
  GithubUsersResp,
} from "../interface/github-users.interfaces";

/* referencias */
const body = document.querySelector("body");
const textInput = document.createElement("input");
const orderList = document.createElement("ol");
body.append(textInput, orderList);

// Observables y AJAX
//mergeAll se usa para aplanar el observable de AJAX, permitiendo manejar múltiples respuestas de manera más sencilla.

//streams
const input$ = fromEvent<KeyboardEvent>(textInput, "keyup");
let url = "";
url = "https://api.github.com/users/";
url = "https://api.github.com/search/users?q=";

//helpers
const mostrarUsuarios = (usuarios: GithubUser[]) => {
  orderList.innerHTML = ""; // Limpiar la lista antes de mostrar nuevos usuarios
  console.log(usuarios);
  for (const user of usuarios) {
    const li = document.createElement("li");
    const img= document.createElement("img");
    img.src = user.avatar_url;
    img.alt = user.login;

    const enlace = document.createElement("a");
    enlace.href = user.html_url;
    enlace.text = 'Ver página de ' + user.login;
    enlace.target = "_blank";

    li.appendChild(img);
    li.appendChild(enlace);
    
    orderList.appendChild(li);
  }
};

//operadores
input$
  .pipe(
    debounceTime<KeyboardEvent>(500), // Espera 500ms después del último evento
    map<KeyboardEvent, string>((event) => event.target["value"]), // Extrae el objeto del evento
    map<string, Observable<GithubUsersResp>>((texto) => {
      //const texto = event.target["value"];
      return ajax.getJSON(url + `${texto}`);
    }),
    mergeAll(),
    map<GithubUsersResp, GithubUser[]>((obj) => obj.items) // Extrae el objeto del evento
  )
  .subscribe(mostrarUsuarios);
