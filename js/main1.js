let cont1 = document.querySelector(".sec-love #content");
let h41 = document.querySelectorAll(".Products-item h4");
let h1 = document.createElement("p");
let pra1 = document.querySelectorAll(".Products-item p");
let p1 = document.createElement("p");
let img1 = document.createElement("img");
let imges1 = document.querySelectorAll(".Products-item img");
let p21 = document.createElement("p");
let heart1 = document.querySelectorAll(".icon2 .heart1");

for (let i = 0; i <= heart1.length; i++) {
  heart1[i].onclick = () => {
    heart1[i].style.right = "10px";
    heart1[i].classList.add("a");
    love.style.animation = "x 10s infinite";

    let m1 = document.createElement("i");
    let cont1 = document.querySelector(".sec-love #content");
    let h41 = document.querySelectorAll(".Products-item h4");
    let h1 = document.createElement("p");
    let pra1 = document.querySelectorAll(".Products-item p");
    let p1 = document.createElement("p");
    let img1 = document.createElement("img");
    let imges1 = document.querySelectorAll(".Products-item img");
    let p21 = document.createElement("p");
    let div1 = document.createElement("div");

    div1.style.display = "flex";
    div1.style.width = "300px";
    div1.style.justifyContent = "space-between";
    div1.style.alignItems = "center";
    div1.style.padding = "10px 10px";
    div1.style.flexWrap = "wrap";
    div1.style.margin = "10px 0";
    div1.style.backgroundColor = "#eaeaea";
    img1.style.width = "60px";
    img1.style.borderRadius = "50%";
    p1.style.margin = "0";
    p1.style.fontSize = "15px";
    p1.style.fontWeight = "500";
    p21.style.margin = "0";
    p21.style.color = "red";
    h1.style.margin = "0";
    h1.style.fontWeight = "600";

    img1.src = imges1[i].src;
    h1.textContent = h41[i].textContent;
    p1.textContent = pra1[i].textContent;
    m1.classList = "fa-solid fa-trash-can";

    p21.appendChild(m1);
    div1.append(img1, p1, h1, p21);

    p21.addEventListener("click", function () {
      p21.parentElement.remove();
      heart1[i].classList.remove("a");
    });

    cont1.appendChild(div1);
    img1.src = imges1[i].src;
    h1.textContent = h41[i].textContent;
    p1.textContent = pra1[i].textContent;

    heart1[i].onclick = function () {
      heart1[i].classList.toggle("a");
      heart1[i].style.right = "-30px";
      cont1.appendChild(div1).remove();
    };
  };
}
