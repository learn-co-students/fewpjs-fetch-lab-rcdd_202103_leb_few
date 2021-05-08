function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
    .then(resp => resp.json())
    .then(json => renderBooks(json))
}

/*fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  .then(json => console.log(json[5].name));*/
function renderBooks(books) {
  const main = document.querySelector('main');
for(let book in books){
    const h2 = document.createElement('h2');
    console.log(books[book].name);
    h2.innerHTML = books[book].name;
    main.appendChild(h2);
  }
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();


});
