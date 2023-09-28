var express = require('express');
var router = express.Router();

/* GET home page. */
router.get("/", async function (req, res) {
  const FLICKR_API_KEY = process.env.FLICKR_API_KEY;

  const response = await fetch(
    `https://api.flickr.com/services/rest?method=flickr.photos.search&api_key=${FLICKR_API_KEY}&tags=golden-retriever&per-page=50&format=json&nojsoncallback=1&media=photos`
  );
  const data = await response.json();
  const photos = data.photos;

  const formattedPhotoData = [];

  for (let i = 0; i < photos.photo.length; i++) {
    const photo = photos.photo[i];
    const image = `http://farm${photo.farm}.static.flickr.com/${photo.server}/${photo.id}_${photo.secret}_t.jpg`;
    const url = `http://www.flickr.com/photos/${photo.owner}/${photo.id}`;
    const title = photo.title;
    formattedPhotoData.push({ image, url, title });
  }

  res.render("index", { formattedPhotoData });
});

module.exports = router;
