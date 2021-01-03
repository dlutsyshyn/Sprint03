const transformation = () => {
  const lab = document.getElementById('lab')
  const name = document.getElementById('hero');
  const btn = document.getElementById('btn');

  btn.onclick = function() {

    if (name.textContent === 'Bruce Banner') {
      name.textContent = 'Hulk';
      name.style.fontSize = '130px';
      name.style.letterSpacing = '6px';
      lab.style.background = '#70964b';
    } else {
      name.textContent = 'Bruce Banner';
      name.style.fontSize = '60px';
      name.style.letterSpacing = '2px';
      lab.style.background = '#ffb300';
    }
  }
};