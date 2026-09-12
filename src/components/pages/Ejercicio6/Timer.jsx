import { useState, useEffect, useRef } from 'react';
import Button1 from '../../common/Button1';
import { TimerEngine } from './timerEngine';

const Timer = () => {
  const timeFormatter = (time) => {
    const minStr = String(time.min).padStart(2, '0');
    const secStr = String(time.sec).padStart(2, '0');
    const csStr = String(time.cs).padStart(2, '0');

    return `${minStr}:${secStr}:${csStr}`;
  };

  const [timeStr, timeStrSetter] = useState('00:00:00');

  // --- only one instance of timer
  const teRef = useRef(null);
  if (!teRef.current) {
    teRef.current = new TimerEngine(timeStrSetter, timeFormatter);
  }
  const te = teRef.current;

  // --- stop the timer when leaving the page
  useEffect(() => {
    return () => {
      teRef.current?.stop();
    };
  }, []);

  const startBtnHandler = () => {
    te.start();
  };

  const stopBtnHandler = () => {
    te.stop();
  };

  const resetBtnHandler = () => {
    te.reset();
  };

  return (
    <>
      <div className="display-container">
        <p>{timeStr}</p>
      </div>

      <div className="flex gap-1">
        <Button1 handler={startBtnHandler}>Iniciar</Button1>
        <Button1 handler={stopBtnHandler}>Pausar</Button1>
        <Button1 handler={resetBtnHandler}>Reiniciar</Button1>
      </div>
    </>
  );
};

export default Timer;
