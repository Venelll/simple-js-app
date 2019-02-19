//pokemon repository
var pkmRepository = (function () {
  //repository
  var pokemonRepository = [
    {name: 'Bulbasaur', height: .7, typing: ['Grass', ' Poison'], pokedexNumber: 1, legendary: "no"},
    {name: 'Ivysaur', height: .9, typing: ['Grass', ' Poison'], pokedexNumber: 2, legendary: "no"},
    {name: 'venusaur', height: 2, typing: ['Grass', ' Poison'], pokedexNumber: 3, legendary: "no"},
    {name: 'Arceus', height: 3.2, typing: ['Normal'], pokedexNumber:  493, legendary: "yes"},
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
  function remove (indexToRemove) {
    pokemonRepository.splice(indexToRemove,1);
  };
  function addListItem () {
    var listNode = document.createElement("LI");
    var buttonNode = document.createElement("button");
    var nameNode = document.createTextElement(pokemonRepository.name);
    buttonNode.classList.add('pokemon');
    listNode.appendChild(buttonNode);
    buttonNode.appendChild(nameNode);
    document.getElementByClass("pokedex").appendChild(listNode);
  }
  //Allows public usage of array and ability to manipulate array.
  return {
    add: add,
    getAll: getAll,
    remove: remove,
  };
})();
//List of pokemon.
/*pkmRepository.getAll().forEach(function(currentItem){
  document.write("<p>" + currentItem.name + "<br>" + "Height: " + currentItem.height +" Meters" +
  "<br>" + "Typing: " + currentItem.typing + "<br>" +"Pokedex Number: " + currentItem.pokedexNumber);
  //Checks legendary status.
  if (currentItem.legendary === "yes"){
    document.write (" - This is a legendary pokemon");
  };
  document.write("</p>");
});*/
