function draw(n) {
    let temp = "";
    for (let row = 1; row <= n; row++) {
      for (let col = 1; col <= 2 * n - 1; col++) {
        if (col < row) {
          temp += '-';  
        } else if(col + row > 2 * n){
          temp += '-';  
        } else {
          temp += '*'; 
        } 
      }
      temp += "\n";
    }
    console.log(temp);
  }
  draw(2);
  draw(3);
  draw(4);