//New pokemon code
var pkmRepository = (function () {
  //new repository
  var pokemonRepository = [
    {name: 'Bulbasaur', height: .7,typing: ['Grass', ' Poison'], pokedexNumber: 1},
    {name: 'Ivysaur', height: .9, typing: ['Grass', ' Poison'], pokedexNumber: 2},
    {name: 'Venasaur', height: 2, typing: ['Grass', ' Poison'], pokedexNumber: 3},
    {name: 'Arceus', height: 3.2, typing: ['Normal'], pokedexNumber:  493},
  ];
  //Add pokemon
  function add (pokemon) {
    pokemonRepository.push(pokemon);
  };
  //Retrieves entire array.
  function  getAll () {
    return pokemonRepository;
  };
  //removes a certain piece of the array.
  function remove () {
    pokemonRepository.splice(i,1);
  };
  //Allows public usage of array and ability to manipulate array.
  return {
    add: add,
    getAll: getAll,
    remove: remove,
  };
})();
//The new table of pokemon.
pkmRepository.getAll().forEach(function(currentItem){
  document.write("<p>" + currentItem.name + "<br>" + "Height: " + currentItem.height +" Meters" +
  "<br>" + "Typing: " + currentItem.typing + "<br>" +"Pokedex Number: " + currentItem.pokedexNumber);
  //Checks legendary status.
  if (currentItem.pokedexNumber > 480){
    document.write (" - This is a legendary pokemon");
  };
  document.write("</p>");
});
