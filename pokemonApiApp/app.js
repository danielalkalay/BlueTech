// DOM:
const catchThemAll = document.createElement("button");
let title = document.querySelector(".title");

catchThemAll.innerText = "new pokemon";
document.body.appendChild(catchThemAll);
let pic = document.createElement("img");
document.body.appendChild(pic);

// vars:

let init = "https://pokeapi.co/api/v2/pokemon/1/";

// fetch from api + closure + auto init function:

const getPokemon = () => {
  console.log("waiting");
  let randomNumber = Math.ceil(Math.random() * 1010);
  setTimeout(function () {
    console.log("after waiting for 5 sec");
    fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}/`)
      .then((res) => res.json())
      .then((data) => {
        title = data.name;
        pic.src = data.sprites.other.home.front_default;
        title.innerText = data.name;
        console.log(` ${data.name} is our random pokemon of the day`);
        console.log(data);
        console.log(pic);
      });
  }, 5000);
};
catchThemAll.addEventListener("click", getPokemon);
const fetchData = ((init) => {
  let fetchData = init;
  console.log(`This is the first init ${fetchData} `);
  fetch(`${init}`)
    .then((res1) => res1.json())
    .then((data1) => {
      pic.src = data1.sprites.other.home.front_default;
      console.log(
        `this is ${data1.name} the first Pokemon out of 1010 Pokemons`
      );
      console.log(data1);
    });

  return () => {
    getPokemon;
  };
})(init);
