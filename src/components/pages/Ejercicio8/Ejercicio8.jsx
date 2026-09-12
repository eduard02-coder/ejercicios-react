import ExerciseHeader from '../../common/ExerciseHeader';
import ContarPalabras from './ContarPalabras';

const Ejercicio8 = () => {
  return (
    <>
      <ExerciseHeader num={8} />
      <main>
        <section className="enunciado">
          <h2>Enunciado:</h2>
          <h3>8. Contador de Palabras y Caracteres</h3>
          <h4>Objetivo del ejercicio:</h4>

          <p>
            Practicar eventos en tiempo real y manipulación avanzada del DOM.
          </p>

          <h4>Ejercicio:</h4>
          <p>
            Crea una página con un campo de texto donde el usuario pueda
            escribir un párrafo.
          </p>

          <ul>
            <li>
              Muestra en tiempo real el número de caracteres y palabras
              ingresados debajo del campo.
            </li>

            <li>
              Palabras deben ser separadas por espacios, y los caracteres no
              deben incluir espacios ni saltos de línea.
            </li>
          </ul>
        </section>
        <hr />

        <h2>Resolución:</h2>
        <section className="resolucion">
          <ContarPalabras />
        </section>
      </main>
    </>
  );
};

export default Ejercicio8;
