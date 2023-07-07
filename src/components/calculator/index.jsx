import Modal from '../modal'
import E_Calc from '../scripts/equations.js'
import './calculator.css'
import { useState } from 'react'

function Calculator () {
  const [ toggleModal, setToggleModal ] = useState(true);
  const [ data, setData ] = useState({});
  
  const showModal = () => {
    const formulary = document.querySelector('.calc-container');

    if(formulary.reportValidity()) {
      setToggleModal(false);

      // new Intl.NumberFormat('es-CO').format() shows the numbers separated by thousands and millions
      const loan = new Intl.NumberFormat('es-CO').format(formulary[0].value);
      const interestRate = formulary[1].value;
      const fees = E_Calc.fees(formulary).fees;
      const feesAmount = new Intl.NumberFormat('es-CO').format(E_Calc.fees(formulary).feesAmount);
      const interestRateMonth = E_Calc.interest(formulary).interestRateMonth;
      const interestAmount = new Intl.NumberFormat('es-CO').format(E_Calc.interest(formulary).interestAmount);
      const amountToPay = new Intl.NumberFormat('es-CO').format(E_Calc.fees(formulary).amountToPay);
      const interestCompounded = new Intl.NumberFormat('es-CO').format(E_Calc.compoundInterestAndAmortization(formulary).interestCompounded);
      const amortization = new Intl.NumberFormat('es-CO').format(E_Calc.compoundInterestAndAmortization(formulary).amortization);
      
      setData({
        loan,
        interestRate,
        fees,
        feesAmount,
        interestRateMonth,
        interestAmount,
        amountToPay,
        interestCompounded,
        amortization,
      });
    }

    return null;
  }

  return (
    <form className='calc-container' onSubmit={event => event.preventDefault()}>
      <h2 className='calc-title'>Calculadora de Préstamos</h2>

      <label className='label' htmlFor="loan-amount">Monto del préstamo:</label>
      <input className='input' type="number" id="loan-amount" min="1000" placeholder='$' required/>

      <label className='label' htmlFor="interest-rate">Tasa de interés anual:</label>
      <input className='input' type="number" id="interest-rate" min="1" max="99" placeholder='%' required/>

      <label className='label' htmlFor="loan-term">Plazo del préstamo:</label>
      <input className='input' type="number" id="loan-term" min="1" required/>
      <select className='input' name="loan-term">
        <option value="1" defaultValue={1}>Meses</option>
        <option value="12">Años</option>
      </select>

      <label className='label' htmlFor="payment-frequency">Frecuencia de pago:</label>
      <select className='input' name="payment-frequency" id="payment-frequency">
        <option value="1" defaultValue={1}>Mensual</option>
        <option value="2">Quincenal</option>
      </select>

      <button className='button' type="submit" id="calc" onClick={showModal}>
        Calcular
      </button>

      <Modal
        toggleModal={toggleModal}
        setToggleModal={setToggleModal}
        calcData={data}
      />
    </form>
  )
}

export default Calculator