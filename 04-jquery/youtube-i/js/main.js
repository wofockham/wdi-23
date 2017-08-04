let links = document.querySelectorAll('ul a');

for (let i = 0; i < links.length; i++) {
  const href = links[i].getAttribute('href');
  const thumbnailURL = youtube.generateThumbnailUrl( href );
  const img = document.createElement('img');
  img.setAttribute('src', thumbnailURL);
  links[i].appendChild( img );
}
