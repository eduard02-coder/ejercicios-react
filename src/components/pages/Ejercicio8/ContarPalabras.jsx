import counter from './counterEngine';
import { useState } from 'react';

const ContarPalabras = () => {
  const [resultText, setResultText] = useState('Palabras: 0, Letras: 0');

  const textChangeHandler = (e) => {
    const count = counter(e.target.value);
    setResultText(`Palabras: ${count.words}, Letras: ${count.letters}`);
  };

  return (
    <>
      <h5>Texto</h5>
      <textarea
        onChange={textChangeHandler}
        name=""
        className="border w-120 h-30 resize-none"
      ></textarea>
      <p>{resultText}</p>
      <p>
        El número de letras no incluye los caractéres especiales y los espacios
      </p>
    </>
  );
};

export default ContarPalabras;
