
// let source = `the-times-of-india`;
// let source = `bbc-news`;
// let source = `google-news-in`;
// let source = `the-hindu`;

function news(source){
  let apikey = `8e516e54a2ea4609905868c2afe9765e`;

  let newsAccordion = document.getElementById("newsAccordion");

  const xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apikey}`,
    true
  );

  xhr.onload = function () {
    if (this.status === 200) {
      let json = JSON.parse(this.responseText);
      let articles = json.articles;
      let newsHtml = "";
      articles.forEach(function (element, index) {
        console.log(articles);
        let news = `<div class="card mb-3">
                        <div class="row">
                            <div class="col-md-4 col-12">
                            <img
                                src="${element["urlToImage"]}" 
                                class="img-fluid"
                            />
                            </div>
                            <div class="col-md-8 col-12">
                                <small class="text-muted my-2">${element["publishedAt"]}</small>
                                <h4 class="card-title">${element["title"]}</h4>
                                <p class="card-text">${element["content"]}.. 
                                <span class="text-gradient"> <a href="${element['link']}" target="_blank" >Read More</a> </span>
                                </p>
                            </div>
                        </div>
                        </div>`;
        
        newsHtml += news;
      });
      newsAccordion.innerHTML = newsHtml;
    } else {
      console.log("Something went wrong");
    }
  };

  xhr.send();
}

document.getElementById("bbc").addEventListener("click", () => {
    let source = `bbc-news`;
    news(source);
});
document.getElementById("times").addEventListener("click", () => {
    let source = `the-times-of-india`;
    news(source);
});
document.getElementById("hindu").addEventListener("click", () => {
    let source = `the-hindu`;
    news(source);
});
document.getElementById("google").addEventListener("click", () => {
    let source = `google-news-in`;
    news(source);
});
