const fetchFact = function () {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://numbersapi.com/random/trivia?json');

  xhr.onreadystatechange = function () {
    console.log('Ready state:', xhr.readyState);
    if (xhr.readyState !== 4) {
      return;
    }

    const info = JSON.parse( xhr.responseText );
    console.log( info );

    const p = document.createElement('p');
    p.innerHTML = info.text;
    document.body.appendChild( p );
  }

  xhr.send();
};

fetchFact();

const button = document.getElementsByTagName('button')[0];
button.addEventListener('click', fetchFact);
