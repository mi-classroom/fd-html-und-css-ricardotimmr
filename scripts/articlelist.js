const articleListURL = 'https://gist.githubusercontent.com/vschaefer/8d26be957bbc8607f60da5dd1b251a78/raw/49ddd7c2636fb722912d91107aff55c79ddf05a8/articles.json'

document.addEventListener('DOMContentLoaded', function() {
    console.log("articlelist.js loaded");
    createArticleList();
});



function createArticleList() {
  const responsePromise = fetch(articleListURL);
  responsePromise.then(function (response) {
    const dataPromise = response.json();
    dataPromise.then(function (data) {
      renderArticleList(data.articles);
    });
  });
}

function renderArticleList(articles) {
  articleListElement = document.querySelector('[data-js-generate-articleList]')

    const cards = articles.map(function(article) {
        return `<li>
        
        <figure>
            <img src="./images/${article.teaserImg}">
            <figcaption>
                <h3>${article.title}</h3>
                <address>${article.author}</address>
            </figcaption>
        </figure>

        </li>`;
    }).join('');

    articleListElement.innerHTML = cards;
    console.log(authors);
}