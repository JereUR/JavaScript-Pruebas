const d = document,
  $main = d.querySelector("main");

fetch("assets/ejemplo.md")
  .then((res) => (res.ok ? res.text() : Promise.reject(res)))
  .then((text) => {
    $main.innerHTML = new showdown.Converter().makeHtml(text);
  })
  .catch((err) => {
    console.log(err);
    let message = err.statusText || "Ocurrió un error";
    $main.innerHTML = `<p>Error ${err.status}: ${message}</p>`;
  });
