// Calulate minimum notes for given amount

let notes = [500, 200, 100, 50, 20, 10, 5, 2, 1]
let amount = 1111;
let result = {};

  for (let i = 0; i < notes.length; i++) {
     if (amount >= notes[i]) {
        let count = Math.floor(amount / notes[i]);
        amount -= count * notes[i];
        if (count > 0) {
            result[notes[i]] = count;
        }    
     }
    
  }

  console.log(result);