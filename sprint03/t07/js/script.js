const li = document.getElementsByTagName('li');
const arrLi = Array.from(li);

const addCircle = el => {
  const isClassValid = ['good', 'evil', 'unknown'].includes(el.className);

  if (el.getAttribute('data-element') === null || !isClassValid) {
    el.setAttribute('class', 'unknown');
    el.setAttribute('data-element', 'none');
  }

  const attr = el.getAttribute('data-element').split(/\s+/g);
  const wrapper = document.createElement('div');

  for (let i = 0; i < attr.length; i++) {
    let circle = document.createElement('div');
    
    circle.setAttribute('class', attr[i]);
    circle.classList.add('elem');

    if (attr[i] === 'none') {
      let line = document.createElement('div');
      line.setAttribute('class', 'line');
      circle.appendChild(line);
    }
    wrapper.appendChild(circle);
  }

  el.appendChild(wrapper);
}

arrLi.forEach(el => {
  addCircle(el);
});