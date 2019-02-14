//Original pokemon code //
(function() {
  var repository = repository.slice();

  for (var i = 0; i < repository.length; i++) {
    document.write("<p>")
    document.write("<br>","Name: ", repository[i].name, "<br>", "Height: ", repository[i].height," meters", "<br>", "Typing: ",
    repository[i].typing, "<br>", "Pokedex Number: ", repository[i].pokedexNumber)

    if (repository[i].pokedexNumber > 480){
      document.write (' - This is a legendary pokemon')
    }
    document.write("</p>")
  }
});

//New pokemon code//
var pkmRepository = (function () {
  //new repository
  var pokemonRepository = [
    {name: 'Bulbasaur', height: 7,typing: ['Grass', ' Poison'], pokedexNumber: 1},
    {name: 'Ivysaur', height: .9, typing: ['Grass', ' Poison'], pokedexNumber: 2},
    {name: 'Venasaur', height: 2, typing: ['Grass', ' Poison'], pokedexNumber: 3},
    {name: 'Arceus', height: 3.2, typing: ['Normal'], pokedexNumber:  493},
  ];
  //Add pokemon
  function add (pokemon) {
    pokemonRepository.push(pokemon);
  };
  //Makes pokemonRepository public
  function  getAll () {
    return pokemonRepository;
  };
  return {
    add: add,
    getAll: getAll,
  };
})();
//I use pkmRepository.getAll() to retrieve the data in the array and then it should be printing out
//what I want it to be, however it's not. Unless I messed up somewhere inside the IIFE, again.
pkmRepository.getAll().forEach(function(currentItem){
  document.write("<p>" + currentItem + "<br>");
});
