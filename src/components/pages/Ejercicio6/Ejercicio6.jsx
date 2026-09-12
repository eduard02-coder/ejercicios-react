import ExerciseHeader from '../../common/ExerciseHeader';
import Timer from './Timer';

const Ejercicio6 = () => {
  return (
    <>
      <ExerciseHeader num={6} />
      <main>
        <section className="enunciado">
          <h2>Enunciado:</h2>
          <h3>6. Temporizador con Inicio, Pausa y Reinicio</h3>
          <h4>Objetivo del ejercicio:</h4>

          <p>
            Practicar manejo de eventos, funciones de temporización y
            manipulación del DOM.
          </p>

          <h4>Ejercicio:</h4>
          <p>
            Crea una página con un temporizador que comience en 00:00:00.
            Incluye tres botones: “Iniciar”, “Pausar” y “Reiniciar”.
          </p>

          <ul>
            <li>
              Al hacer clic en “Iniciar”, el temporizador debe comenzar a contar
              los segundos, minutos y horas.
            </li>

            <li>“Pausar” detiene el conteo pero mantiene el tiempo actual.</li>
            <li>“Reiniciar” pone el temporizador en 00:00:00.</li>
          </ul>
        </section>
        <hr />

        <h2>Resolución:</h2>
        <section className="resolucion">
          <Timer />
        </section>
      </main>
    </>
  );
};

export default Ejercicio6;
