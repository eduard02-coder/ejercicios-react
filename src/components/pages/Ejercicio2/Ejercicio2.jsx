import ExerciseHeader from '../../common/ExerciseHeader';
import ClickCounter from './ClickCounter';

const Ejercicio2 = () => {
  return (
    <>
      <ExerciseHeader num={2} />
      <main>
        <section className="enunciado">
          <h2>Enunciado:</h2>
          <h3>2. Contador de Clics</h3>
          <h4>Objetivo del ejercicio:</h4>
          <p>
            Practicar el manejo de eventos y la actualización del contenido del
            DOM.
          </p>
          <h4>Ejercicio:</h4>
          <p>
            Crea una página con un botón que diga "Contar clics" y un texto
            inicial que muestre "Clics: 0". Cada vez que se haga clic en el
            botón, el texto debe actualizarse para mostrar el número total de
            clics realizados.
          </p>
        </section>
        <hr />

        <section className="resolucion">
          <h2>Resolución:</h2>

          <ClickCounter />
        </section>
      </main>
    </>
  );
};

export default Ejercicio2;
