import { fromEvent, map, tap } from "rxjs";

const texto = document.createElement("div");
texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id sapien eu orci gravida lobortis. Aliquam felis augue, tempor at augue nec, dictum ullamcorper ipsum. Aenean sit amet scelerisque lacus, volutpat iaculis ligula. Aliquam pretium felis et felis accumsan convallis. Nulla tellus nunc, tincidunt vehicula laoreet consequat, cursus eu nulla. Etiam eget orci condimentum, pharetra leo a, mollis dolor. Aenean ultrices suscipit tortor at fringilla. Cras enim quam, elementum vehicula sollicitudin eu, vulputate at leo.
</br></br>
Praesent ut tellus vel ligula accumsan volutpat a a purus. In vitae tempus eros. Aliquam consequat lorem vel tortor sodales scelerisque. Suspendisse tempus eu ante in eleifend. Etiam ut magna nisl. Duis non tellus mauris. Phasellus malesuada rhoncus massa, at dignissim magna gravida sit amet.
</br></br>
Praesent accumsan, felis vitae placerat rutrum, sapien nibh laoreet ligula, vitae blandit erat tellus ut risus. In hac habitasse platea dictumst. In a nisl pellentesque, aliquet tellus at, viverra lorem. Quisque tincidunt metus quis augue blandit, sit amet iaculis nisi dictum. Mauris non urna eros. Phasellus pretium mi eget lorem auctor, eget pulvinar tellus porta. Etiam sodales pulvinar ex eget elementum. Duis bibendum efficitur lacus, in scelerisque nibh consectetur at. Quisque ornare lectus ac leo scelerisque, pretium efficitur metus fermentum. Aliquam ac elit sagittis, aliquam lorem in, ultricies neque. Nullam arcu arcu, facilisis in tincidunt rhoncus, malesuada eu orci. Aenean non ligula tellus. Duis sed urna eget libero dictum bibendum. Nunc laoreet aliquam tortor, malesuada sodales erat porta ut. Duis at sagittis quam. Aliquam ultrices nulla eget malesuada sodales.
</br></br>
Phasellus dapibus dictum diam quis eleifend. Praesent imperdiet augue ac ipsum ornare tincidunt. Maecenas pellentesque id velit sit amet vehicula. Nullam sed elit malesuada, porta ex a, luctus urna. Sed molestie justo eget dolor efficitur imperdiet. Donec tempor, nisi non porta consequat, sem tellus placerat lacus, ut malesuada ex justo at massa. Integer blandit enim faucibus finibus mattis. Nulla neque sapien, maximus non augue quis, vestibulum placerat massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla sit amet erat nulla. Pellentesque dictum, nunc vitae hendrerit suscipit, sem felis finibus ipsum, non iaculis justo augue id purus. Suspendisse sed elit elit. Donec vestibulum non nulla non gravida. Nunc sem massa, volutpat sed tincidunt a, vulputate at ex.
</br></br>
Donec lacinia auctor placerat. Curabitur id viverra sem. Mauris euismod lectus at volutpat cursus. Cras interdum libero pharetra, consectetur nisi sed, interdum lectus. Phasellus urna elit, accumsan vitae consectetur vitae, viverra quis nisl. Praesent ornare lectus sit amet cursus accumsan. Proin quam diam, tempor in commodo at, scelerisque porta ex. Donec consequat vulputate bibendum.`;

const body = document.querySelector("body");
body?.appendChild(texto);

const progressBar = document.createElement("div");
progressBar.setAttribute("class", "progress-bar");
body.append(progressBar);

//funcion que haga el caclculo

//streams

// Función para calcular el porcentaje de scroll
const calcularPorcentaje = (evento) => {
  const { scrollTop, scrollHeight, clientHeight } =
    evento.target.documentElement;
  console.log(
    `scrollTop: ${scrollTop}, scrollHeight: ${scrollHeight}, clientHeight: ${clientHeight}`
  );
  return (scrollTop / (scrollHeight - clientHeight)) * 100;
};
// fromEvent: Crea un Observable a partir de eventos del DOM
const scroll$ = fromEvent(document, "scroll");
// map: Transforma el evento de scroll al porcentaje calculado
// tap: Ejecuta efectos secundarios (console.log) sin modificar el flujo
const progress$ = scroll$.pipe(map(calcularPorcentaje),tap(console.log));

progress$.subscribe((procentaje) => {
  console.log(procentaje);
  progressBar.style.width = `${procentaje}%`;
});
