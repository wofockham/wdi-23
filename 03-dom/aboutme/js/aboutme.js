const body = document.body;
body.style.fontFamily = "Arial, sans-serif"; // font-family => fontFamily

const nickname = document.getElementById('nickname');
nickname.innerHTML = 'The Blade';

document.getElementById('favorites').innerHTML = 'Lisp, Clojure, Perl 6, Not Javascript';
document.getElementById('hometown').innerHTML = '<strong>Sydney</strong>'; // <b>

const items = document.getElementsByTagName('li');
for (let i = 0; i < items.length; i++) {
  items[i].className = 'listitem';
}

const bill = document.createElement('img'); // Detached DOM node
bill.src = 'http://fillmurray.com/80/80';
body.appendChild( bill ); // Needs to be inserted in the DOM for us to see it.
