let Button =
  document.getElementById("button");

let S2 =
  document.getElementById("S2");

let Cover1 =
  document.getElementById("cover");

let ButtonX =
  document.getElementById("button_X");

let Nav1 =
  document.getElementById("nav1");

let Nav2 =
  document.getElementById("nav2");

let Nav3 =
  document.getElementById("nav3");

let Nav4 =
  document.getElementById("nav4");

let infoCard1 =
  document.getElementById("info_card");

let infoCard2 =
  document.getElementById("info_card2");

let infoCard3 =
  document.getElementById("info_card3");

let infoCard4 =
  document.getElementById("info_card4");


Cover1.style.display = "none";
infoCard1.style.display = "flex";
infoCard2.style.display = "none";

Nav1.style.height = 170 + "px";



Button.addEventListener("click", () => {
  window.location.href = "#S2";
  Cover1.style.display = "flex";

  ButtonX.addEventListener("click", () => {
    Cover1.style.display = "none";
  });
});

let navs = [Nav1, Nav2, Nav3, Nav4];
let cards = [infoCard1, infoCard2, infoCard3, infoCard4];

function showCard(i) {
  navs.forEach((n, idx) => {
    n.style.height = (idx === i ? 170 : 150) + "px";
  });
  cards.forEach((c, idx) => {
    c.style.display = idx === i ? "flex" : "none";
  });
}

navs.forEach((n, i) => {
  n.addEventListener("click", () => showCard(i))
});

showCard(0);


let envelope = document.getElementById("envelope");
let heart = document.getElementById("heart");

function changeTheme(theme) {
  document.body.className = theme;

  if (theme === "theme-midnight") {
    envelope.src = "Images/emidnight.jpg";
    heart.src = "Images/hmidnight.png";
  } else if (theme === "theme-rose") {
    envelope.src = "Images/erose.jpg";
    heart.src = "Images/hrose.png";
  } else if (theme === "theme-sage"){
    envelope.src ="Images/esage.jpg";
    heart.src = "Images/hsage.png";
  } else if (theme === "theme-lavender"){
    envelope.src = "Images/elavender.jpg";
    heart.src = "Images/hlavender.png";
  } else if (theme === "theme-burgundy"){
    envelope.src = "Images/envelope.png";
    heart.src = "Images/heart.png";
  }
}

if (document.body.className === "theme-midnight"){
  changeTheme("theme-midnight");
} else if (document.body.className === "theme-rose"){
  changeTheme("theme-rose");
} else if (document.body.className === "theme-sage"){
  changeTheme("theme-sage");
} else if (document.body.className === "theme-lavender"){
  changeTheme("theme-lavender");
} else if (document.body.className === "theme-midnight"){
  changeTheme("theme-burgundy");
}