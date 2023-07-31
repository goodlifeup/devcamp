function draw(n) {
    let temp = "";
    let left = n;
    let right = n;
    let number = 1
    for (let row = 1; row <= 2 * n - 1; row++) {
      for (let col = 1; col <= 2 * n - 1; col++) {
        if (col >= left && col <= right) {
          temp += number.toString();
          number++;
        } else {
          temp += "-";
        }
      }
      if (row < n){
          left -= 1
          right += 1
      }
      else {
          left += 1
          right -= 1
      }
      temp += "\n";
    }
    console.log(temp);
  }
  draw(2);
  draw(3);
  draw(4);