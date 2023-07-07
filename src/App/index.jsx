import Footer from '../components/footer'
import Calculator from '../components/calculator'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>CALCULAR PAGO DEL PRÉSTAMO</h1>
      <p>La Calculadora de préstamos <b>HM-Pay</b> le brinda una manera rápida de calcular todo acerca de su préstamo: <b>Monto de pago, monto de liquidación, amortización y más.</b> Simplemente introduzca sus datos en los campos a continuación, haga clic en el botón Calcular y vea la posible cantidad de su mensualidad.</p>

      <Calculator/>

      <p>
        <small>
        La información y las calculadoras interactivas están disponibles para su uso personal como herramientas de auto-ayuda y no tienen el propósito de brindar asesoramiento de inversión.
        <br/>No podemos y no garantizamos su aplicabilidad o precisión con respecto a sus circunstancias individuales.
        <br/>Todos los ejemplos son hipotéticos y son sólo para fines ilustrativos.
        <br/>Le animamos a buscar asesoramiento personalizado de profesionales calificados en relación con todas las cuestiones de finanzas personales.
        </small>
      </p>

      <script src="scripts/equations.js"></script>
      <script src="scripts/index.js"></script>

      <Footer/>
    </>
  )
}

export default App
