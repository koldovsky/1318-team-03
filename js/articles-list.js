fetch("data/articles.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then((articles) => {
    const articlesList = document.querySelector(".articles__list");
    if (!articlesList) {
      console.error("Articles list container not found!");
      return;
    }

    let articlesHTML = "";
    articles.forEach((article) => {
      articlesHTML += `
        <div class="article ${article.class || ""}">
          <img class="article__image" src="${article.image}" alt="${
        article.title
      }" width="300">
          <p class="article__meta">${article.meta}</p>
          <h2 class="article__title">${article.title}</h2>
          <p class="article__text">${article.text}</p>
          <button class="article__button" type="button">${
            article.buttonText
          }</button>
        </div>
      `;
    });

    articlesList.innerHTML = articlesHTML;

    document.querySelectorAll(".article__button").forEach((button) => {
      button.addEventListener("click", (event) => {
        const article = event.target.closest(".article");
        if (article) {
          
          const title = article.querySelector(".article__title").textContent;
          const meta = article.querySelector(".article__meta").textContent;
          const text = article.querySelector(".article__text").textContent;

          const formattedText = text
            .trim()
            .replace(/\s*\n\s*/g, " ")
            .replace(/\n/g, "\n    ");
          const message = `${title.trim()}\n-----------------------------------------------------------\n${meta.trim()}\n\n${formattedText}\n`;
          alert(message);
        } else {
          console.error("Article element not found for button click.");
        }
      });
    });
  })
  .catch((error) => {
    console.error("Error fetching or processing articles:", error);
    const articlesList = document.querySelector(".articles__list");
    if (articlesList) {
      articlesList.innerHTML = "<p>Error loading articles.</p>";
    }
  });

  document.querySelectorAll(".article__image").forEach((image) => {
    image.addEventListener("click", () => {
    });
  });