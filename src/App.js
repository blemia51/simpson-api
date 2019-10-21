import React from 'react';
import './App.css';




function App() {
  return (
    <div className="container">
    <div id="pokemon">
     
    </div>
    <button onClick={textJSON} >Another</button>
    </div>
  )}
  

export default App;


function fetchPokemonJSON() {
 
  const url = `https://quests.wilders.dev/simpsons-quotes/quotes`;
  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(pokemon) {
      console.log('data decoded from JSON:', pokemon);
       const pokemonHtml = `
        <h1>${pokemon[0].character}</h1>
        <img src="${pokemon[0].image}" />
        <p id='text'>${pokemon[0].quote}</p>
      `;
      
      document.querySelector('#pokemon').innerHTML = pokemonHtml    
  })
}
  
fetchPokemonJSON();

function textJSON() {
  const url = `https://quests.wilders.dev/simpsons-quotes/quotes`;
  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(pokemon) {
      console.log('data decoded from JSON:', pokemon);

    
    const pokemonHtml = ` 
      ${pokemon[0].quote}
    `;
    document.querySelector('#text').innerHTML = pokemonHtml;
  })
}

