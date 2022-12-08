fetch("https://api.giphy.com/v1/gifs/trending?api_key=jeMvigjtlEAFHjrfJxcWres0ILHNxaIr")
.then(response => response.json())
.then(data => {
    console.log(data);
    let gifArr = [];
    data.data.forEach(element => {
    gifArr.push(element.url);
    });
    console.log(gifArr);
    let randomGif = gifArr[Math.floor(Math.random()*gifArr.length)];
    console.log(randomGif);

    document.getElementById('result').innerHTML = 
     `<div><img src="${randomGif}"></div>` 
})
.catch(error => console.log(error));
