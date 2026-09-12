import List from '../../common/List';
import { useState } from 'react';

const ListFilter = ({ items }) => {
  const [filteredItems, setItems] = useState(items);

  const handler = (e) => {
    const textFragment = e.target.value;
    setItems(items.filter((elem) => elem.toLowerCase().includes(textFragment)));
  };

  return (
    <>
      <h5>Campo de texto:</h5>
      <input onChange={handler} className="border px-1 mb-6" type="text" />

      <h5 className="mb-0 pb-0">Lista:</h5>
      <List
        className="flex list-none gap-2 mt-0 pt-0 leading-none"
        items={filteredItems}
      />
    </>
  );
};

export default ListFilter;
