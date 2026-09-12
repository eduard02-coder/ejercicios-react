import ExerciseHeader from '../../common/ExerciseHeader';
import BgColorChanger from './BgColorChanger';

const Ejercicio1 = () => {
  return (
    <>
      <ExerciseHeader num={1} />
      <main className="">
        <section className="enunciado">
          <h2>Enunciado:</h2>
          <h3>1. Cambiador de Color de Fondo</h3>
          <h4>Objetivo del ejercicio:</h4>
          <p>
            Practicar eventos en JavaScript y manipulación de estilos del DOM.
          </p>
          <h4>Ejercicio:</h4>
          <p>
            Crea una página web con un botón que diga "Cambiar color". Cada vez
            que el usuario haga clic en el botón, el color de fondo de la página
            debe cambiar a un color aleatorio.
          </p>
        </section>

        <section className="resolucion">
          <h2>Resolución:</h2>
          <BgColorChanger />
        </section>
      </main>
    </>
  );
};

export default Ejercicio1;
