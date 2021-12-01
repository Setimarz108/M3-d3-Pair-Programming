{
  Authorization: "563492ad6f91700001000001bac6f6a96f304864819504d3a10509bf";
}

const getPhotos = () => {
  fetch("https://api.pexels.com/v1/search?query=coffe", {
    headers: {
      Authorization: "563492ad6f91700001000001bac6f6a96f304864819504d3a10509bf",
    },
  })
    .then((response) => response.json())
    .then((photoData) => {
      console.log(photoData.photos);
    });
};

getPhotos();

let getButton = document.querySelector(".btn.btn-primary.my-2");

getButton.addEventListener("click", getPhotos);

let getThumbnail = document.querySelectorAll(".card.mb-4.shadow-sm");

let svg = getThumbnail[0].firstChild;

let cardImg = document.createElement("img");
cardImg.className = "bd-placeholder-img card-img-top";
cardImg.src = "https://pixlr.com/images/index/remove-bg.webp";

getThumbnail[0].appendChild(cardImg);

console.log(svg);
/*
1. create new element (img)
2. add class "bd-placeholder-img card-img-top"
3. 
3. select svg ( .firstChild())


*/
