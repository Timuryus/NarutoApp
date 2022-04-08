const personalID = JSON.parse(localStorage.getItem("more"));
const $titleDoc = document.querySelector(".titleDoc");
const $title = document.querySelector(".title");
const $back = document.querySelector(".back");

document.querySelector(".row").innerHTML = personalID.map(
  ({ image, name, power, clan, village, level, element }) => {
    $title.innerHTML = name;
    $titleDoc.innerHTML = name;
    return `
        <div class ="col-12 col-xl-12 col-sm-12 col-md-12 rounded-2 m-0">
            <div class ="card-image">
                <img src =${image} class ="w-100" style="height:500px;object-fit:cover" />
            </div>
            <div class ="card-body bg-dark text-light">
                <div class="container">
                   <div class ="container w-75 card-container">
                        <h3 class =" d-flex justify-content-between"><span class ="text-start bg-success ps-2 pe-2 pt-1 pb-1 m-1 rounder-5 ">Power:</span><span>${power}</span></h3>
                        <h3 class =" d-flex justify-content-between"><span class ="text-start bg-success ps-2 pe-2 pt-1 pb-1 m-1 rounder-5 ">Level:</span><span>${level}</span></h3>
                        <h3 class =" d-flex justify-content-between"><span class ="text-start bg-success ps-2 pe-2 pt-1 pb-1 m-1 rounder-5 ">Clan:</span><span>${clan}</span></h3>
                        <h3 class =" d-flex justify-content-between"><span class ="text-start  bg-success ps-2 pe-2 pt-1 pb-1 m-1 rounder-5 ">Village:</span><span>${village}</span></h3>
                        <h3 class =" d-flex justify-content-between"><span class ="text-start bg-success ps-2 pe-2 pt-1 pb-1 m-1 rounder-5 ">Element:</span><span>${element}</span></h3>
                   </div>
                </div>
            </div>
        </div>
    `;
  }
);

$back.addEventListener("click", (e) => {
  e.preventDefault();
  window.open("./index.html", "_self");
});
