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
      for (let i = 0; i < getThumbnail.length; i++) {
        // new image
        console.log(i);
        let cardImg = document.createElement("img");
        cardImg.className = "bd-placeholder-img card-img-top";
        cardImg.src = `${photoData.photos[i].src.medium}`;

        getThumbnail[i].firstChild.remove();
        getThumbnail[i].replaceChild(cardImg, getThumbnail[i].firstChild);
        console.log(getThumbnail[i].firstChild);
      }
    });
};

// get the button and add event
let getButton = document.querySelector(".btn.btn-primary.my-2");
getButton.addEventListener("click", getPhotos);
let getThumbnail = document.querySelectorAll(".col-md-4> .card.mb-4.shadow-sm");

// new image
// let cardImg = document.createElement("img");
// cardImg.className = "bd-placeholder-img card-img-top";
// cardImg.src = "https://pixlr.com/images/index/remove-bg.webp";

// // replace svg with photo
// getThumbnail[0].firstChild.remove();
// getThumbnail[0].replaceChild(cardImg, getThumbnail[0].firstChild);
// console.log(getThumbnail[0].firstChild);

/*
1. create new element (img)
2. add class "bd-placeholder-img card-img-top"
3. 
3. select svg ( .firstChild())


*/
const getPhotosSecond = () => {
  fetch("https://api.pexels.com/v1/search?query=tea", {
    headers: {
      Authorization: "563492ad6f91700001000001bac6f6a96f304864819504d3a10509bf",
    },
  })
    .then((response) => response.json())
    .then((photoData) => {
      console.log("works");
      for (let i = 0; i < getThumbnail.length; i++) {
        // new image
        console.log(i);
        let cardImg = document.createElement("img");
        cardImg.className = "bd-placeholder-img card-img-top";
        cardImg.src = `${photoData.photos[i].src.medium}`;

        getThumbnail[i].firstChild.remove();
        getThumbnail[i].replaceChild(cardImg, getThumbnail[i].firstChild);
        console.log(getThumbnail[i].firstChild);
      }
    });
};

// get the button and add event
let getSecondButton = document.querySelector(".btn.btn-secondary.my-2");
console.log(getSecondButton);
getSecondButton.addEventListener("click", getPhotosSecond);
