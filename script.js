const title = document.getElementById('titleInput');
const rating = document.getElementById('ratingInput');
const animeList = document.getElementById('animeList');

function getAnimeTitle() {
  return title.value;
}

function getAnimeRating() {
  return rating.value;
}

function addElement() {
  const node = document.createElement('div');
  const textNode = document.createTextNode(`${title.value}: ${rating.value}`);
  node.appendChild(textNode);
  animeList.appendChild(node);
}

// function inputsAreEmpty() {
//   if (getAnimeTitle() === '' || getAnimeRating() === '') {
//     return true;
//   }
//   return false;
// }

document
  .getElementById('addAnime')
  .addEventListener('click', function clickSubmit() {
    addElement();
  });
