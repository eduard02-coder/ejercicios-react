import { twMerge } from 'tailwind-merge';

const Button1 = ({ children, handler = () => {}, className = '' }) => {
  return (
    <button
      onClick={handler}
      className={twMerge(`
        cursor-pointer
        bg-gray-600 
        py-2
        px-4
        text-white 
        rounded-sm
        active:bg-amber-600 
        ${className}
        `)}
    >
      {children}
    </button>
  );
};

export default Button1;
