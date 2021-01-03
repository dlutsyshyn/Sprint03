(() => {
  const input = document.querySelector('textarea');
  const ul = document.querySelector('.notes-area');

  const state = {
    notes: []
  }

  const addNotes = notes => state.notes.push(notes);

  const removeNotes = () => state.notes = [];

  const render = () => {
    ul.innerHTML = '';

    if (input.value === '') {
      alert("It's empty. Try to input something in 'Text input'");
    } else {
      state.notes.forEach(el => {
        const li = document.createElement('li');
        li.classList.add('output');
        li.textContent = `--> ${el}`;
        ul.appendChild(li);
      });
    }

    input.value = '';
  }

  const onLoad = () => {
    const addBtn = document.querySelector('.add');
    const clearBtn = document.querySelector('.clear');

    addBtn.addEventListener('click', () => {
      addNotes(input.value);

      let date = new Date();
      date.setDate(date.getDate() + 30);

      document.cookie = `note=${state.notes}; expires=${date.toUTCString()}`;
      render();
  
    });

    clearBtn.addEventListener('click', () => {
      const isSure = confirm('Are you sure?');
      
      if (isSure) {
        removeNotes();

        ul.innerHTML = '';
        const li = document.createElement('li');
        li.classList.add('output');
        li.textContent = '[Empty]';
        ul.appendChild(li);
      }
      
    });
  }

  if (document.cookie) {
    state.notes.forEach(el => {
      const li = document.createElement('li');
      li.classList.add('output');
      li.textContent = `--> ${el}`;
      ul.appendChild(li);
    });

    onLoad()
  } else {
    onLoad()
  }


})();


