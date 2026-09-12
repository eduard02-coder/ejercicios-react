import Link from '../common/Link';

const ExerciseHeader = ({ num }) => {
  return (
    <>
      <title>{`React - Ejercicio ${num}`}</title>
      <header>
        <h1>Ejercicio {num}</h1>
        <Link to="/">◀️ Atrás</Link>
        <hr />
      </header>
    </>
  );
};

export default ExerciseHeader;
