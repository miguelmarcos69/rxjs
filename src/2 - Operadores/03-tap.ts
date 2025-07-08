import { map, range, tap } from "rxjs";

// range: Crea un Observable que emite una secuencia de números en un rango específico
const numeros$ = range(1, 5);
numeros$
  .pipe(
    // tap: Ejecuta efectos secundarios sin modificar el flujo de datos
    tap((x) => console.log("x:", x)),
    // map: Transforma cada valor emitido aplicando una función de proyección
    map((x) => x * 10),
    // tap: Puede recibir un objeto observer con next, error y complete
    tap({
      next: valor => console.log("valor", valor),
      complete: () => console.log("Completado")
    })
  )
  .subscribe((val) => console.log("subs:", val));
