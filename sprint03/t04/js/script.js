const concat = (string1, string2) => {
  if (!string1 || !string2) {
    function func1() {
      func1.count++;
      string2 = prompt("Write words");
      return `${string1} ${string2}`;
    };
    func1.count = 0;
    return func1;
  } 

  return `${string1} ${string2}`;
}

// let phrase1 = concat("Hulk", 'splash!');
// let output = phrase1;
// console.log(output); // Hulk smash!

// let phrase2 = concat("Leave");
// output = phrase2();
// // a prompt appears. Enter "Hulk alone!" into the prompt

// console.log(output); // Leave Hulk alone!
// console.log(phrase2.count); // 1

// output = phrase2();
// // a prompt appears. Enter "me alone, please!" into the promp

// console.log(output); // Leave me alone, please!
// output = phrase2(); // a prompt appears. Enter "HULK ALONE!" into the prompt
// console.log(output); // Leave HULK ALONE!
// console.log(phrase2.count); // 3

// let phrase3 = concat("Go"); 
// output = phrase3(); // a prompt appears. Enter "away!" into the prompt
// console.log(output); // Go away!
// console.log(phrase3.count); // 1
// console.log(phrase2.count); // 3