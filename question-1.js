let n = 35;

for (let i = 1; i <= n; i++) {
  switch (true) {
    case (i % 5 === 0 && i % 7 === 0):
      console.log("Knose Pet Care Made Easy");
      break;
    case (i % 5 === 0):
      console.log("Knose");
      break;
    case (i % 7 === 0):
      console.log("Pet Care Made Easy");
      break;
    default:
      console.log(i);
      break;
  }
}
