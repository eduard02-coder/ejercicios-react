import ExerciseHeader from '../../common/ExerciseHeader';
import TodoList from './TodoList';

const Ejercicio3 = () => {
  return (
    <>
      <ExerciseHeader num={3} />
      <main>
        <section className="enunciado">
          <h2>Enunciado:</h2>
          <h3>3. Lista Dinámica</h3>
          <h4>Objetivo del ejercicio:</h4>
          <p>
            Trabajar con la creación, eliminación y manipulación de elementos
            del DOM.
          </p>
          <h4>Ejercicio:</h4>
          <p>
            Crea una página con un campo de texto, un botón que diga "Agregar",
            y una lista vacía debajo.
          </p>
          <ul>
            <li>
              Cuando el usuario escriba un texto y haga clic en "Agregar", el
              texto debe añadirse como un nuevo elemento de la lista.
            </li>

            <li>
              Añade un botón al lado de cada elemento para eliminarlo de la
              lista.
            </li>
          </ul>
        </section>
        <hr />

        <section className="resolucion">
          <h2>Resolución:</h2>
          <TodoList />
        </section>
      </main>
    </>
  );
};

export default Ejercicio3;
