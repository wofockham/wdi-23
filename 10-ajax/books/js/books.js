const fetchBook = function () {
  const title = document.getElementById('title').value;
  // create our XHR
  const xhr = new XMLHttpRequest();
  // set up the XHR
  xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=title:${title}`);

  // attach our onreadystatechange
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) { return; }

    const info = JSON.parse( xhr.responseText );

    // find the cover
    const cover = info.items[0].volumeInfo.imageLinks.thumbnail;

    // display the cover
    const img = document.createElement('img');
    img.src = cover;
    document.querySelector('main').appendChild( img );
  }

  xhr.send();
};

const button = document.getElementById('search');
button.addEventListener('click', fetchBook);
