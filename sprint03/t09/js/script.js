(() => {

const player1 = document.querySelector('.player1');
const player2 = document.querySelector('.player2');
const fields = Array.from(document.querySelectorAll('.field'));
const turnEl = document.querySelector('.output');
const resultEl = document.querySelector('.result');
const resetBtn = document.querySelector('.play-btn');
const sideBar = document.querySelector('.display');
let counter = 0;

const whoWinsRows = () => {
  const matrixRows = [
    fields.slice(0, 3),
    fields.slice(3, 6),
    fields.slice(6)
  ];

  for (let i = 0; i < matrixRows.length; i++) {
    if (matrixRows[i].every(el => el.classList.contains('x'))) {
      return {fields: matrixRows[i], winner: 'Player 1'};
    };

    if (matrixRows[i].every(el => el.classList.contains('o'))) {
      return {fields: matrixRows[i], winner: 'Player 2'};
    };
  };
};

const whoWinsCols = () => {
  const matrixCols = [
    [fields[0], fields[3], fields[6]],
    [fields[1], fields[4], fields[7]],
    [fields[2], fields[5], fields[8]]
  ];

  for (let i = 0; i < matrixCols.length; i++) {
    if (matrixCols[i].every(el => el.classList.contains('x'))) {
      return {fields: matrixCols[i], winner: 'Player 1'};
    };

    if (matrixCols[i].every(el => el.classList.contains('o'))) {
      return {fields: matrixCols[i], winner: 'Player 2'};
    };
  };
};

const whoWinsDiag = () => {
  const matrixDiag = [
    [fields[0], fields[4], fields[8]],
    [fields[6], fields[4], fields[2]]
  ];

  for (let i = 0; i < matrixDiag.length; i++) {
    if (matrixDiag[i].every(el => el.classList.contains('x'))) {
      return {fields: matrixDiag[i], winner: 'Player 1'};
    };

    if (matrixDiag[i].every(el => el.classList.contains('o'))) {
      return {fields: matrixDiag[i], winner: 'Player 2'};
    };
  };
};

const isFull = () => {
  return fields.every(el => el.classList.contains('x') || 
                      el.classList.contains('o'));
};

const whoWin = () => {
  return whoWinsRows() || whoWinsCols() || whoWinsDiag();
};

const resetGame = () => {
  player2.classList.remove('active');
  player1.classList.add('active');
  counter = 0;
  turnEl.textContent = counter;
  resultEl.textContent = '';
  sideBar.style.backgroundColor = '#c1c1c1';

  fields.forEach(el => {
    el.innerHTML = '';
    el.style.color = '#333333';
    el.classList.remove('o');
    el.classList.remove('x');
  });
};

resetBtn.addEventListener('click', () => {
  resetGame();
});

const initGame = () => {
  player1.classList.add('active');

  fields.forEach(el => {
    el.addEventListener('click', () => {

      if (player1.className.includes('active') && el.innerHTML === '') {
        el.innerHTML = `<div class="player-ex">x</div>`;
        player1.classList.remove('active');
        player2.classList.add('active');
        el.classList.add('x');
        turnEl.textContent = ++counter;

      } else if (player2.className.includes('active') && el.innerHTML === '') {
        el.innerHTML = `<div class="player-o">o</div>`;
        player2.classList.remove('active');
        player1.classList.add('active');
        el.classList.add('o');
        turnEl.textContent = ++counter;   
      }

      const result = whoWin();

      if (result) {
        resultEl.textContent = `${result.winner} won!`;
        sideBar.style.backgroundColor = '#01782a';
        player1.classList.remove('active');
        player2.classList.remove('active');
        result.fields.forEach(el => {
          el.style.color = '#01782a';
        });

        return;
      }

      if (isFull()) {
        resultEl.textContent = 'It is a draw!';
        sideBar.style.backgroundColor = '#d98d22';
        player1.classList.remove('active');
        player2.classList.remove('active');
      }
    });
  });
};

initGame();


})();