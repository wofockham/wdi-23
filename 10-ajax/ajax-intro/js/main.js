const fetchFact = function () {
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      const p = document.createElement('p');
      p.innerHTML = xhr.responseText;
      document.body.appendChild(p);
    }
  };

  xhr.open('GET', 'http://numbersapi.com/random/trivia');
  xhr.send(); // Asynchronous
}

fetchFact();

const button = document.getElementsByTagName('button')[0];
button.addEventListener('click', fetchFact);
