import { useState } from 'react';
import ToolTip from '../../common/ToolTip';

const NumberInput = ({
  min = 4,
  defaultVal = 12,
  setterFunc = (num) => {},
}) => {
  const [inpVal, setInpVal] = useState(defaultVal);
  const isTooLow = inpVal !== '' && Number(inpVal) < min;

  let positiveInteger = defaultVal;

  const handleChange = (e) => {
    positiveInteger = e.target.value.replace(/[^0-9]/g, '');
    setInpVal(positiveInteger);
    setterFunc(Number(positiveInteger));
  };

  return (
    <div className="relative">
      <input
        onChange={handleChange}
        value={inpVal}
        className="border px-1"
        type="text"
        inputMode="numeric"
      />
      {isTooLow && <ToolTip message={`Debe ser mayor o igual a ${min}`} />}
    </div>
  );
};

export default NumberInput;
