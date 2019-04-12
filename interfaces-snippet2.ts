// Interfaces defining the signature of the function.
interface SquareFunction {
  (x: number): number;
  //(x: string): string;
}

var SquareIt: SquareFunction = num => num * num;
//var DummyFunction: SquareFunction = str => "Hello" + str;
console.log(SquareIt(5));

interface SquareFunction2 {
  Square(x: number): number;
}
var SquareIt2: SquareFunction2;
SquareIt2.Square = function() {
  return this.x * this.x;
};
