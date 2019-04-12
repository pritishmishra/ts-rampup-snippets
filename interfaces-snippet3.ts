interface SquareConfig {
  color?: string;
  width: number;
}

function createSquare(config: SquareConfig): void {
  // some definition
}

//Extra prop not allowed. Valid usecase - dont want extra prop
let mySquare2 = createSquare({ colour: "red", width: 100 });

//Extra prop not allowed. Invalid usecase - want extra prop
let mySquare3 = createSquare({ opacity: 0.5, width: 100 });

//Workaround
let mySquare4 = createSquare({ opacity: 0.5, width: 100 } as SquareConfig);

//String index signature
interface SquareConfigExtra {
  color?: string;
  width: number;
  [propName: string]: any;
}

function createSquareExtra(config: SquareConfigExtra) {
  // some definition
}

let mySquare5 = createSquareExtra({ opacity: 0.5, width: 100 });
