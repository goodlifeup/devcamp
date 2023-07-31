function draw(n) {
    let arrSymbolTemp = [
      ['-','*'],
      ['\n',0],
      ['']
    ];
    let arrBox = [
      [],
      [],
      [],
      [],
      [],
      [],
      [],
    ];

    for (let row = 1; row <= 2 * n - 1; row++) {
      for (let col = 1; col <= 2 * n - 1; col++) {
        if (n - row >= col /* && row <= n */) {
          arrBox[row-1].push(arrSymbolTemp[0][0]);
        } else if(col - row >= n /* && row <= n */){
          arrBox[row-1].push(arrSymbolTemp[0][0]);  
        } else if (col < row - n + 1) {
          arrBox[row-1].push(arrSymbolTemp[0][0]);
        } else if(col + row > 3 * n - 1 ){
          arrBox[row-1].push(arrSymbolTemp[0][0]); 
        } else {
          arrBox[row-1].push(arrSymbolTemp[0][1]);
        }  
          arrSymbolTemp[2][0] += arrBox[row-1][col-1];
      } 
          arrSymbolTemp[2][0] += arrSymbolTemp[1][0];
    }
    // console.log(arrSymbolTemp);
    console.log(arrSymbolTemp[2][0]);  
    
  }
  draw(2);
  draw(3);
  draw(4);

        

 