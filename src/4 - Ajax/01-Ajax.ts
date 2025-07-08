import { catchError, map, of } from "rxjs";
import { ajax, AjaxError } from "rxjs/ajax";

const url = "https://api.github.com/users?per_page=5";

const manejaError = (response: Response) => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response;
};

const atrapaError = (error: AjaxError) => {
  console.log(error);
  return of(error.message);
};

/* const fechPromesa = fetch(url)
  .then((resp) => resp.json())
  .then( data => console.log(data))
  .catch((err)=> console.warn("Error en la petición", err));
 */
/* const fechPromesa = fetch(url)
  .then(manejaError)
  .then((resp) => resp.json())
  .then((data) => console.log(data))
  .catch((err) => console.warn("Error en la petición", err)); */

  // ajax es una función que crea un Observable a partir de una petición HTTP
ajax(url)
  .pipe(
    map(({ response }) => response),
    catchError(atrapaError)
  )
  .subscribe(console.log);
