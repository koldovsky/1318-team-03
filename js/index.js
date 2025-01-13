function init() {
  import("./header.js");
  import("./faq.js");
  import("./our-services.js");
  import("./articles-list.js");
  import("./slider-best-care.js");
}

const totalPartials = document.querySelectorAll(
  '[hx-trigger="load"], [data-hx-trigger="load"]'
).length;
let loadedPartialsCount = 0;

document.body.addEventListener("htmx:afterOnLoad", () => {
  loadedPartialsCount++;
  if (loadedPartialsCount === totalPartials) init();
});
