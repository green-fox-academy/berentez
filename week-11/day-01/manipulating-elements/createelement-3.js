const kids = [
    { 'petName': 'Wattled crane', 'owner': 'Bryant' },
    { 'petName': 'Devil, tasmanian', 'owner': 'Alejandro' },
    { 'petName': 'Mynah, common', 'owner': 'Nelie' },
    { 'petName': 'Dolphin, common', 'owner': 'Mariele' },
    { 'petName': 'Gray duiker', 'owner': 'Maddalena' },
    { 'petName': 'Crab (unidentified)', 'owner': 'Lucine' },
    { 'petName': 'Ant (unidentified)', 'owner': 'Lorianna' },
    { 'petName': 'Bison, american', 'owner': 'Tommie' },
    { 'petName': 'Yellow mongoose', 'owner': 'Vivyan' },
    { 'petName': 'Carpet snake', 'owner': 'Veda' },
    { 'petName': 'Lesser mouse lemur', 'owner': 'Isidor' },
  ];

  //1.

  const article = document.querySelector('main');

  for (let i = 0; i < kids.length; i++){
    article.appendChild(document.createElement('article'));
  }

  //2.

  const articles = document.querySelectorAll('article');

  for (let i = 0; i < articles.length; i++){
      const owner = document.createElement('h3');
      const pet = document.createElement('p');
      owner.textContent = kids[i].owner;
      pet.textContent = kids[i].petName;
      articles[i].appendChild(owner);
      articles[i].appendChild(pet);
  }

  //3.

article.classList.add('pets');