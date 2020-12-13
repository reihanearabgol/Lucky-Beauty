function filterByCategory(category) {
  let cluster = window.data.filter(function(value) {
    if (category === 'discount') {
      return value.discount === true;
    }
    return category === value.category;
  });
  return cluster;
}
//let h=filterByCategory("hair");
function makeProduct(product) {
  let pDiv = document.createElement('div');
  pDiv.className = 'product';
  let img = document.createElement('img');
  img.src = product.imageUrl;
  img.alt = product.name;
  pDiv.appendChild(img);
  //----------------------------
  let div = document.createElement('div');
  div.className = 'product-title';
  div.innerText = product.name;
  pDiv.appendChild(div);
  //---------------------------------
  div = document.createElement('div');
  div.className = 'product-description';
  div.innerText = product.description;
  pDiv.appendChild(div);
  //--------------------------
  let detDiv = document.createElement('div');
  detDiv.className = 'product-details';
  let rankDiv = document.createElement('div');
  rankDiv.className = 'rank';
  detDiv.appendChild(rankDiv);
  let priceDiv = document.createElement('div');
  priceDiv.className = 'price';
  priceDiv.innerText = '$' + product.price;
  detDiv.appendChild(priceDiv);
  pDiv.appendChild(detDiv);
  for (let i = 0; i < 5; i++) {
    let r = document.createElement('i');
    r.className = 'fas fa-star yellow';
    rankDiv.appendChild(r);
  }
  return pDiv;
}

function makeContent(category) {
  let cluster = filterByCategory(category);
  let contentDiv = document.createElement('div');
  contentDiv.className = 'content';
  for (let i = 0; i < cluster.length; i++) {
    let cardProduct = makeProduct(cluster[i]);
    contentDiv.appendChild(cardProduct);
  }
  return contentDiv;
}

let makeup = document.querySelectorAll('.makeup-link');
console.log(makeup);
for (let i = 0; i < makeup.length; i++) {
  makeup[i].addEventListener('click', makeupListener);
}
function makeupListener(e) {
  e.preventDefault();
  let contentWrapper = document.getElementById('content-wrapper');
  contentWrapper.innerHTML = ''; //remove all html /child elements
  let content = makeContent('makeup');
  contentWrapper.appendChild(content);
}

let hair = document.querySelectorAll('.hair-link');
for (let i = 0; i < hair.length; i++) {
  hair[i].addEventListener('click', hairListener);
}
function hairListener(e) {
  e.preventDefault();
  let contentWrapper = document.getElementById('content-wrapper');
  contentWrapper.innerHTML = ''; //remove all html /child elements
  let content = makeContent('hair');
  contentWrapper.appendChild(content);
}

let perfume = document.querySelectorAll('.perfume-link');
for (let i = 0; i < perfume.length; i++) {
  perfume[i].addEventListener('click', perfumeListener);
}
function perfumeListener(e) {
  e.preventDefault();
  let contentWrapper = document.getElementById('content-wrapper');
  contentWrapper.innerHTML = ''; //remove all html /child elements
  let content = makeContent('perfume');
  contentWrapper.appendChild(content);
}

let nails = document.querySelectorAll('.nails-link');
for (let i = 0; i < nails.length; i++) {
  nails[i].addEventListener('click', nailsListener);
}
function nailsListener(e) {
  e.preventDefault();
  let contentWrapper = document.getElementById('content-wrapper');
  contentWrapper.innerHTML = ''; //remove all html /child elements
  let content = makeContent('nails');
  contentWrapper.appendChild(content);
}

let dis = document.querySelector('#discount_link');
dis.addEventListener('click', discountListener);

function discountListener(e) {
  e.preventDefault();
  let contentWrapper = document.getElementById('content-wrapper');
  contentWrapper.innerHTML = ''; //remove all html /child elements
  let content = makeContent('discount');
  contentWrapper.appendChild(content);
}
