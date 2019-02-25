//pokemon repository
var pokemonRepository = (function () {
  //repository
  var repository = [];
  var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=809';
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
  //shows detailed info about pokemon.
  function showDetails (pokemon) {
    pokemonRepository.loadDetails(pokemon).then(function() {
      console.log(pokemon);
    });
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
    buttonNode.addEventListener('click', function (event){
      showDetails(pokemon);
    } );
  };
  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        var pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  };
  function loadDetails(item) {
    var url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      // Now we add the details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = Object.keys(details.types);
    }).catch(function (e) {
      console.error(e);
    });
  };

  //Allows public usage of array and ability to manipulate array.
  return {
    add: add,
    getAll: getAll,
    remove: remove,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails
  };
})();

//List of pokemon.
pokemonRepository.loadList().then(function() {
  //loads data and displays it.
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
