import { catchError, exhaustMap, fromEvent, map, mergeMap, of, switchMap, tap } from "rxjs";
import { ajax } from "rxjs/ajax";

// creando formulario
const form = document.createElement("form");
const inputEmail = document.createElement("input");
const inputPass = document.createElement("input");
const submitBtn = document.createElement("button");

// configurando formulario
inputEmail.type = "email";
inputEmail.placeholder = "Email";
inputEmail.value = "eve.holt@reqres.in";

inputPass.type = "password";
inputPass.placeholder = "Password";
inputPass.value = "cityslicka";

submitBtn.type = "submit";
submitBtn.innerHTML = "Login";

//helper
const peticionHTTPLogin = (userPass) => {
  return ajax.post("https://reqres.in/api/login?delay=1", userPass, {
    "x-api-key": "reqres-free-v1",
  }).pipe(
    map((response) => response.response['token']),
    catchError((error) => of())
  );
};

// agregando formulario al body
form.append(inputEmail, inputPass, submitBtn);
document.body.append(form);

// manejando el evento submit
const submitForm$ = fromEvent(form, "submit").pipe(
  tap((ev) => ev.preventDefault()), // previene el comportamiento por defecto del formulario
  map((ev) => ({
    email: ev.target[0].value,
    password: ev.target[1].value,
  })),
  mergeMap(peticionHTTPLogin), // deficion de mergemap -> realiza una nueva peticion HTTP por cada evento emitido
  //switchMap(peticionHTTPLogin),// deficion de switchmap: cancela la peticion anterior si hay una nueva
  //exhaustMap(peticionHTTPLogin),// deficion de exhaustmap: ignora las peticiones anteriores si hay una nueva
);
// suscribiendo al evento submit
submitForm$.subscribe((token) => console.log(token));
