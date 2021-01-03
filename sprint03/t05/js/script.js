function Calculator() {
  this.result = 0;
};

Calculator.prototype.init = function(num) {
  this.result = num;
  return this;
};

Calculator.prototype.add = function(num) {
  this.result += num;
  return this;
};

Calculator.prototype.sub = function(num) {
  this.result -= num;
  return this;
};

Calculator.prototype.mul = function(num) {
  this.result *= num;
  return this;
};

Calculator.prototype.div = function(num) {
  this.result /= num;
  return this;
};

Calculator.prototype.alert = function() {
  setTimeout(() => {
    alert(this.result);
  }, 5000);
  return this;
};

const calc = new Calculator();

calc
  .init(5)
  .add(10)
  .alert()

console.log(calc);