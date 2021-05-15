// const fetch = require("node-fetch");

// // fetch("https://jsonplaceholder.typicode.com/posts")
// //   .then(data => {
// //     console.log(data)

// //     return data.text()
// //   }).then(data => {
// //     console.log(data)
// //   })

// fetch("https://jsonplaceholder.typicode.com/users/11")
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(e => console.log('error'))

let APIKEY = "dy3IWXx5nySnh42VOpfJ55LrsBY5z9rT";

document.addEventListener("DOMContentLoaded", init);

function init() {
  document.getElementById("btnSearch").addEventListener("click", (ev) => {
    ev.preventDefault(); //to stop the page reload
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=1&q=`;
    let str = document.getElementById('search').value.trim()
    url = url.concat(str)
    console.log(url)
    fetch(url)
    .then(response => response.json())
    .then(content => {
        console.log(content.data)
        console.log("Meta", content.meta)
        let fig = document.createElement('figure');
        let img = document.createElement('img');
        let fc = document.createElement('figcaption');
        img.src = content.data[0].images.downsized.url;
        img.alt = content.data[0].title;
        fc.textContent = content.data[0].title;
        fig.appendChild(img)
        fig.appendChild(fc)
        let out = document.querySelector('.out');
        out.insertAdjacentElement('afterbegin', fig);
    })
    .catch(err => {
        console.error(err)
    })
  });
}
