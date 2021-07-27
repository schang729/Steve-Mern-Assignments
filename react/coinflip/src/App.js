
import './App.css';

function App() {
 


  function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
  };

  function fiveHeads() {
    let headsCount = 0;
    let attempts = 0;
    while (headsCount<5){
      attempts++;
      let result = tossCoin();
      if (result === "heads"){
        headsCount++;
      } else{
        headCount= 0;
      }
    }

    return new Promise((resolve, reject) => {
      if(headCount == 5){
        resolve("it took ${attempts} tries to flip five heads");

      } else if (attempts > 100){
          reject("We already tried more than 100 flips")
      }
      
      
    });
  }
  fiveHeads()
    .then(res => console.log(res))
    .catch(err => console.log(err));
  console.log("When does this run now?");










  return ( 
    <div className = "App" >

    
    </div>
  );
}

export default App;