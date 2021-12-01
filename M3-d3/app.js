{Authorization: "563492ad6f91700001000001bac6f6a96f304864819504d3a10509bf"};

const getPhotos ()=> {
    fetch("https://api.pexels.com/v1/")
    .then((response) => response.json())
    .then((photoData)=> {
        console.log(photoData)
    })
}

getPhotos()