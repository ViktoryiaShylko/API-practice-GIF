fetch("https://api.giphy.com/v1/gifs/trending?api_key=jeMvigjtlEAFHjrfJxcWres0ILHNxaIr")
.then(response => response.json())
.then(data => {
    console.log(data);
    let gifArr = [];
    data.data.forEach(element => {
    gifArr.push(element.images.original.url);
    });
    let randomGif = gifArr[Math.floor(Math.random()*gifArr.length)];

    document.getElementById('result').innerHTML = 
     `<div><img src="${randomGif}"></div>` 
})
.catch(error => console.log(error));
