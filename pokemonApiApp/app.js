// DOM:
const catchThemAll = document.createElement("button");
catchThemAll.innerText = "new pokemon";
document.body.appendChild(catchThemAll);
let init = "https://pokeapi.co/api/v2/pokemon/1/";
let randomNumber = Math.ceil(Math.random() * 1010);

// fetch from api + closure + auto init function:

const fetchData = ((init) => {
  let fetchData = init;
  console.log(`This is the first init ${fetchData} `);
  fetch(`${init}`)
    .then((res1) => res1.json())
    .then((data1) => {
      console.log(
        `this is ${data1.name} the first Pokemon out of 1010 Pokemons`
      );
      console.log(data1);
      catchThemAll.addEventListener("click", getPokemon);
    });

  return () => {
    getPokemon;
  };
})(init);

const getPokemon = () => {
  console.log("waiting");
  setTimeout(function () {
    console.log("after waiting for 5 sec");
    fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}/`)
      .then((res) => res.json())
      .then((data) => {
        // let pic = data;
        console.log(` ${data.name} is our random pokemon of the day`);
        console.log(data);
        //   console.log(pic);
      });
  }, 5000);
};
