var books = [
  {
   title: 'The Design of EveryDay Things',
   author: 'Don Norman',
   alreadyRead: false,
   cover: 'http://fillmurray.com/30/30'
  },
  {
   title: 'The Most Human Human',
   author: 'Brian Christian',
   alreadyRead: true,
   cover: 'http://fillmurray.com/31/31'
  }
];

const ul = document.createElement('ul'); // Detached DOM node

for (let i = 0; i < books.length; i++) {
  const book = books[i];
  const li = document.createElement('li');
  li.innerHTML = `<em>${book.title}</em> by ${book.author}`;
  const cover = document.createElement('img');
  cover.src = book.cover;
  li.appendChild( cover );
  if (book.alreadyRead) {
    li.className = 'already-read';
  }
  ul.appendChild( li );
}

document.body.appendChild( ul );
