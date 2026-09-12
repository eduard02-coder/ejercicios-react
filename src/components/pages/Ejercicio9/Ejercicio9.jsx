import ExerciseHeader from '../../common/ExerciseHeader';
import CheckTodoList from './CheckTodoList';

const Ejercicio9 = () => {
  return (
    <>
      <ExerciseHeader num={9} />
      <main>
        <section className="enunciado">
          <h2>Enunciado:</h2>
          <h3>9. Lista de Tareas con LocalStorage</h3>
          <h4>Objetivo del ejercicio:</h4>

          <p>Practicar persistencia de datos con localStorage.</p>

          <h4>Ejercicio:</h4>
          <p>Crea una aplicación de lista de tareas.</p>

          <ul>
            <li>
              Cada tarea debe incluir un texto y un checkbox para marcarla como
              completada.
            </li>

            <li>
              Las tareas se deben guardar en localStorage para que persistan
              incluso si la página se recarga.
            </li>

            <li>
              Debe incluir un botón para limpiar todas las tareas completadas y
              actualizar el localStorage.
            </li>
          </ul>
        </section>
        <hr />

        <h2>Resolución:</h2>
        <section className="resolucion">
          <CheckTodoList />
        </section>
      </main>
    </>
  );
};

export default Ejercicio9;
