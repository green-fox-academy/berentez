const parent = document.getElementsByTagName('ul')[0];
const child = document.querySelector('li');
parent.removeChild(child);

const planetData = [
    {
      category: 'inhabited',
      content: 'Foxes',
      asteroid: true,
    },
    {
      category: 'inhabited',
      content: 'Whales and Rabbits',
      asteroid: true,
    },
    {
      category: 'uninhabited',
      content: 'Baobabs and Roses',
      asteroid: true,
    },
    {
      category: 'inhabited',
      content: 'Giant monsters',
      asteroid: false,
    },
    {
      category: 'inhabited',
      content: 'Sheep',
      asteroid: true,
    },
  ];

  for (let i = 0; i < planetData.length; i++){
      if (planetData[i].asteroid === true){
          const newAsteroid = document.createElement('li');
          newAsteroid.classList.add(planetData[i].category);
          newAsteroid.textContent = planetData[i].content;
          parent.appendChild(newAsteroid);
      }
  }