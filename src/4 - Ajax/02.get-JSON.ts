import { ajax } from "rxjs/ajax";

const url = "https://httpbin.org/delay/1";
const obs$ = ajax
  .getJSON(url, { "Content-Type": "application/json", 'mi-Token': "ABC123" })
  .subscribe(console.log);