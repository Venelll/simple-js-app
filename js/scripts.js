var repository = {
  name: "Bulbasaur",
  height: 7,
  typing: ['Grass', ' Poison'],
  pokedexNumber: 1,
}

for (var i = 0; i >= 0; i--) {
  document.write(repository.name,"<br>", ' Height: ', repository.height,
  "<br>",'Type: ', repository.typing,
  "<br>",'Pokedex Number: ', repository.pokedexNumber)
    if (repository.pokedexNumber <= 9 ){
      document.write (' - One of the first few mons to be added to the pokedex.');
    }
}
