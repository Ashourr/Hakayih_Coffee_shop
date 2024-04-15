let secshop = document.getElementsByClassName("sec-shop")[0];
let shop = document.getElementById("shop");
let xshop = document.getElementsByClassName("xshop")[0];

shop.onclick = () => {
  secshop.classList.toggle("sec-shop1");
  secshop.style.transition = "0.7s";
};
xshop.onclick = () => {
  secshop.classList.toggle("sec-shop1");
  secshop.style.transition = "0.7s";
};

let cont12 = document.querySelector(".sec-shop #content");
let h412 = document.querySelectorAll(".Products-item h4");
let h12 = document.createElement("p");
let pra12 = document.querySelectorAll(".Products-item p");
let p12 = document.createElement("p");
let img12 = document.createElement("img");
let imges12 = document.querySelectorAll(".Products-item img");
let p212 = document.createElement("p");

let shop1 = document.querySelectorAll(".icon2 .shop");
for (let i = 0; i <= shop1.length; i++) {
  shop1[i].onclick = () => {
    shop1[i].style.right = "10px";
    shop1[i].classList.add("s");
    shop.style.animation = "xx 10s infinite";

    let m12 = document.createElement("i");
    let cont12 = document.querySelector(".sec-shop #content");
    let h412 = document.querySelectorAll(".Products-item h4");
    let h12 = document.createElement("p");
    let pra12 = document.querySelectorAll(".Products-item p");
    let p12 = document.createElement("p");
    let img12 = document.createElement("img");
    let imges12 = document.querySelectorAll(".Products-item img");
    let p212 = document.createElement("p");
    let div12 = document.createElement("div");

    div12.style.display = "flex";
    div12.style.width = "275px";
    div12.style.justifyContent = "space-between";
    div12.style.alignItems = "center";
    div12.style.padding = "10px 10px";
    div12.style.flexWrap = "wrap";
    div12.style.margin = "10px 0";
    div12.style.backgroundColor = "#eaeaea";
    img12.style.width = "60px";
    img12.style.borderRadius = "50%";
    p12.style.margin = "0";
    p12.style.fontSize = "15px";
    p12.style.fontWeight = "500";
    p212.style.margin = "0";
    p212.style.color = "red";
    h12.style.margin = "0";
    h12.style.fontWeight = "600";

    img12.src = imges12[i].src;
    h12.textContent = h412[i].textContent;
    p12.textContent = pra12[i].textContent;
    m12.classList = "fa-solid fa-trash-can";
    p212.appendChild(m12);
    div12.append(img12, p12, h12, p212);
    p212.addEventListener("click", function () {
      p212.parentElement.remove();
      shop1[i].classList.remove("s");
    });

    cont12.appendChild(div12);
    img12.src = imges12[i].src;
    h12.textContent = h412[i].textContent;
    p12.textContent = pra12[i].textContent;
  };
}
