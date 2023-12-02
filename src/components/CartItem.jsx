import rupee from "../assets/rupee.svg";

function CartItem({ name, quantity, price }) {
  return (
    <>
      <article className="font-mono">
        <h1 className="flex items-center justify-center p-2 text-sm md:text-lg">
          {name} x{quantity}............
          <img src={rupee} className="h-4 mr-1" />
          {price}
        </h1>
      </article>
    </>
  );
}

export default CartItem;
