const jokeDisp = document.querySelector("#joke");
const jokeBtn = document.querySelector("#jokeBtn");

const API = "https://api.chucknorris.io/jokes/random";
jokeBtn.addEventListener("click", generateJokes);

function generateJokes() {
  try {
    fetch(API)
      .then((data) => data.json())
      .then((info) => {
        jokeDisp.textContent = `${info.value}`;
      });
  } catch (error) {
    alert("please retry after sometime");
  }
}
