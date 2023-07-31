function draw(n) {
    let temp = "";
    let number = 0;
    for (let row = 1; row <= 2 * n - 1; row++) {
      for (let col = 1; col <= 2 * n - 1; col++) {
        if (n - row >= col /* && row <= n */) {
          temp += '-';  
        } else if(col - row >= n /* && row <= n */){
          temp += '-';  
        } else if (col < row - n + 1) {
          temp += '-';  
        } else if(col + row > 3 * n - 1 ){
          temp += '-';  
        } else {
          number += 1;
          temp += number.toString(); 
        } 
      }
      temp += "\n";
    }
    console.log(temp);
  }
  draw(2);
  draw(3);
  draw(4);