function letvarconst() {
    console.log('letvarconst');
    let x = 1;
    if (x == 1) {
      var y = 2;
      let z = 3;
    }
    console.log(y);
    try {
      console.log(z);
    }
    catch (e) {
      console.log(`Error: ${e.message}`);
    }
  
    const a = 4;
    try {
      a = 5;
    }
    catch (e) {
      console.log(`Error: ${e.message}`);
    }
  }
  
  function plusplus() {
    console.log('plusplus');
    let x = 5;
    let y = 5;
    console.log(++x);
    console.log(y++);
  }
  
  function arithmetic() {
    console.log('arithmetic');
    let x = 2;
    let y = 3;
    console.log(x + y);
    console.log(x - y);
    console.log(x * y);
    console.log(x / y);
    console.log(x % y);
    console.log('compound operations');
    x += 1;
    console.log(x);
    x -= 1;
    console.log(x);
    x *= 1;
    console.log(x);
    x /= 1;
    console.log(x);
  }
  
  function loop() {
    console.log('loop');
    for (let i = 0; i < 10; i++) {
      console.log(i);
    }
  }
  
  letvarconst();
  plusplus();
  arithmetic();
  loop();