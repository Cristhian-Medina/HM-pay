class E_Calc {

  static cleanData = (data) => {
    const loanAmount = Number(data[0].value); // monto préstamo
    const interestRate = Number(data[1].value); // interés anual
    const loanTerm = Number(data[2].value); // plazo del préstamo
    const loanTermMultiplier = Number(data[3].value); // multiplicador - plazo del préstamo
    const paymentFrequency = Number(data[4].value); // frecuencia de pago

    return {
      loanAmount,
      interestRate,
      loanTerm,
      loanTermMultiplier,
      paymentFrequency,
    }
  }

  static fees = (data) => {
    const loanTerm = E_Calc.cleanData(data).loanTerm;
    const loanTermMultiplier = E_Calc.cleanData(data).loanTermMultiplier;
    const paymentFrequency = E_Calc.cleanData(data).paymentFrequency;
    const loanAmount = E_Calc.cleanData(data).loanAmount;
    const interestAmount = E_Calc.interest(data).interestAmount; // total intereses

    // numero de cuotas: frecuencia de pago * ( plazo del préstamo * multiplicador )
    const fees = Math.ceil(paymentFrequency * ( loanTerm * loanTermMultiplier ));
    // total deuda: monto del préstamo + total intereses
    const amountToPay = loanAmount + interestAmount;
    // valor de la cuota: total deuda / numero de cuotas
    const feesAmount = Math.ceil(amountToPay / fees);

    return {
      amountToPay,
      fees,
      feesAmount,
    }
  }

  static interest = (data) => {
    const loanAmount = E_Calc.cleanData(data).loanAmount;
    const interestRate = E_Calc.cleanData(data).interestRate;
    const loanTerm = E_Calc.cleanData(data).loanTerm;
    const loanTermMultiplier = E_Calc.cleanData(data).loanTermMultiplier;

    const MONTHS_IN_YEAR = 12;

    // lapso de tiempo del préstamo en años
    const u = (loanTerm * loanTermMultiplier) / MONTHS_IN_YEAR;
    // interés mensual: interés anual / 12
    const interestRateMonth = (interestRate / MONTHS_IN_YEAR).toFixed(2);
    // total intereses: monto préstamo * interés anual / 100
    const interestAmount = Math.ceil(loanAmount * ( interestRate * u / 100 ));

    return {
      interestAmount,
      interestRateMonth,
    }
  }

  static compoundInterestAndAmortization = (data) => {
    const loanAmount = E_Calc.cleanData(data).loanAmount;
    const interestRate = E_Calc.cleanData(data).interestRate;
    const loanTerm = E_Calc.cleanData(data).loanTerm;
    const loanTermMultiplier = E_Calc.cleanData(data).loanTermMultiplier;
    const paymentFrequency = E_Calc.cleanData(data).paymentFrequency;

    const MONTHS_IN_YEAR = 12;

    const t = interestRate / 100;
    const u = (loanTerm * loanTermMultiplier) / MONTHS_IN_YEAR; // lapso de tiempo del préstamo en años
    const n = paymentFrequency * MONTHS_IN_YEAR; // número de periodos de capitalización por unidad de tiempo

    const tn = Number((t / n).toFixed(8));
    
    const interestCompounded = Math.ceil((loanAmount * ((1 + tn) ** (n * u))) - loanAmount);
    const amortization = Math.ceil(loanAmount * (tn));   

    return {
      amortization,
      interestCompounded,
    }
  }
}

export default E_Calc;