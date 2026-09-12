import ExerciseHeader from '../../common/ExerciseHeader';
import Calculadora from './calculadora';

const Ejercicio5 = () => {
  return (
    <>
      <ExerciseHeader num={5} />
      <main className=" w-full ">
        <section className="enunciado">
          <h2>Enunciado:</h2>
          <h3>5. Calculadora Sencilla</h3>
          <h4>Objetivo del ejercicio:</h4>

          <p>
            Practicar la interacción entre eventos del DOM y lógica en
            JavaScript.
          </p>

          <h4>Ejercicio:</h4>
          <p>
            Crea una página con dos campos de entrada de números y cuatro
            botones: "Sumar", "Restar", "Multiplicar", y "Dividir".
          </p>

          <ul>
            <li>
              Al hacer clic en cualquiera de los botones, debe mostrarse el
              resultado de la operación en un área de texto o debajo de los
              botones.
            </li>
            <li>
              Asegúrate de validar los datos para evitar errores (como división
              por cero o entradas vacías).
            </li>
          </ul>
        </section>
        <hr />

        <h2>Resolución:</h2>
        <section className="resolucion">
          <Calculadora />
        </section>
      </main>
    </>
  );
};

export default Ejercicio5;
