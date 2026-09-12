import Button1 from '../../common/Button1';
import { useEffect } from 'react';
import { generateColor } from './colors';

const BgColorChanger = () => {
  const changeColorHandler = () => {
    document.body.style.backgroundColor = generateColor();
  };

  const resetColorHandler = () => {
    document.body.style.backgroundColor = '';
  };

  useEffect(() => {
    document.body.style.transition = 'background-color 0.3s ease';
    return () => {
      document.body.style.transition = '';
      document.body.style.backgroundColor = '';
    };
  }, []);

  return (
    <>
      <Button1 handler={changeColorHandler} className="mt-3">
        Cambiar Color
      </Button1>

      <Button1 handler={resetColorHandler} className="ml-6">
        Reestablecer Color
      </Button1>
    </>
  );
};

export default BgColorChanger;
