const colorMode = "dark";

switch (colorMode) {
  case "solarized":
    console.log("solarized");
    break;

  case "dark":
    console.log("dark");
    break;

  default:
    console.log("brake");
}

const isAuthenticated = false;
// let cartItemCount = 0;

const cartItemCount = isAuthenticated ? 1 : 0;

function getdata(baseUrl, route) {
  fetch(`${baseUrl}${route}`)
    .then((response) => response.json)
    .then((data) => console.log(data));
}

//partial application

function getdata(baseUrl) {
  return function (route) {
    fetch(`${baseUrl}${route}`)
      .then((response) => response.json)
      .then((data) => console.log(data));
  };
}

const getSocialMediaData = getData("ulr");
getSocialMediaData("/posts");

function getdata(baseUrl) {
  return function (route) {
    return function (callback) {
      fetch(`${baseUrl}${route}`)
        .then((response) => response.json)
        .then((data) => console.log(data));
    };
  };
}

const getSocialMediaData = getData("ulr");
const getSocialMediaPosts = getSocialMediaData("/posts");

getSocialMediaPosts(posts => {
  posts.forEach(post => console.log(post.title)
})
