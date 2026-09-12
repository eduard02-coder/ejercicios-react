import Button1 from '../../common/Button1';
import NumberInput from './NumberInput';
import generatePassword from './passGenEngine';
import { useState } from 'react';

const PassGen = () => {
  const minLength = 4;
  const defaultLength = 12;
  const [incLC, setIncLC] = useState(true);
  const [incUC, setIncUC] = useState(true);
  const [incNum, setIncNum] = useState(true);
  const [incSpecial, setIncSpecial] = useState(true);

  const [inputVal, setInputVal] = useState(defaultLength);
  const [passDisplay, setPassDisplay] = useState('');

  const passGenBtnHandler = () => {
    if (inputVal >= minLength && (incLC || incUC || incNum || incSpecial)) {
      setPassDisplay(
        generatePassword(inputVal, incLC, incUC, incNum, incSpecial),
      );
    } else {
      setPassDisplay('');
    }
  };

  return (
    <>
      <h4>Generador de Contraseñas Aleatorias</h4>
      <h5>Longitud de contraseña:</h5>
      <NumberInput
        min={minLength}
        defaultLength={defaultLength}
        setterFunc={setInputVal}
      />
      <div className="flex flex-col gap-2 mt-4">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            onChange={(e) => setIncLC(e.target.checked)}
            checked={incLC}
          />{' '}
          Incluir Minusculas
        </label>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            onChange={(e) => setIncUC(e.target.checked)}
            checked={incUC}
          />{' '}
          Incluir Mayusculas
        </label>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            onChange={(e) => setIncNum(e.target.checked)}
            checked={incNum}
          />{' '}
          Incluir Números
        </label>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            onChange={(e) => setIncSpecial(e.target.checked)}
            checked={incSpecial}
          />{' '}
          Incluir Caractéres Especiales
        </label>
      </div>
      <h5 className="mt-8">Contraseña:</h5>
      <input
        className="border px-1 mr-5"
        type="text"
        value={passDisplay}
        readOnly
      />
      <Button1 handler={passGenBtnHandler}>Generar</Button1>
    </>
  );
};

export default PassGen;
