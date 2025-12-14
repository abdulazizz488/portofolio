let modeLigth = document.getElementById("ligth");
let buttonMode = document.getElementById("mode");
let icon = document.getElementById("icon-mode");

// mode default
modeLigth.href = "portofolio.css"; // default stylesheet

buttonMode.addEventListener("click", function () {
  let z = modeLigth.classList.contains("apa");

  if (z) {
    // Light MODE
    modeLigth.classList.remove("apa");
    modeLigth.href = "ligth.css";

    icon.className = "ph ph-sun";  // icon cerah
    icon.style.color = "#4A90E2";  // warna cerah
  } else {
    // Dark MODE
    modeLigth.classList.add("apa");
    modeLigth.href = "portofolio.css";

    icon.className = "ph ph-moon"; // icon gelap
    icon.style.color = "white";    // warna gelap
  }
});




const project1 = [
  {
    title: "Kalkulator Zakat Emas",
    description: "Aplikasi Web untuk menghitung zakat emas",
    image: "./img/codingan.jpeg",
    link: "./index.html",
  },
  {
    title: "Kalkulator",
    description: "Aplikasi Web untuk menghitung",
    image: "./img/kalkulator.jpeg",
    link: "./kalkulator.html",
  },
  {
    title: "Lampu Merah",
    description: "Simulasi Lampu Merah",
    image: "./img/lampu-1.jpeg",
    link: "./traffic.html",
  },
];



for (let i = 0; i < project1.length; i++) {
  let project = project1[i];

  let card = document.createElement("div");
  card.className = "card";

  let image = document.createElement("img");
  image.src = project.image;
  image.className = "project-nya"

  let title = document.createElement("h3");
  title.textContent = project.title;

  let description = document.createElement("p");
  description.textContent = project.description;

  let link = document.createElement("a");
  link.href = project.link;
  link.target = "blank";
  link.className = "link"
  link.textContent = "Lihat Detail"

  card.appendChild(image);
  card.appendChild(title);
  card.appendChild(description)
  card.appendChild(link)

  cardProject1.appendChild(card)
}


const cardProject2 = document.getElementById("card-project2");

const project2 = [
  {
    title: "Portofolio",
    description:
      "Membuat portofolio dengan canva",
    image: "/img/portofolio-canva.png",
    tags: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    link: "https://portopolio-aziz.my.canva.site/i-m-abdul-aziz",
  },
  {
    title: "Poster i'rab",
    description: "Membuat poster i'rab surat al-ikhlas",
    image: "/img/poster-arab.jpg",
    tags: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    link: "https://drive.google.com/drive/folders/1M9MfTZ1PeHmY-dWutctLyoPg_twEeAlZ?usp=sharing",
  },
  {
    title: "Video I'rab",
    description: "Video i'rab surat an-naas",
    image: "/img/lampu (1).jpeg",
    tags: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    link: "https://drive.google.com/drive/folders/1M9MfTZ1PeHmY-dWutctLyoPg_twEeAlZ",
  },
];


for (let i = 0; i < project2.length; i++) {
  let project = project2[i];

  let card = document.createElement("div");
  card.className = "card";

  let image = document.createElement("img");
  image.src = project.image;
  image.className = "project-nya"

  let title = document.createElement("h3");
  title.textContent = project.title;

  let description = document.createElement("p");
  description.textContent = project.description;

  let link = document.createElement("a");
  link.href = project.link;
  link.target = "blank";
  link.className = "link"
  link.textContent = "Lihat Detail"

  card.appendChild(image);
  card.appendChild(title);
  card.appendChild(description)
  card.appendChild(link)

  cardProject2.appendChild(card)
}


const cardProject3 = document.getElementById("card-project3");

const project3 = [
  {
    title: "Poster Bahasa Inggris",
    description:
      "Membuat poster grammer dan vocabulary",
    image: "/img/poster.jpg",
    tags: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    link: "https://drive.google.com/drive/folders/1mujSfdz1VlG13KfEJPxkboDzi8b6Gdy-?usp=sharing",
  },
  {
    title: "Speaking English",
    description: "Tugas ngomong dengan bahasa inggris",
    image: "/img/kalkulator.jpeg",
    tags: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    link: "https://drive.google.com/drive/folders/1frs7FXOxbXBMLJVQNQrwjLYr70LydjP9",
  },
  {
    title: "Short Movie",
    description: "Tugas membuat short movie dengan bahasa inggris",
    image: "/img/movie2.png",
    tags: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    link: "https://drive.google.com/drive/folders/1bnUXBbl_FqDgiU94YfmAF176ycYxyLwb",
  },
];


for (let i = 0; i < project3.length; i++) {
  let project = project3[i];

  let card = document.createElement("div");
  card.className = "card";

  let image = document.createElement("img");
  image.src = project.image;
  image.className = "project-nya"

  let title = document.createElement("h3");
  title.textContent = project.title;

  let description = document.createElement("p");
  description.textContent = project.description;

  let link = document.createElement("a");
  link.href = project.link;
  link.target = "blank";
  link.className = "link"
  link.textContent = "Lihat Detail"

  card.appendChild(image);
  card.appendChild(title);
  card.appendChild(description)
  card.appendChild(link)

  cardProject3.appendChild(card)
}


