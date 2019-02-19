//pokemon repository
var pokemonRepository = (function () {
  //repository
  var repository = [
    {name: 'Bulbasaur', height: .7, typing: ['Grass', ' Poison'], pokedexNumber: 1, legendary: "no"},
    {name: 'Ivysaur', height: .9, typing: ['Grass', ' Poison'], pokedexNumber: 2, legendary: "no"},
    {name: 'venusaur', height: 2, typing: ['Grass', ' Poison'], pokedexNumber: 3, legendary: "no"},
    {name: 'Arceus', height: 3.2, typing: ['Normal'], pokedexNumber:  493, legendary: "yes"},
  ];
  //Add pokemon
  function add (pokemon) {
    repository.push(pokemon);
  };
  //Retrieves entire array.
  function  getAll () {
    return repository;
  };
  //removes a certain piece of the array.
  function remove (indexToRemove) {
    repository.splice(indexToRemove,1);
  };
  function showDetails (pokemon) {
    console.log(pokemon);
  };
  //Displays pokemon and comes with HTML formatting.
  function addListItem (pokemon) {
    var listNode = document.createElement('li');
    var buttonNode = document.createElement('button');
    buttonNode.innerHTML = pokemon.name;
    buttonNode.classList.add('pokemon');
    listNode.appendChild(buttonNode);
    document.getElementById('pokedexList').appendChild(listNode);
    //logs all the info about the pokemon.
    document.querySelector('.pokemon').addEventListener('click', showDetails(pokemon) );
  };
  //Allows public usage of array and ability to manipulate array.
  return {
    add: add,
    getAll: getAll,
    remove: remove,
    addListItem: addListItem,
  };
})();
//List of pokemon.
pokemonRepository.getAll().forEach(function(pokemon) {
pokemonRepository.addListItem(pokemon);
});
