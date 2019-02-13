//Original pokemon code //
(function() {
  var repository = [
    {name: 'Bulbasaur', height: 7,typing: ['Grass', ' Poison'], pokedexNumber: 1},
    {name: 'Ivysaur', height: .9, typing: ['Grass', ' Poison'], pokedexNumber: 2},
    {name: 'Venasaur', height: 2, typing: ['Grass', ' Poison'], pokedexNumber: 3},
    {name: 'Arceus', height: 3.2, typing: ['Normal'], pokedexNumber:  493},
  ]
  var pkmRepository = repository.slice();

  for (var i = 0; i < repository.length; i++) {
    document.write("<p>")
    document.write("<br>","Name: ", repository[i].name, "<br>", "Height: ", repository[i].height," meters", "<br>", "Typing: ",
    repository[i].typing, "<br>", "Pokedex Number: ", repository[i].pokedexNumber)

    if (repository[i].pokedexNumber > 480){
      document.write (' - This is a legendary pokemon')
    }
    document.write("</p>")
  }
})

//New pokemon code//
var pkmRepository = (function () {
  var pokemonRepository = [ //new repository
    {name: 'Bulbasaur', height: 7,typing: ['Grass', ' Poison'], pokedexNumber: 1},
    {name: 'Ivysaur', height: .9, typing: ['Grass', ' Poison'], pokedexNumber: 2},
    {name: 'Venasaur', height: 2, typing: ['Grass', ' Poison'], pokedexNumber: 3},
    {name: 'Arceus', height: 3.2, typing: ['Normal'], pokedexNumber:  493},
  ];
  function add(pokemon) {
    pokemonRepository.add(item),
  }
  function getAll() {
    return pokemonRepository,
  }
  return {
    add: add,
    getAll: getAll,
  }
});
//I have absolutely zero idea what I am doing wrong.
Object.keys(pkmRepository.pokemonRepository).forEach(function(property) {
  document.write("<p>")
  document.write("<br>" + repository[i].name, "<br>", "Height: ", repository[i].height," meters", "<br>", "Typing: ",
  repository[i].typing, "<br>", "Pokedex Number: ", repository[i].pokedexNumber)

  if (repository[i].pokedexNumber > 480){
    document.write (' - This is a legendary pokemon')
  }
  document.write("</p>")
}
