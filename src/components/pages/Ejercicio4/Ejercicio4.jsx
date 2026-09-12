import ExerciseHeader from '../../common/ExerciseHeader';
import ListFilter from './ListFilter';
import List from '../../common/List';

const Ejercicio4 = () => {
  const initialList = [
    'Perro',
    'Gato',
    'Pez',
    'Elefante',
    'Jirafa',
    'León',
    'Tigre',
    'Cebra',
    'Mono',
    'Conejo',
    'Águila',
    'Delfín',
    'Ballena',
    'Tortuga',
    'Loro',
    'Caballo',
    'Vaca',
    'Oveja',
    'Zorro',
    'Lobo',
  ];

  return (
    <>
      <ExerciseHeader num={4} />
      <main>
        <section className="enunciado">
          <h2>Enunciado:</h2>
          <h3>4. Filtro de Búsqueda en Tiempo Real</h3>
          <h4>Objetivo del ejercicio:</h4>

          <p>
            Practicar la interacción entre eventos del DOM y lógica en
            JavaScript.
          </p>

          <h4>Ejercicio:</h4>
          <p>
            Crea una página con un campo de texto y una lista predefinida de
            elementos.
          </p>

          <ul>
            <li>
              Mientras el usuario escribe en el campo, la lista debe
              actualizarse en tiempo real para mostrar solo los elementos que
              contienen el texto escrito.
            </li>
          </ul>

          <h4>Ejemplo:</h4>
          <p>
            Si la lista contiene <span> ["Perro", "Gato", "Pez"] </span>y el
            usuario escribe "Ga", solo "Gato" debe quedar visible.
          </p>
        </section>
        <hr />

        <section className="resolucion">
          <h2>Resolución:</h2>
          <ListFilter items={initialList} />
        </section>
      </main>
    </>
  );
};

export default Ejercicio4;
