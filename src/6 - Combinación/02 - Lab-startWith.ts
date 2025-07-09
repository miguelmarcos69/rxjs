import { startWith } from "rxjs";
import { ajax } from "rxjs/ajax";

//Referencias
const loadingDiv = document.createElement("div");
loadingDiv.classList.add("loading");
loadingDiv.innerText = "Loading...";
document.body.appendChild(loadingDiv);

const body = document.querySelector("body");
ajax
  .getJSON("https://reqres.in/api/users/2?delay=3", {
    "x-api-key": "reqres-free-v1",
  })
  .pipe(
    startWith(true) // Emite un valor inicial antes de la petición
    // El valor inicial puede ser cualquier cosa, aquí usamos true para indicar que está cargando
  )

  .subscribe((data) => {
    if (data === true) {
      body.append(loadingDiv);
    } else {
      document.querySelector(".loading")?.remove();
    }
    console.log(data);
  });
