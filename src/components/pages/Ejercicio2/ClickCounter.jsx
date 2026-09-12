import { useState } from 'react';
import Button1 from '../../common/Button1';

const ClickCounter = () => {
  const [clicks, setClicks] = useState(0);

  const handleIncrement = () => {
    setClicks(clicks + 1);
  };

  const handleReset = () => {
    setClicks(0);
  };

  return (
    <>
      <div className="my-3 flex items-center gap-6">
        <Button1 handler={handleIncrement}>Contar clics</Button1>
        <Button1 handler={handleReset}>Resetear Conteo</Button1>
      </div>

      <p className="">
        Clics: <span>{clicks}</span>
      </p>
    </>
  );
};

export default ClickCounter;
