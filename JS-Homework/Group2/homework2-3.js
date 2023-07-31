function draw(n) {
  let temp = "";
  for (let row = 1; row <= 2 * n - 1; row++) {
    for (let col = 1; col <= n; col++) {
      if (col < row + 1 && row <= n) {
        temp += '*';  
      } else if (2 * n - row >= col && row > n) {
        temp += '*';  
      } else {
        temp += '-';
      }    
    }
    temp += "\n";
  }
  console.log(temp);
}
draw(2);
draw(3);
draw(4);