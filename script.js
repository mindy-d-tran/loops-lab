// part 1
console.log("-----Part 1-----");

let i = 1;
while (i <= 100) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("Fizz Buzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
  i++;
}

// part 2
console.log("-----Part 2-----");

// part 3
console.log("-----Part 3-----");
let str =
  "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";
let removeNewLine = str.split("\n");

let index = 0;
while(index < removeNewLine.length) {
    let row =removeNewLine[index].split(",");
    let j = 0;
    
    let rowString = "";
    while(j < row.length-1){
        rowString+= `${row[j]}, `;
        j++;
    }
    rowString+=row[j];

    console.log(rowString);
    index++;
}