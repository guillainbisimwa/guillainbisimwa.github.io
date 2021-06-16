const getBlogs = () => {
  fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@guillainbisimwa')
    .then((res) => res.json())
    .then((data) => {
      // Fillter the array
      const res = data.items;
      const posts = res.filter(item => item.categories.length > 0);

      function toText(node) {
        const tag = document.createElement('div');
        tag.innerHTML = node;
        node = tag.innerText;
        return node;
      }
      function shortenText(text, startingPoint, maxLength) {
        return text.length > maxLength ? text.slice(startingPoint, maxLength) : text;
      }
      let output = '';
      posts.forEach((item) => {
        output += `
        <article class="col-sm-19 col-md mt-5">
          <div class="p-sm-1 p-md-3">
            <a href="${item.link}">
                <img src="${item.thumbnail}" class="img-thumbnail img-fluid">
                <div class="blog__content">
                  <div class="">
                      <h3 class="fw-bold mt-1 col-12 text-truncate">${shortenText(item.title, 0, 30)}</h3>
                      <p class="blog__intro">${shortenText(toText(item.content), 0, 300)}...</p>
                  </div>
                  <hr>
                  <div class="blog__info">
                      <span class="blog__author">${item.author},</span>
                      <span class="blog__date">${shortenText(item.pubDate, 0, 10)}</span>
                  </div>
                </div>
            </a>
          </div>
        </article>`;
      });
      document.querySelector('#article').innerHTML = output;
    });
};

module.export = getBlogs();