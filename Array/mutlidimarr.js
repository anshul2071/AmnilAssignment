let ticTacToe = [
    ['X', 'O', 'X'],
    ['O', 'X', 'O'],
    ['O', 'X', 'X']
  ];
  
  console.log(ticTacToe);
  
  
  console.log(`Middle cell: ${ticTacToe[1][1]}`);
  console.log(`Bottom-right cell: ${ticTacToe[2][2]}`);
  



  const matrix = [
    [1, 2, 3],   
    [4, 5, 6],   
    [7, 8, 9]   
];

for (let i = 0; i < matrix.length; i++) {       
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(`Element at [${i}][${j}] = ${matrix[i][j]}`);
    }
}
