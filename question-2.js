function printFigure(n) {
    for (let i = 1; i <= n; i++) {
      let line = '';
      for (let j = 1; j <= n; j++) {
        if (j <= n - i) {
          line += '-';
        } else {
          line += '*';
        }
      }
      console.log(line);
    }
  }
  
  // Example usage
  printFigure(5);
  printFigure(7);
  