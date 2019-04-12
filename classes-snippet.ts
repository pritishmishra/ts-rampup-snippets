// Illustrates the usage of read-only.

class Octopus {
  readonly name: string;
  readonly numberOfLegs: number = 8;
  constructor(theName: string) {
    this.name = theName;
  }
}

let dad = new Octopus("Man with the 8 strong legs");
dad.name = "Man with the 3-piece suit"; // error! name is readonly.

// Const vs Read-only
class Octopus2 {
  readonly name: string;
  //const numberOfLegs = 8        // properties cannot be const
  numberOfLegs: number;
  constructor(theName: string) {
    this.name = theName;
  }
}
const legs = 8; // variables cannot have read-only modifier.
let dad2 = new Octopus2("Man with the 8 strong legs");
dad2.numberOfLegs = legs;

//Using class as an interface
class Point {
  x: number;
  y: number;
  addCoord(): number {
    return this.x + this.y;
  }
}

//Inheriting the properties of the class into the interface.
interface Point3d extends Point {
  z: number;
}

// let point3d: Point3d = { y: 2, z: 3 };
// let point3d: Point3d = {x: 1, y: 2, z: 3};
let point3d: Point3d = {
  x: 1,
  y: 2,
  z: 3,
  addCoord() {
    return this.x + this.y + this.z;
  }
};

console.log(point3d.addCoord());
