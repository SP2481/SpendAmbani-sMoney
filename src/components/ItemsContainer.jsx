import { useSelector } from "react-redux";

import Item from "./Item";

function ItemsContainer() {
  const { ItemsList } = useSelector((state) => state.items);
  return (
    <>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mt-28 mb-4">
        {ItemsList.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </section>
    </>
  );
}

export default ItemsContainer;
// onClick={() => dispatch(showModal())}
