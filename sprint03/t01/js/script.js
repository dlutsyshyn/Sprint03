const zero = num => {
  if (num < 10) {
    num = '0' + num;
  }
  return num;
}

const getFormattedDate = dateObject => {
  let month = zero(dateObject.getMonth() + 1);
  let day = zero(dateObject.getDate());
  let year = zero(dateObject.getFullYear());
  let hours = zero(dateObject.getHours());
  let minutes = zero(dateObject.getMinutes());
  let weekday = dateObject.toLocaleString('en', {weekday: 'long'});

  return `${day}.${month}.${year} ${hours}:${minutes} ${weekday}`;
}

const date0 = new Date(1993, 11, 1);
const date1 = new Date(1998, 0, -33);
const date2 = new Date('42 03:24:00');

console.log(getFormattedDate(date2))