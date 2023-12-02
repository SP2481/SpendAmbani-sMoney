/* eslint-disable no-unused-vars */
import { PDFDownloadLink } from "@react-pdf/renderer";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../features/cart/ItemsSlice";
import CartItem from "./CartItem";
import PdfComp from "./PdfComp";

function Footer() {
  const cart = useSelector((state) => state.items.cart);
  const { cartItems, total } = cart || { cartItems: [], total: 0 };
  const dispatch = useDispatch();

  return (
    <>
      <footer className="font-cormorant">
        <hr />

        <div className="text-center mt-4 ">
          <h3 className="text-3xl">Receipt</h3>
          {cartItems.map((item) => {
            return <CartItem key={item.id} {...item} />;
          })}
          <h4 className="text-2xl mt-4">Total :- {total.toLocaleString()}</h4>
        </div>
        <div className="flex justify-center gap-8 m-4">
          <button
            className="w-24 h-12 bg-black text-white rounded-full hover:scale-95 duration-100"
            onClick={() => dispatch(clearCart())}
          >
            Clear cart
          </button>
          <PDFDownloadLink
            document={<PdfComp items={cartItems} total={total} />}
            filename="Receipt"
          >
            {({ loading }) =>
              loading ? (
                <button className="w-28 h-12 bg-black text-white rounded-full hover:scale-95 duration-100">
                  Loading Receipt
                </button>
              ) : (
                <button className="w-28 h-12 bg-black text-white rounded-full hover:scale-95 duration-100">
                  Print Receipt
                </button>
              )
            }
          </PDFDownloadLink>
        </div>
      </footer>
    </>
  );
}

export default Footer;
