import { useDispatch, useSelector } from "react-redux";
import { clearcart } from "./utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = ()=>{
        dispatch(clearcart())
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Cart Items</h1>
      

      {cartItems.length === 0 ? (
        <h2 className="mt-4 text-lg font-medium">Your cart is empty 😕</h2>
      ) : (
        <>
        <button onClick={handleClearCart} className="font-semibold text-white bg-amber-600 px-3 py-0.5 my-2 rounded-md cursor-pointer">Clear Cart</button>
        <ul className="mt-4">
          {cartItems.map((item, index) => (
            <li key={index} className="text-lg font-medium">
              {item}
            </li>
          ))}
        </ul>
        </>
      )}
    </div>
  );
};

export default Cart;
