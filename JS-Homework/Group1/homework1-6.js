function draw(n) {
    let temp = "";
    let number = 0;
    for (let row = 1; row <= n; row++) {
      for (let col = 1; col <= n; col++) {
          number += 1;
          temp += number.toString();
      }
      temp += "\n";
    }
    console.log(temp);
  }
  draw(2);
  draw(3);
  draw(4);