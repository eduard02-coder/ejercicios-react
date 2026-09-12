const List = ({ items, className = '' }) => {
  return (
    <ul className={className}>
      {items.map((elem, index) => (
        <li key={index}>{elem}</li>
      ))}
    </ul>
  );
};

export default List;
