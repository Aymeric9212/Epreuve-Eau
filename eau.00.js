for (let a = 0; a <= 9; a++) {
  for (let b = 0; b <= 9; b++) {
    if (b !== a) {
      for (let c = b + 1; c < 9; c++) {
        if (c !== a && c !== b) {
          console.log(a, b, c);
        }
      }
    }
  }
}
