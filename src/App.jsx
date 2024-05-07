import { useState } from "react";
import Logo from "/assets/images/logo.svg";
import Calculator from "./components/Calculator.jsx";
import YourResult from "./components/YourResult.jsx";
import Tips from "./components/Tips.jsx";
import Limitations from "./components/Limitations.jsx";

function App() {
  const [BMI, setBMI] = useState({
   height: 0,
   weight: 0
  });

  console.log(BMI)


  // function handleSetBMI(measurementType) {
  //   switch(cm){
  //     case 'cm':
  //       setBMI(prevValue => ({...prevValue, weight: 50}) )
  //   }
  //   if(measuring === 'metric'){
  //     setBMI(prevValue => ({...prevValue, weight: 50}) )
  //   }else{

  //   }
    
  // }

  //metric muna

  // function handleSetBMI(height, weight){
  //   if(height){
  //     setBMI(prevValue => ({...prevValue, height: height}) )
  //   }else{
  //     setBMI(prevValue => ({...prevValue, weight: weight}) )
  //   }
  //   console.log('function activating')
  // }

  function calculateBMI() {}

  return (
    <>
      <header>
        <img src={Logo} alt="Circular logo" />
      </header>
      <main>
        <section id="keyvisual">
          <div id="keyvisualBox-bg">
            <div className="keyvisual__text-container">
              <h1>
                Body Mass
                <br /> Index Calculator
              </h1>
              <p>
                Better understand your weight in relation to your height using
                our body mass index (BM) calculator. While BMI is not the sole
                determinant of a healthy weight, it offers a valuable starting
                point to evaluate your overall health and well-being.
              </p>
            </div>
          </div>
          <Calculator handleBMIValue={() => setBMI} />
        </section>
        <YourResult />
        <Tips />
        <Limitations />
      </main>
    </>
  );
}

export default App;
