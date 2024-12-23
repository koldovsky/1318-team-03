document.querySelectorAll(".article__button").forEach((button) => {
  button.addEventListener("click", (event) => {
    const article = event.target.closest(".article");
    const title = article.querySelector(".article__title").textContent;
    const meta = article.querySelector(".article__meta").textContent;
    const text = article.querySelector(".article__text").textContent;

    alert(
      `${title.trim()}\n` +
        `-----------------------------------------------------------\n` +
        `${meta.trim()}\n\n` +
        `${text
          .trim()
          .replace(/\s*\n\s*/g, " ")
          .replace(/\n/g, "\n    ")}\n`
    );
  });
});