import ExerciseHeader from '../../common/ExerciseHeader';
import PassGen from './PassGen';

const Ejercicio7 = () => {
  return (
    <>
      <ExerciseHeader num={7} />
      <main>
        <section className="enunciado">
          <h2>Enunciado:</h2>
          <h3>7. Generador de Contraseñas Aleatorias</h3>
          <h4>Objetivo del ejercicio:</h4>

          <p>
            Practicar generación de cadenas aleatorias y uso de formularios.
          </p>

          <h4>Ejercicio:</h4>
          <p>
            Crea una página con un campo de entrada para especificar la longitud
            de una contraseña y un botón que diga “Generar contraseña”.
          </p>

          <ul>
            <li>
              Al hacer clic en el botón, se debe mostrar una contraseña generada
              aleatoriamente usando letras, números y caracteres especiales.
            </li>

            <li>
              Si la longitud es menor a 4 o el campo está vacío, muestra un
              mensaje de error indicando que la longitud debe ser mayor o igual
              a 4.
            </li>
          </ul>
        </section>
        <hr />

        <h2>Resolución:</h2>
        <section className="resolucion">
          <PassGen />
        </section>
      </main>
    </>
  );
};

export default Ejercicio7;
