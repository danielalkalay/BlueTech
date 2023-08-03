// fetch from api + closure + auto init function:

let init = `https://pokeapi.co/api/v2/pokemon/1/`;

const catchThemAll = document.createElement("button");
let title = document.querySelector(".title");

// DOM:
let pic = document.createElement("img");
catchThemAll.innerText = "roll new pokemon";
// func:
document.body.appendChild(catchThemAll);
document.body.appendChild(pic);

// start point:
// fetch the start pokemon (default by hard code)

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
    pokeInterval;
  };
})(init);

//  creating an interval that runs every 4 seconds and getting
//  a pokemon name untill gettin to four pokemons

let count = 0;
let interID;

const pokeInterval = () => {
  interID = setInterval(myInterval, 4000);
};

const myInterval = () => {
  console.log("waiting");
  count++;
  console.log(count);
  getPokemon();
  // console.log(data.name);
  if (count === 4) {
    // stopInterval();
    console.log("four pokemons");
    stopInterval();
  }
};

const stopInterval = () => {
  clearInterval(interID);
  interID = null;
};

catchThemAll.addEventListener("click", pokeInterval);

const getPokemon = () => {
  console.log("get pokemon");

  setTimeout(function () {
    console.log("after waiting for few sec");
    let randomNumber = Math.ceil(Math.random() * 1010);

    fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}/`)
      .then((res) => res.json())
      .then((data) => {
        title = data.name;
        pic.src = data.sprites.other.home.front_default;
        // title.innerText = data.name;
        console.log(` ${data.name} is our random pokemon of the day`);
        // console.log(data);
        // console.log(pic);
      })
      .catch((error) => console.error(error));
  }, 2000);
};
