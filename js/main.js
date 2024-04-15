document.addEventListener("DOMContentLoaded", function () {
  let ele = document.querySelector(".loader");

  ele.style.animation = "bg 4s";
  ele.style.display = "none";

});
window.onload=function(){
      window.scroll(0,0);
}

let love = document.getElementById("love");
let seclove = document.getElementsByClassName("sec-love")[0];
let xlove = document.getElementsByClassName("xlove")[0];

love.onclick = () => {
  seclove.classList.toggle("sec-love1");
  seclove.style.transition = "0.7s";
};
xlove.onclick = () => {
  seclove.classList.toggle("sec-love1");
  seclove.style.transition = "0.7s";
};

let cont = document.querySelector(".sec-love #content");
let h4 = document.querySelectorAll(".mune-item h4");
let h = document.createElement("p");
let pra = document.querySelectorAll(".mune-item p");
let p = document.createElement("p");
let img = document.createElement("img");
let imges = document.querySelectorAll(".mune-item img");
let p2 = document.createElement("p");
let div = document.createElement("div");
let heart = document.querySelectorAll(".heart");

for (let i = 0; i <= heart.length; i++) {
  heart[i].onclick = () => {
    heart[i].style.right = "10px";
    heart[i].classList.add("aa");
    love.style.animation = "x 10s infinite";

    let m = document.createElement("i");
    let cont = document.querySelector(".sec-love #content");
    let h4 = document.querySelectorAll(".mune-item h4");
    let h = document.createElement("p");
    let pra = document.querySelectorAll(".mune-item p");
    let p = document.createElement("p");
    let img = document.createElement("img");
    let imges = document.querySelectorAll(".mune-item img");
    let p2 = document.createElement("p");
    let div = document.createElement("div");

    div.style.display = "flex";
    div.style.width = "300px";
    div.style.justifyContent = "space-between";
    div.style.alignItems = "center";
    div.style.padding = "10px 10px";
    div.style.flexWrap = "wrap";
    div.style.margin = "10px 0";
    div.style.backgroundColor = "#eaeaea";
    img.style.width = "60px";
    img.style.borderRadius = "50%";
    p.style.margin = "0";
    p.style.fontSize = "15px";
    p.style.fontWeight = "500";
    p2.style.margin = "0";
    p2.style.color = "red";
    h.style.margin = "0";
    h.style.fontWeight = "600";

    img.src = imges[i].src;
    h.textContent = h4[i].textContent;
    p.textContent = pra[i].textContent;
    m.classList = "fa-solid fa-trash-can";

    p2.appendChild(m);
    div.append(img, p, h, p2);

    p2.addEventListener("click", function () {
      p2.parentElement.remove();
      heart[i].classList.remove("aa");
      heart[i].style.right = "-30px";
      love.style.animation = "none";
    });
    cont.appendChild(div);
    img.src = imges[i].src;
    h.textContent = h4[i].textContent;
    p.textContent = pra[i].textContent;

    heart[i].onclick = function () {
      heart[i].classList.toggle("aa");
      heart[i].style.right = "-30px";
      cont.appendChild(div).remove();
    };
  };
}
