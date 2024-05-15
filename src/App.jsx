import { useState, useEffect } from "react";
import Logo from "/assets/images/logo.svg";
import Calculator from "./components/Calculator.jsx";
import YourResult from "./components/YourResult.jsx";
import Tips from "./components/Tips.jsx";
import Limitations from "./components/Limitations.jsx";

function App() {
  const [BMI, setBMI] = useState({
    height: 0,
    weight: 0,
    bodyBMI: 0,
  });

  const [imperialValue, setImperialValue] = useState({
    feet: 0,
    inches: 0,
    st: 0,
    lbs: 0
  })


  function handleGetHeight(height) {
    setBMI((prevState) => ({ ...prevState, height: height / 100 }));
  }

  function handleGetWeight(weight) {
    setBMI((prevState) => ({ ...prevState, weight }));
  }

  function handleImperialHeight(type ,height){
    if(type == 'feet'){
      setImperialValue(prevState => ({
        ...prevState, [type]: height
      }))
    }
  }

  function handleImperialWeight(type , weight){
    if(type == 'st'){
      setImperialValue(prevState => ({
        ...prevState, [type]: weight
      }))
    }
  }

  useEffect(() => {
    handleCalculateBMI();
  }, [BMI.height, BMI.weight]);

  function handleCalculateBMI() {
    if (BMI.height > 0 && BMI.weight > 0) {
      const calcBMI = BMI.weight / (BMI.height * BMI.height);
      setBMI((prevState) => ({
        ...prevState,
        bodyBMI: calcBMI,
      }));
    }
    console.log(BMI);
  }

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
          <Calculator
            BMIValue={BMI.bodyBMI}
            handleGetHeightValue={handleGetHeight}
            handleGetWeightValue={handleGetWeight}
          />
        </section>
        <YourResult />
        <Tips />
        <Limitations />
      </main>
    </>
  );
}

export default App;
