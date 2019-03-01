//pokemon repository
var pokemonRepository = (function () {
  //repository
  var repository = [];
  var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=809';

  // Elements
  var modal = document.getElementById('custom-modal-ref')
  var modalCloseButton = document.getElementById('custom-modal-close-ref')
  var modalPaper = document.getElementById('custom-modal-paper-ref')

  function handleClickOutsideModal(event) {
    if (!modalPaper.contains(event.target)) {
      hideModal()
    }
  }

  function hideModal() {
    modal.classList.add('hidden')
  }

  function handleKeyDown (event) {
    if (!modal.classList.contains('hidden')) {
      event = event || window.event;
      var isEscape = false;
      if ('key' in event) {
        isEscape = (event.key === 'Escape' || event.key === 'Esc');
      } else {
        isEscape = (event.keyCode === 27);
      }
      if (isEscape) {
        hideModal();
      }
    }
  }

  document.addEventListener('keydown', handleKeyDown)
  modal.addEventListener('click', handleClickOutsideModal)
  modalCloseButton.addEventListener('click', hideModal)

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

    /**
     * Show modal
     */
    pokemonRepository.loadDetails(pokemon).then(function() {
      modal.classList.remove('hidden');
      modal.querySelector('h1').innerHTML = pokemon.name
      modal.querySelector('p').innerHTML = 'Height: ' + pokemon.height
      modal.querySelector('img').src = pokemon.imageUrl
    });

  };
  //Displays pokemon and comes with HTML formatting.
  function addListItem (pokemon) {
    var listNode = document.createElement('li');
    var buttonNode = document.createElement('button');

    buttonNode.innerHTML = pokemon.name;
    buttonNode.classList.add('pokemon');

    buttonNode.addEventListener('click', function() {

    })

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
