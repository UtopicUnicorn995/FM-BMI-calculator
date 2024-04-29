import Logo from '/assets/images/logo.svg'
import Calculator from './components/Calculator.jsx'
import YourResult from './components/YourResult.jsx'
import Tips from './components/Tips.jsx'
import Limitations from './components/Limitations.jsx'

function App() {

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
                  Body Mass<br/> Index Calculator
                </h1>
                <p>
                Better understand your weight in relation to your height using our 
                body mass index (BM) calculator. While BMI is not the sole determinant 
                of a healthy weight, it offers a valuable starting point to evaluate 
                your overall health and well-being.
                </p>
              </div>
            </div>
            <Calculator/>
        </section>
        <YourResult/>
        <Tips/>
        <Limitations/>
      </main>
    </>
  )
}

export default App
