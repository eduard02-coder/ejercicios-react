import { twMerge } from 'tailwind-merge';
import { Routes, Route } from 'react-router-dom';
import Landing from './components/pages/Landing';
import Ejercicio1 from './components/pages/Ejercicio1/Ejercicio1';
import Ejercicio2 from './components/pages/Ejercicio2/Ejercicio2';
import Ejercicio3 from './components/pages/Ejercicio3/Ejercicio3';
import Ejercicio4 from './components/pages/Ejercicio4/Ejercicio4';
import Ejercicio5 from './components/pages/Ejercicio5/Ejercicio5';
import Ejercicio6 from './components/pages/Ejercicio6/Ejercicio6';
import Ejercicio7 from './components/pages/Ejercicio7/Ejercicio7';
import Ejercicio8 from './components/pages/Ejercicio8/Ejercicio8';
import Ejercicio9 from './components/pages/Ejercicio9/Ejercicio9';

function App() {
  return (
    <div className={'prose pl-12 pt-12 pb-30'}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/ejercicio1" element={<Ejercicio1 />} />
        <Route path="/ejercicio2" element={<Ejercicio2 />} />
        <Route path="/ejercicio3" element={<Ejercicio3 />} />
        <Route path="/ejercicio4" element={<Ejercicio4 />} />
        <Route path="/ejercicio5" element={<Ejercicio5 />} />
        <Route path="/ejercicio6" element={<Ejercicio6 />} />
        <Route path="/ejercicio7" element={<Ejercicio7 />} />
        <Route path="/ejercicio8" element={<Ejercicio8 />} />
        <Route path="/ejercicio9" element={<Ejercicio9 />} />
      </Routes>
    </div>
  );
}

export default App;
