const d = document,
  $selectPrimary = d.getElementById("select-primary"),
  $selectSecondary = d.getElementById("select-secondary"),
  $selectThird = d.getElementById("select-Third");

function loadStates() {
  fetch("https://api.copomex.com/query/get_estados?token=token-de-prueba") //Se necesita token de prueba
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => {
      let $options = `<option value="">Elige un Estado</option>`;
      json.response.estado.forEach(
        (el) => ($option += `<option value="${el}">${el}</option>`)
      );
      $selectPrimary.innerHTML = $options;
    })
    .catch((err) => {
      let message = err.statusText || "Ocurrió un error";
      $selectPrimary.nextElementSibling.innerHTML = `<p>Error ${err.status}: ${message}</p>`;
    });
}

function loadTowns(state) {
  fetch(
    `https://api.copomex.com/query/get_municipio_por_estado/${state}?token=token-de-prueba`
  ) //Se necesita token de prueba
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => {
      let $options = `<option value="">Elige un Municipio</option>`;
      json.response.municipios.forEach(
        (el) => ($option += `<option value="${el}">${el}</option>`)
      );
      $selectSecondary.innerHTML = $options;
    })
    .catch((err) => {
      let message = err.statusText || "Ocurrió un error";
      $selectSecondary.nextElementSibling.innerHTML = `<p>Error ${err.status}: ${message}</p>`;
    });
}

function loadSuburbs(suburb) {
  fetch(
    `https://api.copomex.com/query/get_colonia_por_municipio/${suburb}?token=token-de-prueba`
  ) //Se necesita token de prueba
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => {
      let $options = `<option value="">Elige una Colonia</option>`;
      json.response.colonia.forEach(
        (el) => ($option += `<option value="${el}">${el}</option>`)
      );
      $selectThird.innerHTML = $options;
    })
    .catch((err) => {
      let message = err.statusText || "Ocurrió un error";
      $selectThird.nextElementSibling.innerHTML = `<p>Error ${err.status}: ${message}</p>`;
    });
}

d.addEventListener("DOMContentLoaded", loadStates);

$selectPrimary.addEventListener("change", (e) => loadTowns(e.target.value));

$selectSecondary.addEventListener("change", (e) => loadSuburbs(e.target.value));
