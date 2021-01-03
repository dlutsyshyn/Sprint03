(() => {
  const inputStorage = document.querySelector('textarea');
  const addBtn = document.querySelector('.add');
  const clearBtn = document.querySelector('.clear');
  const notes = document.querySelector('.notes-area');
  let storageArr = [];

  const itemsToStore = localStorage.getItem('item');

  if (itemsToStore) {
    const elsFromArr = JSON.parse(itemsToStore);
    notes.innerHTML = '';

    elsFromArr.forEach(el => {
      const li = document.createElement('li');
      li.classList.add('output');
      li.textContent = `--> ${el}`;
      notes.appendChild(li);
    });

    storageArr = elsFromArr;
  } 

  let output = document.querySelector('.output');

  const getCurrentDate = () => {
    const date = new Date();
    const year = date.getFullYear().toString().substr(-2);

    const now = `[${date.getDate()}.${date.getMonth()}.${year}, ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}]`;
    return now;
  }

  const pushVals = () => {
    const addDate = getCurrentDate();
    const pushVals = `${inputStorage.value} ${addDate}`;

    storageArr.push(pushVals);
    localStorage.setItem('item', JSON.stringify(storageArr));
  }

  const addWords = () => {
    const addDate = getCurrentDate();

    if (inputStorage.value === '') {
      alert("It's empty. Try to input something in 'Text input'.");

    } else if (output.textContent === '[Empty]'){
      pushVals();
      output.textContent = `--> ${inputStorage.value} ${addDate}`;

    } else {
      pushVals();
      notes.innerHTML += `<li class="output">--> ${inputStorage.value} ${addDate}</li>`
    }

    inputStorage.value = '';
  };

  const removeWords = () => {
    const isSure = confirm('Are you sure?');

    if (isSure) {
      notes.innerHTML = '<li class="output"></li>';
      output = document.querySelector('.output');
      output.textContent = '[Empty]';
      localStorage.removeItem('item');
      storageArr = [];
    }
  };

  addBtn.addEventListener('click', () => {
    addWords();
  });

  clearBtn.addEventListener('click', () => {
    removeWords();
  });

})();

