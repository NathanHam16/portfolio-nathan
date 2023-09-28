function parseAndCreatePage(rsp) {
    let s = "";

    s = "total number is: " + rsp.photos.photo.length + "<br/>";

    // http://farm%7Bfarm-id%7D.static.flickr.com/%7Bserver-id%7D/%7Bid%7D_%7Bsecret%7D_[mstb].jpg
    // http://www.flickr.com/photos/%7Buser-id%7D/%7Bphoto-id%7D

    let ref = rsp.photos.photo;

    for (let i=0; i < ref.length; i++) {
        photo = ref[i];
        t_url = "http://farm/" + photo.farm + ".static.flickr.com/" + photo.server + "/" + photo.id + "" + photo.secret + "_" + "t.jpg";
        p_url = "http://www.flickr.com/photos/" + photo.owner + "/" + photo.id;
        s += '<a href="' + p_url + '">' + '<img alt="'+ "test" + '"src="' + t_url + '"/>' + '</a>';

    }

    const appDiv = document.getElementById("app"); 
    appDiv.innerHTML = s; 
} 



const base = "https://api.flickr.com/services/rest/?";
const query = "&method=flickr.photos.search&api_key=f386e0649abb50fe41e9031f5537452a&tags=golden-retriever&per-page=50&format=json&nojsoncallback=1";
const url = base + query; 

fetch(url) 
    .then( (response) => {
        if (response.ok) {
            return response.json();
        }
        throw new Error("Network response was not ok.");
    })
    .then( (rsp) => parseAndCreatePage(rsp))
    .catch(function(error) {
        console.log("There has been a problem with your fetch operation: ",error.message);
    });