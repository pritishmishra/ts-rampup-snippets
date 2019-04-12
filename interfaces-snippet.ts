// Function printLabel accepts object whose label param must be string.

// function printLabel(labeledObj: { label: string }) {
//     console.log(labeledObj.label);
// }

// let myObj = {size: 10, label: "Size 10 Object"};
// printLabel(myObj);

// Cleaner way of exerting this criteria

interface LabeledValue {
  label: string;
}

function printLabel(labeledObj: LabeledValue) {
  console.log(labeledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
