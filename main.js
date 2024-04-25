//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch);

const input = document.getElementById('input');

input.addEventListener("keydown", (ev) => {
  if (ev.key === "Enter") {
    ev.preventDefault();
    document.getElementById('button').click();
  }
});

function getFetch(){
  const choice = document.querySelector('input').value
  const url = 'https://pokeapi.co/api/v2/pokemon/'+choice.toLowerCase();

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)

        const type = data.types[0].type.name;
        const body = document.querySelector('body')

        document.querySelector('h2').innerText = data.name[0].toUpperCase() + data.name.slice(1);
        document.querySelector('.dexNumber').innerText = data.id;
        document.querySelector('.type').innerText = data.types[0].type.name[0].toUpperCase() + data.types[0].type.name.slice(1);
        document.querySelector('.sprite').src = data.sprites.front_default;
        document.querySelector('.shiny').src = data.sprites.front_shiny;

        if (type === 'electric') {
          body.style.backgroundColor = 'rgb(250, 252, 88)'
        } else if (type === 'fire') {
          body.style.backgroundColor = 'rgb(180, 35, 35)'
        } else if (type === 'normal' || type === 'steel') {
          body.style.backgroundColor = 'lightgrey'
        } else if (type === 'grass' || type === 'bug') {
          body.style.backgroundColor = 'rgb(22, 168, 22)'
        } else if (type === 'water') {
          body.style.backgroundColor = 'rgba(0, 30, 140, 60%)'
        } else if(type === 'ice' || type === 'flying') {
          body.style.backgroundColor = 'lightblue'
        } else if (type === 'psychic' || type === 'poison') {
          body.style.backgroundColor = 'rgb(103, 56, 134)'
        } else if (type === 'fairy') {
          body.style.backgroundColor = 'pink'
        } else if (type === 'fighting') {
          body.style.backgroundColor = 'orange'
        } else if (type === 'ground' || type === 'rock') {
          body.style.backgroundColor = 'rgba(71, 50, 33, 0.9)'
        } else if (type === 'ghost' || type === 'dark') {
          body.style.backgroundColor = 'rgba(35, 25, 36, 1.0)'
        } else if (type === 'dragon') {
          body.style.backgroundColor = 'rgb(145, 126, 62)'
        } else {
          body.style.backgroundColor = 'white'
        }

        if (type === 'water' || type === 'ground' || type === 'rock' || type === 'ghost' || type === 'dark' || type === 'psychic' || type === 'poison') {
          body.style.color = 'white';
        } else {
          body.style.color = 'black';
        }

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
