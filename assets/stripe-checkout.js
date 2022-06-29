import STRIPE_KEYS from "./stripe-keys.js";

const d = document,
  $yerba = d.getElementById("yerbas"),
  $template = d.getElementById("yerba-template").contentEditable,
  $fragment = d.createDocumentFragment();

fetch("https://api.stripe.com/v1/products", {
  headers: {
    Authorization: `Bearer ${STRIPE_KEYS.secret}`,
  },
})
  .then((res) => {
    //console.log(res);
    return res.json();
  })
  .then((json) => {
    console.log(json);
  });

  fetch("https://api.stripe.com/v1/prices", {
  headers: {
    Authorization: `Bearer ${STRIPE_KEYS.secret}`,
  },
})
  .then((res) => {
    //console.log(res);
    return res.json();
  })
  .then((json) => {
    console.log(json);
  });
