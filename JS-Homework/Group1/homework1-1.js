function draw(n) {
    let temp = "";
      for (let col = 1; col <= n; col++) {
          temp += "*";
      }
    temp += "\n";
    console.log(temp);
  }
  draw(2);
  draw(3);
  draw(4);
 