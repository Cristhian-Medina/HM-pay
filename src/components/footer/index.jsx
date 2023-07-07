import './footer.css'

function Footer () {
  return (
    <>
      <div>
        <h3>Términos y definiciones de la calculadora</h3>
        <p>La siguiente información define los términos que e encuentran en la Calculadora de préstamo.</p>
        <table className='terminology'>
          <tbody>
            <tr>
              <td>Monto del préstamo</td>
              <td>Saldo original o esperado de su préstamo.</td>
            </tr>
            <tr>
              <td>Plazo en años</td>
              <td>El número de años durante los cuales usted pagará este préstamo. Los términos de préstamo más comunes son de 15 y 30 años. </td>
            </tr>
            <tr>
              <td>Tasa de interés</td>
              <td>Tipo de interés fijo anual para este préstamo.</td>
            </tr>
            <tr>
              <td>Mensualidad</td>
              <td>Pagos mensuales de principal e intereses.</td>
            </tr>
            <tr>
              <td>Pagos totales</td>
              <td>Total de todos los pagos mensuales durante todo el período del préstamo. Este monto total del pago supone que no hay pagos anticipados de principal.</td>
            </tr>
            <tr>
              <td>Interés total</td>
              <td>Total de todos los intereses pagados durante todo el período del préstamo. Este monto total de los intereses supone que no hay pagos anticipados de principal.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <footer>
        <p>Cristhian Medina &copy; 2023</p>
      </footer>
    </>
  )
}

export default Footer