const api_key = "d3dd0919c6a0e1773b53df7979248d90";
const searchInput = document.querySelector(".search-input");
const form = document.querySelector(".container");
const box = document.querySelector(".box");
let modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close");

let searchValue;
let pageno = 1;

// event listenrer

searchInput.addEventListener("input", updateInput);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  clear();
  searchMovies(searchValue);
});

function updateInput(e) {
  searchValue = e.target.value;
}

async function initialImages() {
  const dataFetch = await fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${api_key}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json ",
      },
    }
  );

  const data = await dataFetch.json();

  data.results.forEach((result) => {
    const movieImg = document.createElement("div");
    movieImg.classList.add("movie-img");
    movieImg.innerHTML = `
    <img src=${"https://image.tmdb.org/t/p/w500" + result.poster_path}></img>
    <h3>${result.original_title || result.name}</h3>
    <p class="rate">${result.vote_average}</p>`;

    rateCheck();

    box.appendChild(movieImg);
    // initial modal
    movieImg.addEventListener("click", () => {
      modal.style.display = "block";
      modal.innerHTML = `
      <div class="modal-content">
          

        <img src=${
          "https://image.tmdb.org/t/p/w500" + result.poster_path
        } class="modal-pic"></img>

        <div class="text-section">
          <h2>${result.original_title || result.name}</h2>
          <p class="movie-des">${result.overview}</p>
          <h4 class="release-date">Release Date -${result.release_date}</h4>
          <p class="rate" style="color:black">${result.vote_average}</p>
        </div>
        <span class="close">&times;</span>
      </div>`;
      const close = document.querySelector(".close");

      close.addEventListener("click", () => {
        modal.style.display = "none";
      });
    });
  });
}

async function searchMovies(query) {
  pageno++;
  const dataFetch = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${query}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json ",
      },
    }
  );

  const data = await dataFetch.json();
  console.log(data);

  data.results.forEach((result) => {
    const movieImg = document.createElement("div");
    movieImg.classList.add("movie-img");
    movieImg.innerHTML = `
    <img src=${"https://image.tmdb.org/t/p/w500" + result.poster_path}></img>
    <h3>${result.original_title || result.name}</h3>
    <p class="rate">${result.vote_average}</p>`;

    rateCheck();

    box.appendChild(movieImg);

    // search modal
    movieImg.addEventListener("click", () => {
      modal.style.display = "block";
      modal.innerHTML = `
      <div class="modal-content">
          

        <img src=${
          "https://image.tmdb.org/t/p/w500" + result.poster_path
        } class="modal-pic"></img>

        <div class="text-section">
          <h2>${result.original_title || result.name}</h2>
          <p class="movie-des">${result.overview}</p>
          <h4 class="release-date">Release Date -${result.release_date}</h4>
          <p class="rate" style="color:black">${result.vote_average}</p>
        </div>
        <span class="close">&times;</span>
      </div>`;
      const close = document.querySelector(".close");

      close.addEventListener("click", () => {
        modal.style.display = "none";
      });
    });
  });
}

function clear() {
  box.innerHTML = "";
  searchInput.value = "";
}

function rateCheck() {
  const rates = document.querySelectorAll(".rate");

  rates.forEach((rate) => {
    console.log(rate.innerText);

    if (rate.innerText < 5) {
      rate.style.color = "red";
    } else if ((rate.innerText > 4.9) & (rate.innerText < 6.7)) {
      rate.style.color = "#ffbf00";
    } else if (rate.innerText > 6.7) {
      rate.style.color = "rgb(68, 255, 0)";
    }
  });
}

initialImages();
