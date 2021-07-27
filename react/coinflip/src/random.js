function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
  };


  function fiveHeads() {
    let headsCount = 0;
    let attempts = 0;
   

  
  
    while (headsCount <5 ){
      attempts++;
      console.log(attempts)
      
      let result = tossCoin();
      console.log(result)
      if (result === "heads"){
        headsCount++;
      } else {
        headsCount = 0;
      }
    }

    return new Promise((resolve, reject) => {
      if(headsCount == 5 && attempts < 100){
        resolve("Heads have been flipped five times");

      } else {
          reject("We already tried more than 100 flips")
      }
      
      
    });
  }
  fiveHeads()
    .then(res => console.log(res))
    .catch(err => console.log(err));
  console.log("When does this run now?");