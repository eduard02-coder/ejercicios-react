import Button1 from '../../common/Button1';
import { useState } from 'react';

const Calculadora = () => {
  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);
  const [result, setResult] = useState(0);

  const input1Handler = (e) => {
    setInput1(Number(e.target.value));
  };

  const input2Handler = (e) => {
    setInput2(Number(e.target.value));
  };

  const checkInputs = (inp1, inp2) => {
    if (Number.isNaN(input1) || Number.isNaN(input2)) {
      setResult('Error.');
      return false;
    }

    return true;
  };

  const sumBtnHandler = () => {
    if (checkInputs(input1, input2)) {
      setResult(input1 + input2);
    }
  };

  const subsBtnHandler = () => {
    if (checkInputs(input1, input2)) {
      setResult(input1 - input2);
    }
  };

  const multBtnHandler = () => {
    if (checkInputs(input1, input2)) {
      setResult(input1 * input2);
    }
  };

  const divBtnHandler = () => {
    if (checkInputs(input1, input2)) {
      if (input2 !== 0) {
        setResult(input1 / input2);
      } else {
        setResult('Error.');
      }
    }
  };

  const clearBtnHandler = () => {
    setResult(0);
  };

  return (
    <div className="flex justify-around border p-3 py-7 w-140">
      <div className="flex-col justify-between">
        <h5>Entrada 1:</h5>
        <input onChange={input1Handler} className="border px-1" type="text" />

        <h5>Entrada 2:</h5>
        <input onChange={input2Handler} className="border px-1" type="text" />
      </div>

      <div className="flex-col justify-between">
        <div className="grid grid-cols-2 gap-1">
          <Button1 handler={sumBtnHandler} className="bg-amber-400 text-black">
            Sumar ➕
          </Button1>
          <Button1 handler={subsBtnHandler} className="bg-amber-400 text-black">
            Restar ➖
          </Button1>
          <Button1 handler={multBtnHandler} className="bg-amber-400 text-black">
            Multiplicar ✖️
          </Button1>
          <Button1 handler={divBtnHandler} className="bg-amber-400 text-black">
            Dividir ➗
          </Button1>
        </div>
        <div className="result-container">
          <h5>Resultado:</h5>
          <input className="border px-1" value={result} type="text" disabled />
          <Button1
            handler={clearBtnHandler}
            className="bg-amber-400 text-black ml-1"
          >
            Clear
          </Button1>
        </div>
      </div>
    </div>
  );
};

export default Calculadora;
