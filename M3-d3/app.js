{
  Authorization: "563492ad6f91700001000001bac6f6a96f304864819504d3a10509bf";
}
let get9Min = document.querySelectorAll(".card-body  small");
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

        get9Min[i].innerText = `${photoData.photos[i].id}`;
        let cardImg = document.createElement("img");
        cardImg.className = "bd-placeholder-img card-img-top";
        cardImg.src = `${photoData.photos[i].src.medium}`;

        getThumbnail[i].firstChild.remove();
        getThumbnail[i].replaceChild(cardImg, getThumbnail[i].firstChild);
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
      for (let i = 0; i < getThumbnail.length; i++) {
        // new image
        get9Min[i].innerText = `${photoData.photos[i].id}`;
        let cardImg = document.createElement("img");
        cardImg.className = "bd-placeholder-img card-img-top";
        cardImg.src = `${photoData.photos[i].src.medium}`;

        getThumbnail[i].firstChild.remove();
        getThumbnail[i].replaceChild(cardImg, getThumbnail[i].firstChild);
      }
    });
};

// get the button and add event
let getSecondButton = document.querySelector(".btn.btn-secondary.my-2");

getSecondButton.addEventListener("click", getPhotosSecond);

let getEditBtn = document.querySelectorAll(
  ".btn-group > .btn.btn-sm.btn-outline-secondary:nth-of-type(even)"
);

let getCard = document.querySelectorAll(".col-md-4");

for (let i = 0; i < getEditBtn.length; i++) {
  const element = getEditBtn[i];

  const hide = () => {
    getCard[i].style.display = "none";
  };

  element.innerText = "Hide";
  element.addEventListener("click", hide);
}
