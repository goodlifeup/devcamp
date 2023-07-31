function draw(n) {
    let temp = "";
    let number = 0;
    for (let row = 1; row <= 2 * n - 1; row++) {
      for (let col = 1; col <= n; col++) {
        if (n - row >= col && row <= n) {
          temp += '-';  
        } else if(row - n >= col && row > n){
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