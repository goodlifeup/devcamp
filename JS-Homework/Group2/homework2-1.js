function draw(n) {
  let temp = "";
  for (let row = 1; row <= n; row++) {
    for (let col = 1; col <= n; col++) {
      if (col < row + 1) {
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