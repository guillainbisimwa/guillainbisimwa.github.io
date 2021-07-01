const getBlogs = async () => {
  await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@guillainbisimwa')
    .then(async (res) => res.json())
    .then(async (data) => {
      // Fillter the array
      const res = data.items;
      const posts = await res.filter(item => item.categories.length > 0);
      // console.log(posts);
      localStorage.setItem('blogs', JSON.stringify(await posts));

    });
};

export default getBlogs;