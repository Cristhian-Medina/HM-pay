import './modal.css'

function Modal ( { toggleModal , setToggleModal, calcData }) {
  let {
    loan,
    interestRate,
    interestRateMonth,
    fees,
    feesAmount,
    amountToPay,
    interestAmount,
    interestCompounded,
    amortization,
  } = calcData;

  const restart = () => setToggleModal(true);

  return (
    <div className={`modal-container ${toggleModal ? 'hidden' : ''}`} id="results">
      <h3>Resultados</h3>
      <table>
        <tbody>
          <tr>
            <td>Monto del préstamo:</td>
            <td>$ {loan}</td>
          </tr>
          <tr>
            <td>Tarifa anual:</td>
            <td>{interestRate} %</td>
          </tr>
          <tr>
            <td>Interés mensual:</td>
            <td>{interestRateMonth} %</td>
          </tr>
          <tr>
            <td># de cuotas a pagar:</td>
            <td>{fees}</td>
          </tr>
          <tr>
            <td>Valor de la cuota:</td>
            <td>$ {feesAmount}</td>
          </tr>
          <tr>
            <td>Total deuda:</td>
            <td>$ {amountToPay}</td>
          </tr>
          <tr>
            <td>Total intereses:</td>
            <td>$ {interestAmount}</td>
          </tr>
        </tbody>
      </table>

      <button type="button" id="restart" onClick={restart}>Cerrar</button>
    </div>
  )
}

export default Modal
