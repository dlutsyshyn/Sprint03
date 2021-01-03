const heroes = [
  {
    name: 'Black Panther',
    power: 66,
    age: 53
  },
  {
    name: 'Captain America',
    power: 79,
    age: 137
  },
  {
    name: 'Captain Marvel',
    power: 97,
    age: 26
  },
  {
    name: 'Hulk',
    power: 80,
    age: 49
  },
  {
    name: 'Iron Man',
    power: 88,
    age: 48
  },
  {
    name: 'Spider-Man',
    power: 78,
    age: 16
  },
  {
    name: 'Thanos',
    power: 99,
    age: 1000
  },
  {
    name: 'Thor',
    power: 95,
    age: 1000
  },
  {
    name: 'Yong-Rogg',
    power: 73,
    age: 52
  }
];

const sortBy = (key, order) => {
  heroes.sort((a, b) => {
    let result = 0;

    if (a[key] < b[key]) {
      result = -1;
    } 
    if (a[key] > b[key]) {
      result = 1;
    }

    return order === 'asc' ? result : -result; 
  });
};

console.log(heroes)

const currentSort = {
  key: 'name',
  order: 'asc'
};

const renderNotification = () => {
  const sort = document.querySelector('.sort');
  sort.textContent = `Sort by ${currentSort.key}, order ${currentSort.order}`;
}

const rows = document.querySelectorAll('tbody tr');

const renderTable = () => {
  rows.forEach((el, index) => {
    const name = el.querySelector('.hero');
    const power = el.querySelector('.power');
    const age = el.querySelector('.age');
  
    name.textContent = heroes[index].name;
    power.textContent = heroes[index].power;
    age.textContent = heroes[index].age;
  });
}

const render = () => {
  renderNotification();
  renderTable();
}

const headers = document.querySelectorAll('thead tr th');

headers[0].addEventListener('click', () => {
  if (currentSort.key === 'name') {
    if (currentSort.order === 'asc') {
      currentSort.order = 'desc';
    } else {
      currentSort.order = 'asc';
    }
  } else {
    currentSort.key = 'name';
    currentSort.order = 'asc';
  }

  sortBy(currentSort.key, currentSort.order);
  render();
});

headers[1].addEventListener('click', () => {
  if (currentSort.key === 'power') {
    if (currentSort.order === 'asc') {
      currentSort.order = 'desc';
    } else {
      currentSort.order = 'asc';
    }
  } else {
    currentSort.key = 'power';
    currentSort.order = 'asc';
  }

  sortBy(currentSort.key, currentSort.order);
  render();
});

headers[2].addEventListener('click', () => {
  if (currentSort.key === 'age') {
    if (currentSort.order === 'asc') {
      currentSort.order = 'desc';
    } else {
      currentSort.order = 'asc';
    }
  } else {
    currentSort.key = 'age';
    currentSort.order = 'asc';
  }

  sortBy(currentSort.key, currentSort.order);
  render();
});

sortBy(currentSort.key, currentSort.order);
render();
